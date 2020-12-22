import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'xueqiu';
  activeDom = 1;
  addActive(index){
    this.activeDom = index;
  }
}
