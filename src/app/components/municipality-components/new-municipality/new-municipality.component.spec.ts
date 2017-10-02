import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMunicipalityComponent } from './new-municipality.component';

describe('NewMunicipalityComponent', () => {
  let component: NewMunicipalityComponent;
  let fixture: ComponentFixture<NewMunicipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMunicipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
