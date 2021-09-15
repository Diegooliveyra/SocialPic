import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  photos: Photo[] = [];

  constructor(private service: PhotoService) {
    this.service.listFromUser('flavio').subscribe((photos) => {
      console.log(photos);
      this.photos = photos;
    });
  }
}
