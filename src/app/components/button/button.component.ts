import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  onClick(): void {
    this.btnClick.emit();
  }
}
