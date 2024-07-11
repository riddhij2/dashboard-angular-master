import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../service/auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  passwordStrength: string = '';
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.createFormGroup();
    this.registerForm.get('password')?.valueChanges.subscribe(value => {
      this.passwordStrength = this.checkPasswordStrength(value);
    });
    
  }
  
  checkPasswordStrength(password: string): string {
    if (!password) {
      return '';
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /\W/.test(password);
    const isLongEnough = password.length >= 7;

    const strength = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChars, isLongEnough].filter(v => v).length;

    if (strength >= 4) {
      return 'strong';
    } else if (strength >= 2) {
      return 'medium';
    } else {
      return 'weak';
    }
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  register(): void {
    console.log('Register button clicked');
    if (this.registerForm.valid) {
      console.log('Form is valid:', this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['login']);
        },
        (error) => {
          console.error('Registration error:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  togglePasswordVisibility(passwordField: HTMLInputElement): void {
    this.showPassword = !this.showPassword;
    passwordField.type = this.showPassword ? 'text' : 'password';
  }

}
