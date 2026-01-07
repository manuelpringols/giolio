import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section09 } from './section-09';

describe('Section09', () => {
  let component: Section09;
  let fixture: ComponentFixture<Section09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section09]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section09);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
