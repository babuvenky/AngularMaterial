import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http:HttpClient) {}
  
    public userReports(){
      return  this.http.get("https://jsonplaceholder.typicode.com/users");
    }
  }

