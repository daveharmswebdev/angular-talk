import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-picsum',
  templateUrl: './picsum.component.html',
  styleUrls: ['./picsum.component.scss'],
})
export class PicsumComponent implements OnInit, OnDestroy {
  // id$: Observable<number>;
  imgSrc: string;
  subscription: Subscription[] = [];

  ngOnInit() {
    interval(5000).pipe(startWith(0)).subscribe(
        () => {
          const id = Math.floor(Math.random() * 100) + 1;
          this.imgSrc = 'https://i.picsum.photos/id/' + id + '/200/300.jpg';
          console.log('imgsrc subscription', this.imgSrc);
        }
      );

    this.subscription.push(
      interval(1000).subscribe(() => {
        const id = Math.floor(Math.random() * 100) + 1;
        this.imgSrc = 'https://i.picsum.photos/id/' + id + '/200/300.jpg';
        console.log('imgsrc subscription', this.imgSrc);
      })
    );

    this.id$ = interval(1000).pipe(
      tap(inter => console.log('interval from picsum component', inter)),
      map(() => Math.floor(Math.random() * 100) + 1)
    );
  }

  ngOnDestroy() {
    // this.subscription.forEach(s => s.unsubscribe());
  }
}
