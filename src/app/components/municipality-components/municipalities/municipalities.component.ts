import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { MdPaginator, MdSort } from '@angular/material';
import { CustomerDatabase, CustomerDataService, CustomerSource } from '../../../services';


import { Customer } from '../../../model';

@Component({
  selector: 'app-municipalities',
  templateUrl: './municipalities.component.html',
  styleUrls: ['./municipalities.component.css']
})
export class MunicipalitiesComponent implements OnInit {

  customerData: Customer[];
  private result: boolean;
  allCustomers: Customer[];

    // For MD data table.

  // private CustomerDatabase = new CustomerDatabase();  // Requires a param but? Moved to constructor.
  private dataSource: CustomerSource | null;
  private displayedColumns = [
    'firmName',
    'cvr',
    'email',
    'phoneNumber',
    'address',
    'zipCode',
    'comment',
    'priority',
    'delete'
  ];

  @ViewChild(MdPaginator)
  paginator: MdPaginator;
  @ViewChild(MdSort)
  sort: MdSort;

  public dataLength: any; // For member counter on DOM.

  constructor(
      private customerService: CustomerDataService,
      private customerDatabase: CustomerDatabase,
      private router: Router,
  ) {}

  ngOnInit() {

      this.customerDatabase.getCustomers()
          .subscribe(customers => {
              this.dataSource = new CustomerSource(this.customerDatabase, this.paginator);
              this.dataLength = customers;
          });
    }
}
