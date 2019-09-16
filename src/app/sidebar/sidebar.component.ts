import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  introJS = introJs();
  constructor() {}

  ngOnInit(): void {}

  startSteps(): void {
    this.introJS
      .setOptions({
        steps: [
          {
            element: '#step1-li',
            intro: 'Welcome to your new app!'
          },
          {
            element: '#step2-li',
            intro: "Ok, wasn't that fun?"
          },
          {
            element: '#step3-li',
            intro: "let's keep going"
          },
          {
            element: '#step4-li',
            intro: 'More features, more fun.'
          },
          {
            // As you can see, thanks to the element ID
            // I can set a step in an element in an other component
            element: '#step1',
            intro: 'Accessed and element in another component'
          }
        ],
        hidePrev: true,
        hideNext: false
      })
      .start();
  }
}
