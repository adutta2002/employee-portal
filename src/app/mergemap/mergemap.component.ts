import { Component, OnInit } from '@angular/core';
import { from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  constructor() { }

  getData(data:string){
    return of(data + " Video Uploded");
  }

  createDynamicBox(res: any,contenerId: any){
    
    let el = document.createElement('li');
    el.innerText = res;
    document.getElementById(contenerId)?.appendChild(el);

  }

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News']);

    source.pipe(
      
      mergeMap(res => this.getData(res))

    ).subscribe(res => {

      console.log(res);
      this.createDynamicBox(res,'elContainer');
    })
  }

}
