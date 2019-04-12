import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIdComponent } from './hero-id.component';

describe('HeroIdComponent', () => {
  let component: HeroIdComponent;
  let fixture: ComponentFixture<HeroIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
