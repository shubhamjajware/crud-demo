import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empData = {};
  baseUrl = 'https://dummy.restapiexample.com/api/v1/employee';
  // baseUrl = './src/api/employee.json'
  id = 1;
  uid = 21;
  dId =2;


  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${this.id}`);
  }

  postEmployee(data: any): Observable<any> {
    return this.httpClient.post("https://dummy.restapiexample.com/api/v1/create", data)
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.httpClient.put("https://dummy.restapiexample.com/api/v1/update/"+  `${ this.uid }`, data);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete("https://dummy.restapiexample.com/api/v1/delete/" + `${this.dId}`);
  }

}
// this.httpClient.get(`${this.baseUrl}/${this.id}`);
