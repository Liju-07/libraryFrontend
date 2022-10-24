import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
add=(data:any)=>{
  return this.http.post("http://localhost:8080/add",data)
}
view=()=>{
  return this.http.get("http://localhost:8080/view")
}
delete=(data:any)=>{
  return this.http.post("http://localhost:8080/delete",data)
}
search=(data:any)=>{
  return this.http.post("http://localhost:8080/search",data)
}
update=(data:any)=>{
  return this.http.post("http://localhost:8080/update",data)
}












}
