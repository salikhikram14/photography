import { Component, OnInit } from '@angular/core';
import { faFacebook, faGooglePlus, faPinterest, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faGoogle=faGooglePlus;
  faPinterest=faPinterest;
  faTwitter=faTwitter;
  faPhone= faPhoneAlt;
  faAddress=faLocationArrow;
  faMail=faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
