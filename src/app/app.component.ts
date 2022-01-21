import { Component } from '@angular/core';

@Component({
  selector: "app-root", //html tag
  template: `
  <h1>hello world, i\`m {{word}}</h1>
  <input [(ngModel)]="word">
  <div>{{1}}<div>
  <button (click)="chng(-1)">-</button> {{cnt}} <button (click)="chng(1)">+</button>
  `
})
export class AppComponent {
  word: string = "Pear";
  cnt: number = 0;
  chng(x:number): void {
    if(this.cnt>0 || x>0){this.cnt+=x};
  }
}
