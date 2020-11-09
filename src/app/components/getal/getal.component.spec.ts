import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalComponent } from './getal.component';

describe('GetalComponent', () => {
  let component: GetalComponent;
  let fixture: ComponentFixture<GetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
