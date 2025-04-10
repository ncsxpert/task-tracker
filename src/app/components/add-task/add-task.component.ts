import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { FormsModule } from '@angular/forms';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    //@todo - emit event
    this.onAddTask.emit(newTask);

    //Reset
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
