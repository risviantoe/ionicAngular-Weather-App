import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public fav = [];
  city = '';

    constructor() {
        this.fav = JSON.parse(localStorage.getItem('fav'));
        this.city = JSON.parse(localStorage.getItem('city'));
        console.log(this.fav);
    }



}
