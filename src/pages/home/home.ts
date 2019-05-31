import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Scene, { EASE_IN_OUT } from 'scenejs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.showSparkles()
  }

  private showSparkles() {
    const lockScene = new Scene();

    const circles = document.querySelectorAll("#circles1 .circle");

    const circlesPosition = [
      { x: 0, y: 0, r: 50, delay: 0, duration: 0.9 },
      { x: -20, y: -40, r: 20, delay: 0.3, duration: 0.6 },
      { x: -30, y: 50, r: 30, delay: 0.6, duration: 0.6 },
      { x: 50, y: -30, r: 25, delay: 0.8, duration: 0.7 }
    ];

    for (let i = 0; i < circles.length; ++i) {
      const cp = circlesPosition[i];
      const r = cp.r + "px";
      const w = (cp.r * 2) + "px";
      const { delay, duration, x, y } = cp;

      lockScene.newItem("#circles1 .circle:nth-child(" + (i + 1) + ")", {
        easing: EASE_IN_OUT,
        selector: true,
      }).set({
        0: { "opacity": 1, "margin-left": "-" + r, "border-width": r, "margin-top": "-" + r, width: w, height: w, transform: { translate: x + "px," + y + "px", scale: "0,0" } },
        [delay + 0.001]: { transform: "scale(0,0)", "border-width": r },
        [duration + delay]: { transform: "scale(1,1)", "border-width": "0px" },
      })
    }
    lockScene.setIterationCount(1);
    lockScene.play();
  }

}
