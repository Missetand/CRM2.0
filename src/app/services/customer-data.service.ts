import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { Inject, Injectable } from '@angular/core';

import { Customer } from '../model';

// Data Table imports.
import { MdPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomerDataService {

  private customerData$: FirebaseListObservable<Customer[]>;

  constructor(
    public af: AngularFireDatabase,

    // For Create and Update functions.
    @Inject(FirebaseApp) fb) {
      this.customerData$ = af.list('/municipalities');
    }
}

// ... CRUD stuff not relevant to the MD Table ...


// *** MD DATA TABLE SERVICES. ***


@Injectable()
export class CustomerDatabase {

    /* Stream that emits whenever the data has been modified. */
    public dataChange: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
    get data(): Customer[] {
        return this.dataChange.value;
    }

    // Connection to remote db.
    private database = this.customerService.af.list('/municipalities', {
        query: {
            orderByChild: 'firmName'
        }
    });
    public getCustomers(): FirebaseListObservable<Customer[]> {
        return this.database;
    }


    constructor(private customerService: CustomerDataService) {
        this.getCustomers()
            .subscribe(data => this.dataChange.next(data));
    }
}


@Injectable()
export class CustomerSource extends DataSource<Customer> {


    constructor(
        private CustomerDatabase: CustomerDatabase,
        private paginator: MdPaginator) {
        super();
    }


    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Customer[]> {

      const displayDataChanges = [
          this.CustomerDatabase.dataChange,
          this.paginator.page,
      ];

      return Observable
          .merge(...displayDataChanges) // Convert object to array with spread syntax.
          .map(() => {
              const dataSlice = this.CustomerDatabase.data.slice(); // Data removed from viewed page.

              // Get the page's slice per pageSize setting.
              const startIndex = this.paginator.pageIndex * this.paginator.pageSize;

              const dataLength = this.paginator.length;  // This is for the counter on the DOM.

              return dataSlice.splice(startIndex, this.paginator.pageSize);
          });
    }
    disconnect() {}
}
