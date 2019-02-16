import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileMethodologiesComponent } from './agile-methodologies.component';

describe('AgileMethodologiesComponent', () => {
  let component: AgileMethodologiesComponent;
  let fixture: ComponentFixture<AgileMethodologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileMethodologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileMethodologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
