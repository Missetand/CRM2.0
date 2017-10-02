import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-municipality',
  templateUrl: './new-municipality.component.html',
  styleUrls: ['./new-municipality.component.css']
})
export class NewMunicipalityComponent implements OnInit {
  isLinear = false;
  firmFormGroup: FormGroup;
  cvrFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  phoneFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  zipFormGroup: FormGroup;
  commentFormGroup: FormGroup;
  priorityFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firmFormGroup = this.fb.group({
      firmCtrl: ['', Validators.required]
    });
    this.cvrFormGroup = this.fb.group({
      cvrCtrl: ['', Validators.required]
    });
    this.emailFormGroup = this.fb.group({
      emailCtrl: ['', Validators.required]
    });
    this.phoneFormGroup = this.fb.group({
      phoneCtrl: ['', Validators.required]
    });
    this.addressFormGroup = this.fb.group({
      addressCtrl: ['', Validators.required]
    });
    this.zipFormGroup = this.fb.group({
      zipCtrl: ['', Validators.required]
    });
    this.commentFormGroup = this.fb.group({
      commentCtrl: ['', Validators.required]
    });
    this.priorityFormGroup = this.fb.group({
      priorityCtrl: ['', Validators.required]
    });
  }
}
