import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, forkJoin, fromEvent, map, take, withLatestFrom, zip } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  nameSource = ['Messi','Ronaldo','Neymar',' Mbappe'];

  countrySource = ['Argentina','Brazil','France','Portugal'];

  // Tamplate Refrences
  @ViewChild('name') name:ElementRef | undefined;
  @ViewChild('country') country:ElementRef | undefined;

  ngAfterViewInit(){

  //  const nameObs = fromEvent<any>(this.name?.nativeElement,'change').pipe(
  //   map(event => event.target.value),take(4))

  //  const countryObs = fromEvent<any>(this.country?.nativeElement,'change').pipe(
  //   map(event => event.target.value),take(3))

    // take operator use to complete ovserable

    const nameObs = fromEvent<any>(this.name?.nativeElement,'change').pipe(
      map(event => event.target.value))
  
     const countryObs = fromEvent<any>(this.country?.nativeElement,'change').pipe(
      map(event => event.target.value))


    // Example Zip
    // zip(nameObs,countryObs).subscribe(([name,country])=>{
    //   console.log(name,country);
    //   this.createDynamicBox(name,country,"elContainer");
    // })

    //Example Forkjoin
    // forkJoin([nameObs,countryObs]).subscribe(([name,country])=>{
    //   console.log(name,country);
    //   this.createDynamicBox(name,country,"elContainer");
    // })

    //Example CombineLatest
    combineLatest([nameObs,countryObs]).subscribe(([name,country])=>{
      console.log(name,country);
      this.createDynamicBox(name,country,"elContainer");
    })

    //Example WithLatestFrom
    nameObs.pipe(withLatestFrom(countryObs)).subscribe(([name,country])=>{
      console.log(name,country);
      this.createDynamicBox(name,country,"elContainer2");
    })
    
  }

  createDynamicBox(name: any,country: any,contenerId: any){
    
    let el = document.createElement('div');
    el.innerText = "You selected player is " + name + " " + "and country is " + country;
    el.setAttribute("class","red");
    document.getElementById(contenerId)?.appendChild(el);

  }

  ngOnInit(): void {
  }

}
