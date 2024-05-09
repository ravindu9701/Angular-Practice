import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

class DataListProvider {
  // in a real application the returned data will be different every time
  get data() {
    return [1, 2, 3, 4, 5];
  }
}

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  providers: [DataListProvider]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit{

  numberOfTicks = 0;
  secondSet = 0;

  constructor(private cdr: ChangeDetectorRef, public dataProvider: DataListProvider) {
    // setInterval(() => {
    //   this.numberOfTicks++;
    //   this.cdr.markForCheck(); //To update the view
    // }, 1000);
    cdr.detach();
    setInterval(() => {
      this.cdr.detectChanges();
    }, 5000);
  }
  ngOnInit(): void {
    // setInterval(() => {
    //   this.secondSet++;
    // }, 1000);
  }

  
}
