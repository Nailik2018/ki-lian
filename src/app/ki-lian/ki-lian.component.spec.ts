import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiLianComponent } from './ki-lian.component';

describe('KiLianComponent', () => {
  let component: KiLianComponent;
  let fixture: ComponentFixture<KiLianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiLianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiLianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
