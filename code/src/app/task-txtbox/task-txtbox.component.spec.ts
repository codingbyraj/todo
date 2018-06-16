import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTxtboxComponent } from './task-txtbox.component';

describe('TaskTxtboxComponent', () => {
  let component: TaskTxtboxComponent;
  let fixture: ComponentFixture<TaskTxtboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTxtboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTxtboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
