import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievequestionComponent } from './retrievequestion.component';

describe('RetrievequestionComponent', () => {
  let component: RetrievequestionComponent;
  let fixture: ComponentFixture<RetrievequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievequestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrievequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
