import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeModel } from '../model/employee.model';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Emp } from '../model/emp';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService],
  viewProviders: []
})
export class EmployeesComponent implements OnInit {
  
  title = 'Emp Data';
  dataSource = new MatTableDataSource<Emp>();
  displayedColumns: string[] = ['id', 'name', 'age', 'salary'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private employeeService: EmployeeService, private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (this.authService.getAuthStatus()==false) {
      this.router.navigate(['/login']);
    } else {
      this.employeeService.getEmployee().subscribe((data: EmployeeModel) => {
        console.log(data.data);
        this.dataSource.data = data.data;
        this.dataSource.paginator = this.paginator
        
      });
    }
    
  }

  getEmpData(data: EmployeeModel) {
    
  }

  onLogOut() {
    this.authService.logout();
  }



}
