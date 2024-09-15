import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PviewChildComponent } from './pview-child.component';

describe('PviewChildComponent', () => {
  let component: PviewChildComponent;
  let fixture: ComponentFixture<PviewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PviewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PviewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
