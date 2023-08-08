import { Component, OnInit } from '@angular/core';
import { ChatComponent } from './chat/chat.component';

@Component({
  standalone:true,
  selector: 'app-chatsbar',
  templateUrl: './chatsbar.component.html',
  styleUrls: ['./chatsbar.component.css'],
  imports:[ChatComponent]
})
export class ChatsbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}