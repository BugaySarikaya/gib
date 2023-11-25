import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { strengthPassword } from 'src/app/validators/strength-password';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit, OnInit {
  // change detection input changes, DOM events, timer events (setTimeout, setInterval()), htttp requests etc.
  // constructor()
  // ngOnChanges @Input
  // ngOnInit backend call, http requests, changeDetection (first)   // @ViewChild, @ViewChildren, @ContentChild, @ContentChildren
  // ngDoCheck

  // ngAfterContentInit
  // ngAfterContentChecked
  // ngAfterViewInit
  // ngAfterViewChecked
  // ngOnDestroy
  counter: number = 6;
  @ViewChild('ChildComponent') child!: ChildComponent;
  @ViewChild('title', { static: true }) titleRef!: ElementRef;
  // @ViewChild('userForm', { static: true }) userForm!: NgForm;

  // user = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   email: 'johndoe@gmail.com',
  // };

  // user = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  // };

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // setTimeout(() => {
    //   this.userForm.setValue({
    //     ...this.user,
    //     firstName: 'Alex',
    //     address: {
    //       city: 'Ankara',
    //       street: 'Baglica',
    //     },
    //   });
    // }, 0);

    // this.userForm = new FormGroup({
    //   firstName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(8),
    //   ]),
    //   email: new FormControl(''),
    // });

    this.userForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(8)]],
        password: ['', [Validators.required, strengthPassword()]],
        // confirmPassword: ['', [Validators.required, strengthPassword()]],
        email: { value: '', disabled: true },
      }
      // {
      //   validator: matchPassword('password', 'confirmPassword')
      // }
    );

    this.userForm.setValue({
      firstName: 'John',
      email: 'john@test.com',
      password: '',
    });

    this.userForm.patchValue({
      firstName: 'Alex',
    });

    this.userForm.get('firstName')?.statusChanges.subscribe((newStatus) => {
      console.log('firstname status changed');
      console.log('new status:', newStatus);
    });

    this.firstName?.valueChanges.subscribe((newValue) => {
      console.log('firstname value changed');
      console.log('new value:', newValue);

      this.userForm.get('email')?.setValidators(Validators.required);
      this.userForm.get('email')?.clearValidators();
      // this.userForm.get('email')?.markAllAsTouched();
      // this.userForm.get('email')?.markAsDirty();
      // this.userForm.get('email')?.markAsPristine();
      // this.userForm.get('email')?.markAsUntouched();
      // this.userForm.get('email')?.disable();
      // this.userForm.get('email')?.enable();
      //ikisinden sonra mutlaka cagırılmali
      this.userForm.get('email')?.updateValueAndValidity();
    });

    /* angular default validators:
    class Validators {
      static min(min: number): ValidatorFn
      static max(max: number): ValidatorFn
      static required(control: AbstractControl): ValidationErrors | null
      static requiredTrue(control: AbstractControl): ValidationErrors | null
      static email(control: AbstractControl): ValidationErrors | null
      static minLength(minLength: number): ValidatorFn
      static maxLength(maxLength: number): ValidatorFn
      static pattern(pattern: string | RegExp): ValidatorFn
      static nullValidator(control: AbstractControl): ValidationErrors | null
      static compose(validators: ValidatorFn[]): ValidatorFn | null
      static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null
    } */
  }

  get firstName() {
    return this.userForm.get('firstName');
  }
  get password() {
    return this.userForm.get('password');
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

  countChanged(value: number) {
    console.log(
      'Child component counter değerini değiştirdi. Counter: ',
      value
    );
  }

  ngAfterViewInit() {
    // console.log('title element:', this.titleRef?.nativeElement?.value);
    // this.titleRef.nativeElement.value = 'test';
  }

  // template driven form
  // onSubmit(userForm: NgForm) {
  //   console.log(userForm);
  // }

  // reset(userForm: NgForm) {
  //   userForm.resetForm();
  // }

  // reactive form
  onSubmit() {
    console.log(this.userForm);
  }
}
