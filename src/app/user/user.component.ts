import { Component, OnInit, ViewChild } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { User } from 'src/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ELEMENT_DATA : User[];
  displayedColumns: string[] = ['name','email','phone','company'];
  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service:UserdetailsService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllReports();
  }

  public getAllReports(){
    let resp = this.service.userReports();
    resp.subscribe(report=>this.dataSource.data=report  as User[])
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
