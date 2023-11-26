import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  paramsSubscription!: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // this.router.navigate(['/5']);
    // this.router.getCurrentNavigation().extras.state
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params['id']);
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params['id']);
      }
    );

    this.activatedRoute.queryParamMap.subscribe((params: any) => {
      console.log(params['params']['data']);
    });

    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
