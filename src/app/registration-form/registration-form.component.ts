import { Router, UrlTree } from '@angular/router';
import { BackendService } from './../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  url_: any;
  constructor(private fb: FormBuilder, private bk: BackendService, private router: Router) {}
  ngOnInit() {

  }
  onSubmit(userForm: any) {
    let required = [
      'user_name',
      'user_mail',
      'phone_no',
      'user_password',
      'college_name',
      'city',
      'gender',
    ];
    for (const key of required) {
      if (userForm[key] == '') {
        window.alert(`enter ${key} you bitch`);
        return;
      }
    }
    if (userForm.user_password < 8 || userForm.user_password !== userForm.cpassword) {
      window.alert('password too short or password mismatch');
      return;
    }

    console.log(userForm);
    this.bk.fetchData('/register', userForm).subscribe((data) => {
      console.log(data);
      this.url_ = data.url
    });
    if (this.url_){
      window.alert("please check you mail for completing the payment")
    }
  }


  login = () => this.router.navigateByUrl('/login');

}
// form = new FormGroup ({
//   gender : new FormControl('', Validators.required)
// });
//   constructor( private bk: BackendService) { }
//   ngOnInit(): void {}
//   console.log(this)

// submit() {
//   console.log(this.form.value)
// }}
