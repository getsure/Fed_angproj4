import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiddsComponent } from './kidds.component';

describe('KiddsComponent', () => {
  let component: KiddsComponent;
  let fixture: ComponentFixture<KiddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KiddsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
