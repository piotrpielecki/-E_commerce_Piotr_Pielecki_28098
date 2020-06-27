import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
  getCartQuanity() {
    let quantity = 0;
    for (const product of this.mainService.cart) {
      quantity += 1;
    }
    return quantity;
  }

}
