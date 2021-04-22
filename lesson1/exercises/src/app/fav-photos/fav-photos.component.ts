import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'GOOGEEOHH!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://static.wikia.nocookie.net/yugioh/images/4/4f/TimeWizard-OW.png/revision/latest?cb=20140622224942';
  image3 = 'https://uploads2.yugioh.com/card_images/1787/detail/2785.jpg?1385102370';

  constructor() { }

  ngOnInit() {
  }

}