import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-item-articles',
  templateUrl: './item-articles.component.html',
  styleUrls: ['./item-articles.component.scss']
})
export class ItemArticlesComponent {

  @Input() article : Article={
    id: 0,
    name: '',
    description: '',
    url: '',
    categorie:'',
    created_at: ''

  }


}
