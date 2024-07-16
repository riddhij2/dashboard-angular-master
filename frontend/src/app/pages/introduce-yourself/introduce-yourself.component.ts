// introduce-yourself.component.ts
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-introduce-yourself',
  templateUrl: './introduce-yourself.component.html',
  styleUrls: ['./introduce-yourself.component.scss']
})
export class IntroduceYourselfComponent implements OnInit {
  name: string = '';
  email: string = '';
  @Input() showModal: boolean = false;
  @Output() introduce = new EventEmitter<{ name: string, email: string }>();
  @Output() closeModal = new EventEmitter<void>();

  ngOnInit(): void { }

  onSubmit(): void {
    this.introduce.emit({ name: this.name, email: this.email });
    this.closeModal.emit();
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
