package com.api.salesdata;

public class SalesRepModel {
	private int SalesRepId;
	private String SalesRepName;
	private String Country;
	private String Gender;
	
	public SalesRepModel() {
		
	}
	
	public SalesRepModel(int id, String name, String country, String gender) {
		this.SalesRepId = id;
		this.SalesRepName = name;
		this.Country = country;
		this.Gender = gender;
	}
	
	public int getSalesRepId() {
		return SalesRepId;
	}
	public void setSalesRepId(int salesRepId) {
		SalesRepId = salesRepId;
	}
	public String getSalesRepName() {
		return SalesRepName;
	}
	public void setSalesRepName(String salesRepName) {
		SalesRepName = salesRepName;
	}
	public String getCountry() {
		return Country;
	}
	public void setCountry(String country) {
		Country = country;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	
	
	
}
