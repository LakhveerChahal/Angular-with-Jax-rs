import {
  Component,
  OnInit,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { DataService } from '../services/data.service';
import { SalesRep } from '../Models/salesrep.model';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-salesreplist',
  templateUrl: './salesreplist.component.html',
  styleUrls: ['./salesreplist.component.css'],
})
export class SalesreplistComponent implements OnInit {
  salesReps: SalesRep[] = null;
  toCreateOrUpdate = false;
  toDelete = false;
  deleteId: number = null;
  isLoading = false;
  editSalesRep: SalesRep = {
    salesRepName: '',
    country: '',
    gender: '',
  };
  isCreateRequest = true;
  editRepId: number = 0;
  @ViewChild('createOrUpdateForm') createOrUpdateForm: NgForm;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.isLoading = true;
    this.dataService.getData().subscribe((list) => {
      this.salesReps = list;
      this.isLoading = false;
    });
  }

  showForm() {
    this.editSalesRep = {
      salesRepName: '',
      country: '',
      gender: 'Male',
    };
    this.toCreateOrUpdate = true;
    this.isCreateRequest = true;
  }

  onCreate(formData: NgForm) {
    if (formData.invalid) {
      return;
    }
    const salesRep: SalesRep = {
      salesRepName: formData.value.name,
      country: formData.value.country,
      gender: formData.value.gender,
    };

    if (this.isCreateRequest) {
      this.dataService.createRep(salesRep).subscribe((response) => {
        this.toCreateOrUpdate = false;
        this.getList();
      });
    } else {
      console.log(salesRep);
      salesRep.salesRepId = this.editRepId;
      this.dataService.updateRep(salesRep).subscribe((res) => {
        this.toCreateOrUpdate = false;
        this.getList();
        console.log(res);
      });
    }
  }

  raiseDeleteRequest(repId: number) {
    this.toDelete = true;
    this.deleteId = repId;
  }

  confirmDelete() {
    if (this.deleteId === null) {
      alert('Something went wrong!');
      return;
    }

    this.dataService.deleteRep(this.deleteId).subscribe(
      () => {
        this.getList();
      },
      (err: HttpErrorResponse) => {
        this.toDelete = false;
        this.deleteId = null;
      },
      () => {
        this.toDelete = false;
        this.deleteId = null;
      }
    );
  }

  editRepInfo(salesRep: SalesRep) {
    this.editSalesRep = Object.assign({}, salesRep);
    this.isCreateRequest = false;
    this.toCreateOrUpdate = true;
    this.editRepId = salesRep.salesRepId;
  }
}
