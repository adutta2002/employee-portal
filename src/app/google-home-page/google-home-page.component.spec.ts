import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleHomePageComponent } from './google-home-page.component';

describe('GoogleHomePageComponent', () => {
  let component: GoogleHomePageComponent;
  let fixture: ComponentFixture<GoogleHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
