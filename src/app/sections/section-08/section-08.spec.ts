import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section08 } from './section-08';

describe('Section08', () => {
  let component: Section08;
  let fixture: ComponentFixture<Section08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section08]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
