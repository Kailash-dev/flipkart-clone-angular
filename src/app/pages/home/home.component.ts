import { Component } from '@angular/core';
import { CategoriesCarouselComponent } from "../../components/categories-carousel/categories-carousel.component";
import { FeaturedBrandsComponent } from "../../components/featured-brands/featured-brands.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesCarouselComponent, FeaturedBrandsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
