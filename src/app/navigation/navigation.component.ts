import {Component, OnInit} from '@angular/core';
import {opacityAnimation} from "../animations/opacity.animation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    opacityAnimation,
  ]
})
export class NavigationComponent implements OnInit {

  public showMobileNav = false;

  constructor() {
  }

  ngOnInit() {

    const body = document.body;
    let lastScroll = 0;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";

    const checkPosition = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll < 20 || window.innerWidth > 640) {
        body.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', this.debounce(checkPosition));
  }

  private debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
      let context = this, args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };


}
