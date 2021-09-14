import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  url = 'http://lorempixel.com.br/500/400/?1';
  description = 'Memes BR';

  constructor() {}

  ngOnInit(): void {}
}
