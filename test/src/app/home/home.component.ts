import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'test';
  validUser = 'test';
  validPassword = '123456';

register = {
  user: '',
  password: '',
}

validateLogin() {
  if(this.register.user == this.validUser){
    if(this.register.password == this.validPassword){
      console.log('Inicio sesion');
      return true
    } else{
      console.log('Password incorrect');
      return false
    }
  }else{
    console.log('User not found');
    return false
    
  }
  
}

}
