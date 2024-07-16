import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  message: string = '';
  responseType: string = 'simple';
  model: string = 'default';
  responseOptions = [
    { value: 'simple', name: 'Simple' },
    { value: 'professional', name: 'Professional'},
    { value: 'creative', name: 'Creative' }
  ];

  @Output() sendMessage = new EventEmitter<{ message: string, responseType: string, model: string }>();

  ngOnInit(): void { }

  onSend(): void {
    if (this.message.trim() === '') {
      alert('Please enter a message before sending.');
      return;
    }
    this.sendMessage.emit({ message: this.message, responseType: this.responseType, model: this.model });
    this.message = '';
  }

  onSelectResponseType(value: string): void {
    this.responseType = value;
    console.log('Selected Response Type:', value);
  }

  onSelectModel(model: string): void {
    this.model = model;
  }
}
