import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss']
})
export class ChatHistoryComponent implements OnInit {
  messages: { text: string, isUser: boolean }[] = [];
  @ViewChild('chatHistory') private chatHistoryContainer!: ElementRef;

  ngOnInit(): void { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  updateHistory(message: string, isUser: boolean): void {
    this.messages.push({ text: message, isUser: isUser });
  }


  private scrollToBottom(): void {
    try {
      this.chatHistoryContainer.nativeElement.scrollTop = this.chatHistoryContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Could not scroll to bottom', err);
    }
  }

}
