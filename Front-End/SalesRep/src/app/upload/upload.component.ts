import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(uploadedFile: FileList){
    console.log(uploadedFile);

    if(uploadedFile && uploadedFile.length > 0){
      let file: File = uploadedFile.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        let row = csv.split('\n');
        row.forEach(r => {
          let cols = r.split(',');
          if(cols[0] !== 'distributor'){
            
          }
        });
        console.log(row);
      };
    }
  }

}
