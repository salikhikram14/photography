import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faFacebook=faFacebookF;
  faInstagram=faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
