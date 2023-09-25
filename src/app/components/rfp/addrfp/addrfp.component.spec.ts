import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrfpComponent } from './addrfp.component';

describe('AddrfpComponent', () => {
  let component: AddrfpComponent;
  let fixture: ComponentFixture<AddrfpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrfpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
