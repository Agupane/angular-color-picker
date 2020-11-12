import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  public selectedColor: string;

  constructor() { }

  ngOnInit() {
  }

  public selectColor(color) {
    this.selectedColor = color;
  }

  public rtpHook($event) {
    console.log(`radial color picker lifecycle event: ${$event}`);
  }

  public colorChange($event) {
    console.log(`colorChange event: ${$event}`);
    this.selectedColor = $event;
  }
}
