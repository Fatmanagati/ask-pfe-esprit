import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddepartementComponent } from './adddepartement.component';

describe('AdddepartementComponent', () => {
  let component: AdddepartementComponent;
  let fixture: ComponentFixture<AdddepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
