import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data
  showSections = {
    recipes: true,
    shopingList: false
  }

  // methods
  switchSection(activeSection: string) {
    for (const section in this.showSections) {
      if (this.showSections.hasOwnProperty(section)) {
        this.showSections[section] = false
      }
    }
    this.showSections[activeSection] = true
  }

  getActiveTab(): string {
    let active: string
    for (const section in this.showSections) {
      if (this.showSections.hasOwnProperty(section)) {
        if (this.showSections[section] === true) {
          active = section
        }
      }
    }
    return active
  }
}
