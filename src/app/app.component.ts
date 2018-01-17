import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';
import * as firebase from 'firebase'
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD_6b6pd2s9_0XLMvKL_mcX8G2ru4IrJBg',
      authDomain: 'recipes-app-gerasim-vol.firebaseapp.com'
    })

    // if (this.authService.isAuth) {
    //   this.dataStorageService.getRecipes()
    // }
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
