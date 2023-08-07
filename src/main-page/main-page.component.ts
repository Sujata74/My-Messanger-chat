import { Component, OnInit } from '@angular/core';
import { ChatsssComponent } from './chatsss/chatsss.component';
import { ConversationComponent } from './conversation/conversation.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  standalone:true,
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  imports:[LogoComponent,ConversationComponent,ChatsssComponent],
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}