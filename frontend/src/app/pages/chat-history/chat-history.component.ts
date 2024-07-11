import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss']
})
export class ChatHistoryComponent implements OnInit {
  messages: { text: string, isUser: boolean }[] = [];

  ngOnInit(): void { }

  updateHistory(message: string, isUser: boolean): void {
    this.messages.push({ text: message, isUser: isUser });
  }
}
