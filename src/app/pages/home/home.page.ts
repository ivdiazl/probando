import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  @ViewChild('titulo', { read: ElementRef, static: true}) titulo: ElementRef;

  constructor(private router: Router, private animationController: AnimationController) {
    this.router.navigate(['home/mis-datos']);
  }

  ngOnInit() {
  }

  public ngAfterViewInit(): void {
    const animation = this.animationController
      .create()
      .addElement(this.titulo.nativeElement)
      .iterations(Infinity)
      .duration(6000)
      .fromTo('transform', 'translate(0%)', 'translate(100%)')
      .fromTo('opacity', 0.2, 1);

    animation.play();
  }

  segmentChanged($event) {
    this.router.navigate(['home/' + $event.detail.value]);
  }

}
