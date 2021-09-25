import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerIconComponent } from './computer-icon.component';

describe('ComputerIconComponent', () => {
  let component: ComputerIconComponent;
  let fixture: ComponentFixture<ComputerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
