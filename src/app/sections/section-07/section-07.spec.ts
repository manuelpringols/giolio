import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section07 } from './section-07';

describe('Section07', () => {
  let component: Section07;
  let fixture: ComponentFixture<Section07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section07]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section07);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
