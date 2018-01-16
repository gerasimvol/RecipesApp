import { Component } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  constructor(private dataStorageService: DataStorageService) {
    this.dataStorageService.getRecipes()
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
