import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section06 } from './section-06';

describe('Section06', () => {
  let component: Section06;
  let fixture: ComponentFixture<Section06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section06]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
