import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeModel } from '../model/employee.model';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService],
  viewProviders: []
})
export class EmployeesComponent implements OnInit {
  title = 'Emp Data';
  employee: EmployeeModel;
  dataSource = new MatTableDataSource<EmployeeModel>;
  displayedColumns: string[] = ['status', 'message','id', 'name'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private employeeService: EmployeeService, private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (this.authService.getAuthStatus()==false) {
      this.router.navigate(['/login']);
      // event?.preventDefault();
    } else {
      this.employeeService.getEmployee().subscribe((data: EmployeeModel) => {
        console.log('data: ', data, ' data.status: ', data.status, ' data.data: ', data.data);
        this.employee = data;
        console.log(this.employee);
      });
    }
    
  }

  getEmpData(data: EmployeeModel) {
    
  }

  onLogOut() {
    this.authService.logout();
  }



}
