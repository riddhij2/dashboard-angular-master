import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-introduce-yourself',
  templateUrl: './introduce-yourself.component.html',
  styleUrls: ['./introduce-yourself.component.scss']
})
export class IntroduceYourselfComponent implements OnInit {
  name: string = '';
  email: string = '';

  @Output() introduce = new EventEmitter<{ name: string, email: string }>();

  ngOnInit(): void { }

  onSubmit(): void {
    this.introduce.emit({ name: this.name, email: this.email });
  }
}
