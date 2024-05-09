import { Component, Inject, Injectable, Injector, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { LoggerService } from '../../services/logger.service';

const myValue = "Data from useValue";

export function myFactory() {
  return "Data from useFactory";
}

@Injectable({
  providedIn: 'root'
})
export class MyService {
  getData() {
    return "Data from MyService";
  }
}

@Injectable()
export class MyOtherService {
  getData() {
    return "Data from MyOtherService";
  }
}

@Component({
  selector: 'app-di-practice',
  templateUrl: './di-practice.component.html',
  styleUrl: './di-practice.component.css',
  providers: [{
    provide: 'MyValue',
    useValue: myValue
  },
  {
    provide: MyService,
    // useClass: MyOtherService
  },
  {
    provide: 'MyFactory',
    useFactory: myFactory
  },
  {
    provide: MyOtherService,
    useExisting: MyService
  },
  TestService,
  LoggerService
]
})
export class DiPracticeComponent implements OnInit {

  constructor(
    @Inject('MyValue') private data: string,
    private myService: MyService,
    @Inject('MyFactory') private factoryData: string,
    private myOtherService: MyOtherService,
    private injector: Injector,
    private testService: TestService
  ){}

  ngOnInit(): void {
    console.log('From useValue: ', this.data);
    console.log('From MyService: ', this.myService.getData());
    console.log('From useFactory: ', this.factoryData);
    console.log('From MyOtherService: ', this.myOtherService.getData());
    console.log('From injector: ', this.injector.get(MyService).getData());
    console.log('From TestService: ', this.testService.getProducts());
  }



}
