import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section03 } from './section-03';

describe('Section03', () => {
  let component: Section03;
  let fixture: ComponentFixture<Section03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
