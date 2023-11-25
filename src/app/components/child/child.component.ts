import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // inputs: ['count']
})
export class ChildComponent implements OnChanges {
  @Input() count: number = 5;
  // @Input('CustomCount') count: number = 5;
  // count: any;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  @ContentChild('content') content!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      console.log(this.count);
    }

    for (let property in changes) {
      if (property === 'count') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
      }
    }
  }

  ngAfterContentInit() {
    console.log('content:', this.content);
    this.renderer.setStyle(this.content.nativeElement, 'color', 'blue');
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }
}
