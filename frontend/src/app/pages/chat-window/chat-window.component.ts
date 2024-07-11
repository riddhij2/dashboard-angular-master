import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { ChatHistoryComponent } from '../chat-history/chat-history.component';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  interactionCount: number = 0;
  showIntroduce: boolean = false;

  @ViewChild(ChatHistoryComponent) chatHistoryComponent!: ChatHistoryComponent;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void { }

  sendMessage(message: string, responseType: string, model: string): void {
    this.interactionCount++;
    this.updateHistory(message, true);

    if (this.interactionCount === 3) {
      this.showIntroduceYourself();
    } else {
      this.chatService.sendMessage(message, responseType, model).subscribe(response => {
        this.receiveMessage(response);
      });
    }
  }

  receiveMessage(response: any): void {
    this.updateHistory(response.messages[0].message, false);
  }

  updateHistory(message: string, isUser: boolean): void {
    this.chatHistoryComponent.updateHistory(message, isUser);
  }

  showIntroduceYourself(): void {
    this.showIntroduce = true;
  }

  handleIntroduceYourself(event: { name: string, email: string }): void {
    this.showIntroduce = false;
    this.updateHistory(`Name: ${event.name}, Email: ${event.email}`, true);
  }
}
