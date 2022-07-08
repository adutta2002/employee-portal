import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmpdetailsComponent } from './empdetails.component';
import { EmployeeService } from '../employee.service';

describe('EmpdetailsComponent', () => {
  let component: EmpdetailsComponent;
  let fixture: ComponentFixture<EmpdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdetailsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [EmployeeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Events can be tested using the async/fakeAsync functions provided by '@angular/core/testing', since any event in the browser is asynchronous and pushed to the event loop/queue.
  it('button click', fakeAsync(() => {
    spyOn(component, 'getName'); //method attached to the click.
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.getName).toHaveBeenCalled();
  
  }));
  
});
