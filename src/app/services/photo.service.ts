import { Injectable } from '@angular/core';
import { Photo } from '../model/photo';
import { PHOTOS } from '../model/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getPhotos():Photo[]{
    return PHOTOS;
  }
}
