import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule], 
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.user);
      alert('Registration successful!');
      form.reset();
    }
  }
}
