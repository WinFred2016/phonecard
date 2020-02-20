import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  infos = [{
    name: "10086",
    icon: "haha",
    phone: 10086
  },
  {    name: "1008678",    icon: "haha",    phone: 10086  },{    name: "10086",    icon: "haha",    phone: 10086  },
  {    name: "10086",    icon: "haha",    phone: 10086  },
  { name: "wo",
    icon: "hihihi",
    phone: 18905693100
  }]
}
