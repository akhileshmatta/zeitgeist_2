import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private bk: BackendService, private router: Router) {}

  ngOnInit(): void {}
  // opensweetalert() {
  //   Swal.fire('Entered Details are accurate', "Login Successful", "success")
  // }
  // closesweetalert() {
  //   Swal.fire('Incorrect Details', "Enter required feilds", "error")
  // }
  onSubmit(userForm: any) {
    console.log(userForm);
    this.bk.fetchData('/login', userForm).subscribe((data) => {
      console.log(data);
      localStorage.setItem('name', data.user_name)
      if(data.message != '404' && data.message != 'fuckyou'){
        //this.opensweetalert()
        this.router.navigateByUrl('/home')
      }
      else{
        //this.closesweetalert()
      }
    });
  }
  Register = () => this.router.navigateByUrl('/Register');


}
