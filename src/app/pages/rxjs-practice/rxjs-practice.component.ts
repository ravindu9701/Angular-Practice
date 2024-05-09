import { AfterViewInit, Component, OnInit } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, filter, forkJoin, from, fromEvent, interval, map, merge, of, pluck, retry, scan, startWith, switchMap, take, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrl: './rxjs-practice.component.css'
})
export class RxjsPracticeComponent implements OnInit, AfterViewInit {

  searchList: string[] = ['cat', 'dog'];

  isAvailable: boolean = false;

  constructor() {}
  ngAfterViewInit(): void {
    // this.debounceTimeOperator();
  }

  ngOnInit(): void {
    // this.mapOperator();
    // this.filterOperator();
    // this.tapOperator();
    // this.ofOperator();
    // this.fromOperator();
    // this.forkJoinOperator();
    // this.pluckOperator();
    // this.startWithOperator();
    // this.retryOperator();
    // this.takeOperator();
    // this.distinctUntilChangedOperator();
    // this.mergeOperator();
    // this.scanOperator();
    // this.takeUntilOperator();
    // this.concatMapOperator();
    this.switchMapOperator()
  }

  mapOperator() {
    const source = from([1,2,3,4,5]);

    source.pipe(map(value => value * 2)).subscribe(result => console.log(result));
  }

  filterOperator() {
    const source = from([1,2,3,4,5]);

    source.pipe(filter(value => value % 2 === 0)).subscribe(result => console.log(result));
  }

  debounceTimeOperator() {
    const serachInput = document.getElementById('search-input') as HTMLInputElement;

    fromEvent(serachInput, 'input').pipe(
      debounceTime(300)
    ).subscribe(event => {
      if(this.searchList.includes(serachInput.value)){
        this.isAvailable = true;
      } else {
        this.isAvailable = false;
      }
    })
  }

  tapOperator() {
    const source = from([1,2,3,4,5]);

    source.pipe(
      tap(value => console.log('value: ', value)),
      map(value => value * 2)).subscribe(result => console.log(result));
  }

  ofOperator() {
    of([1, 2, 3, 4, 5]).subscribe(result => console.log(result))
  }

  fromOperator() {
    from([1,2,3,4,5]).subscribe(result => console.log(result))
  }

  forkJoinOperator() {
    const source1 = of('Hello');
    const source2 = of('World');

    forkJoin([source1, source2]).subscribe(result => {
      console.log(result[0] + ' ' + result[1])
    })
  }

  pluckOperator() {
    const source = from([
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 }
    ]);

    source.pipe(
      pluck('name')
    ).subscribe(result => console.log(result))
  }

  startWithOperator() {
    const source = of(1, 2, 3);

    source.pipe(
      startWith('hello')
    ).subscribe(result => console.log(result))
  }

  retryOperator() {
    const source = interval(1000);

    source.pipe(
      retry(3)
    ).subscribe(
      result => console.log(result),
      error => console.log('Error:', error)
      );
  }

  takeOperator() {
    const source = interval(1000);

    source.pipe(
      take(3)
    ).subscribe(
      result => console.log(result)
      );
  }

  distinctUntilChangedOperator() {
    const source = from([1, 1, 2, 2, 3, 3, 3, 4, 5]);  
    
    source.pipe(
      distinctUntilChanged()
    ).subscribe(result => console.log(result));
  }

  mergeOperator() {
    const source1 = interval(1000);
    const source2 = interval(500);

    merge(source1, source2).subscribe(result => console.log(result));
  }

  scanOperator() {
    const source = from([1, 2, 3, 4, 5]);

    source.pipe(
      scan((acc, value) => acc + value, 0)
    ).subscribe(result => console.log(result));
  }

  takeUntilOperator() {
    const source = interval(1000);
    const stopper = timer(5000);

    source.pipe(
      takeUntil(stopper)
    ).subscribe(
      result => console.log(result));
  }

  concatMapOperator() {
    const source = of(1, 2, 3);

    source.pipe(
      concatMap(value => 
        interval(1000).pipe(
          take(3), 
          map(innerValue => value + innerValue)))
    ).subscribe(result => console.log(result));
  }

  switchMapOperator() {
    const source1 = of(1, 2, 3);
    const source2 = of("A", "B", "C");

    source1.pipe(
      switchMap(val => {
        console.log('Source 1: ', val);
        return source2;
      })
    ).subscribe(result => console.log("Result: ", result));
  }

}
