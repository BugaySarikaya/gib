import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import {
  Observable,
  Subscriber,
  Subscription,
  combineLatest,
  concat,
  exhaustMap,
  filter,
  forkJoin,
  from,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnDestroy, AfterViewInit {
  subscriptionRef!: Subscription;
  @ViewChild('button', { static: true }) button: any;
  clicks!: Observable<any>;
  count = 0;

  constructor(private http: HttpClient) {
    // rx
    // observable //gözlemlenebilir
    // observer //gözlemci -> subscribe //abone
    // callback function (callback-hell), es6 promise(resolve, reject, pending) (then soup)
    // observable (next,error,complete) subscribe, unsusbcribe
    // RxJS 3rd party package (Reactive Extensions Library for JavaScript)
    /*
     Http request, value changes/status changes, custom events
    */
    // const obs = new Observable<number>((observer: Subscriber<number>) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.next(5);
    //   // observer.error('An error occured');
    //   observer.complete();
    // });
    // const obs = new Observable((observer) => {
    //   console.log('Observable starts');
    //   setTimeout(() => {
    //     observer.next('1');
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.next('2');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('3');
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.next('4');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.next('5');
    //   }, 5000);
    // });
    // operators
    // of
    // const array1 = [1, 2, 3, 4, 5, 6, 7];
    // const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    // const obs = of(array1, array2);
    // from
    // const obs = from('Hello World');
    // combineLatest
    // const timerOne$ = timer(1000, 4000);
    // const timerTwo$ = timer(2000, 4000);
    // const timerThree$ = timer(3000, 4000);
    // const obs = combineLatest(
    //   timerOne$,
    //   timerTwo$,
    //   timerThree$,
    //   (one, two, three) => {
    //     return `Timer One (Proj) Latest: ${one},
    //           Timer Two (Proj) Latest: ${two},
    //           Timer Three (Proj) Latest: ${three}`;
    //   }
    // );
    // concat
    // const obs = concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9));
    // forkJoin
    // let req1 = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    // let req2 = this.http.get('https://jsonplaceholder.typicode.com/todos/2');
    // let req3 = this.http.get('https://jsonplaceholder.typicode.com/todos/3');
    // forkJoin([req1, req2, req3]).subscribe((responseList) => {
    //   console.log('res1', responseList[0]);
    //   console.log('res2', responseList[1]);
    //   console.log('res3', responseList[2]);
    // });
    // const obs = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.next(5);
    //   observer.complete();
    // }).pipe(
    //   filter((val: any) => val > 2),
    //   map((val) => {
    //     return (val as number) * 2;
    //   })
    // );
    // const subscription = obs.subscribe(
    //   (data: any) => console.log('Next:', data),
    //   (error: any) => console.error('Error:', error),
    //   () => console.log('Complete')
    // );
  }

  ngAfterViewInit() {
    this.clicks = fromEvent(this.button.nativeElement, 'click');
    this.customMergeMap();
  }

  obsFac(count: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(count + ' A');
      }, 1000);
      setTimeout(() => {
        observer.next(count + ' B');
      }, 2000);
      setTimeout(() => {
        observer.next(count + ' C');
      }, 3000);
      setTimeout(() => {
        observer.next(count + ' D');
      }, 4000);
      setTimeout(() => {
        observer.next(count + ' E');
        observer.complete();
      }, 5000);
    });
  }

  customMergeMap() {
    this.clicks
      .pipe(
        exhaustMap(() => { //switchMap, mergeMap
          this.count = this.count + 1;
          return this.obsFac(this.count);
        })
      )
      .subscribe((val) => console.log(val));
  }

  ngOnDestroy(): void {
    if (this.subscriptionRef) {
      this.subscriptionRef.unsubscribe();
    }
  }
}
