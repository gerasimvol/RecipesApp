import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input() activeTab: string
  @Output() navigate: EventEmitter<string> = new EventEmitter()

  // methods
  navigateTo(e: Event, location: string) {
    e.preventDefault()
    this.navigate.emit(location)
  }

  isActive(tab: string): boolean {
    return this.activeTab === tab
  }
}
