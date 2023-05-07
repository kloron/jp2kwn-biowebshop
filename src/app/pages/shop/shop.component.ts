import { Component, OnInit} from '@angular/core';
import { Image } from '../../shared/models/Image';
import { ShopService } from '../../shared/services/shop.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shopObject?: Array<Image>;
  chosenImage?: Image;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.loadImageMeta('__credits.json').subscribe((data: Array<Image>) => {
      this.shopObject = data;
    })
  }

  loadImage(imageObject: Image) {
    this.chosenImage = imageObject;
  }

}
