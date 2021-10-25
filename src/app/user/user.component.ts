import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../email-validator';
import { passwordValidator } from '../password-validator'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  userForm = this.fb.group({

  username : ['',[Validators.required, Validators.minLength(4)]],
    credentials: this.fb.group({
      email : ['',[Validators.required, emailValidator]],
      password : ['',[Validators.required, passwordValidator]],
    }),
    address: this.fb.group({
      city: [''],
      zip: [''],
      street: [''],
    
})
  })

  // userForm = new FormGroup({
  // })

  onSubmit() {
    console.log(this.userForm.value);
} 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}