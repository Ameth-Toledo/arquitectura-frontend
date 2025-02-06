import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturesComponent } from './asignatures.component';

describe('AsignaturesComponent', () => {
  let component: AsignaturesComponent;
  let fixture: ComponentFixture<AsignaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
