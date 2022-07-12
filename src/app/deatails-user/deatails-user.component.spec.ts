import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailsUserComponent } from './deatails-user.component';

describe('DeatailsUserComponent', () => {
  let component: DeatailsUserComponent;
  let fixture: ComponentFixture<DeatailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
