import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { MdPaginator } from '@angular/material';
import { CustomerDatabase, CustomerDataService, CustomerSource } from '../customer-data.service';


import { Customer } from '../customer.model';



@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  membersData: Customer[];
  private result: boolean;
  allMembers: Customer[];

  // For search
  startAt = new Subject();
  endAt = new Subject();
  lastKeypress: 0;

    // For MD data table.

  // private CustomerDatabase = new CustomerDatabase();  // Requires a param but? Moved to constructor.
  private dataSource: CustomerSource | null;
  private displayedColumns = [
    'firmName',
    'cvr',
    'phoneNumber',
    'address',
    'zipCode',
    'comment',
    'priority',
    'delete'
  ];

  @ViewChild(MdPaginator)
  paginator: MdPaginator;

  public dataLength: any; // For member counter on DOM.

  constructor(
      private customerService: CustomerDataService,
      private customerDatabase: CustomerDatabase,
      private router: Router,
  ) {}

  ngOnInit() {

      this.customerDatabase.getMembers()
          .subscribe(members => {
              this.dataSource = new CustomerSource(this.customerDatabase, this.paginator);
              this.dataLength = members;
          });
    }
}
