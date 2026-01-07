import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section04 } from './section-04';

describe('Section04', () => {
  let component: Section04;
  let fixture: ComponentFixture<Section04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section04]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
