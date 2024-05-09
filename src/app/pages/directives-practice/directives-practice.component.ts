import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MyService } from '../di-practice/di-practice.component';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrl: './directives-practice.component.css'
})
export class DirectivesPracticeComponent implements OnInit {

  condition: boolean = false;

  title = 'directive-not-standalone';

  user = {
    password: ''
  }

  public images = [
    {
        source: "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
        title: "Angular logo"
    },
    {
        source: "https://angular.io/generated/images/marketing/home/code-icon.svg",
        title: "Angular code icon"
    },
    {
        source: "https://angular.io/generated/images/marketing/home/angular-connect.png",
        title: "Angular Connect"
    }
];

  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  public dropdownOpen: boolean = false;

  constructor(private myService: MyService) {}
  ngOnInit(): void {
    console.log(this.myService.getData())
  }

  toggleDropdown() {
    this.dropdownOpen = true;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }
}
