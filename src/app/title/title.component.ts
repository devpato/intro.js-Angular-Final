import { Component, OnInit } from '@angular/core';
import introJS from 'intro.js/intro.js';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    introJS().start();
  }
}
