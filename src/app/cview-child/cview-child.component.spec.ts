import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CviewChildComponent } from './cview-child.component';

describe('CviewChildComponent', () => {
  let component: CviewChildComponent;
  let fixture: ComponentFixture<CviewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CviewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CviewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
