import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../model/photo';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos:Photo[];
  e1=true;
  e2=false;
  e3=false;
  e4=false;
  e5=false;
  wildlife:Photo[];
  nat:Photo[];
  pot:Photo[];
  coup:Photo[];

  constructor(private photoService:PhotoService) { }

  ngOnInit(): void {
    this.photos=this.photoService.getPhotos();
  }

  all(){
    this.e1=true;
    this.e2=false;
    this.e3=false;
    this.e4=false;
    this.e5=false;
  }

  wildLife(){
    this.wildlife=this.photos.filter(dat => dat.imageType==='wildlife');
    this.e2=true;
    this.e1=false;
    this.e3=false;
    this.e4=false;
    this.e5=false;
  }

  nature(){
    this.nat=this.photos.filter(dat => dat.imageType==='nature');
    this.e2=false;
    this.e1=false;
    this.e3=true;
    this.e4=false;
    this.e5=false;
  }

  potrait(){
    this.pot=this.photos.filter(dat => dat.imageType==='portraits');
    this.e2=false;
    this.e1=false;
    this.e3=false;
    this.e4=true;
    this.e5=false;
  }

  couples(){
    this.coup=this.photos.filter(dat => dat.imageType==='couples');
    this.e2=false;
    this.e1=false;
    this.e3=false;
    this.e4=false;
    this.e5=true;
  }

}
