import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arriba',
  templateUrl: './arriba.component.html',
  styleUrls: ['./arriba.component.css'],
})
export class ArribaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toHeader() {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
  }
}
