import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ArchiveUsersDataSource } from './archive-users-datasource';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'archive-users',
  templateUrl: './archive-users.component.html',
  styleUrls: ['./archive-users.component.css']
})
export class ArchiveUsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ArchiveUsersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'user','position','password'];

  constructor(public admin:AdminService){
    this.admin.httpOptions.headers = this.admin.httpOptions.headers.set('Authorization',localStorage.getItem('token'));

  }
  ngOnInit() {
    this.dataSource = new ArchiveUsersDataSource(this.admin);
  }
  
}
