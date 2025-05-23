import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoFormComponent } from './curriculo-form/curriculo-form.component';

describe('CurriculoFormComponent', () => {
  let component: CurriculoFormComponent;
  let fixture: ComponentFixture<CurriculoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculoFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurriculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});