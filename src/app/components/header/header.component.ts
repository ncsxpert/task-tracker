import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
    
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: String) {
    return this.router.url === route;
  }
}
