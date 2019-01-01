import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadymemberComponent } from './alreadymember.component';

describe('AlreadymemberComponent', () => {
  let component: AlreadymemberComponent;
  let fixture: ComponentFixture<AlreadymemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadymemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadymemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
