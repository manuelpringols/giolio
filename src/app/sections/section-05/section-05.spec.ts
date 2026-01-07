import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section05 } from './section-05';

describe('Section05', () => {
  let component: Section05;
  let fixture: ComponentFixture<Section05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section05]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section05);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
