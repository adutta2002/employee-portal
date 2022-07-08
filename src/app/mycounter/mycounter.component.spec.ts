import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../state/counter.reducer';
import { MycounterComponent } from './mycounter.component';

describe('MycounterComponent', () => {
  let component: MycounterComponent;
  let fixture: ComponentFixture<MycounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycounterComponent ],
      imports: [StoreModule.forRoot({count: counterReducer})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the counter value when increment is clicked', () => {
    clickByCSS('#increment');
 
    expect(getCounterText()).toBe(
      'Current Count: 1'
    );
  });

  it('should decrement the counter value when decrement is clicked', () => {
    clickByCSS('#decrement');
 
    expect(getCounterText()).toBe(
      'Current Count: -1'
    );
  });
 
  it('should reset the counter value when reset is clicked', () => {
    clickByCSS('#increment');
    clickByCSS('#reset');
 
    expect(getCounterText()).toBe(
      'Current Count: 0'
    );
  });

  

  function clickByCSS(selector: string) {
    const debugElement = fixture.debugElement.query(By.css(selector));
    const el: HTMLElement = debugElement.nativeElement;
    el.click();
    fixture.detectChanges();
  }
 
  function getCounterText() {
    const compiled = fixture.debugElement.nativeElement;
    return compiled.querySelector('div').textContent;
  }

});
