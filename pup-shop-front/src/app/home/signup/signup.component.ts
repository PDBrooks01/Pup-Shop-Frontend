import { Component } from '@angular/core';

import {SignUp} from './signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignUpComponent {
  submitted = false;
  onSubmit(){this.submitted = true;}
}
