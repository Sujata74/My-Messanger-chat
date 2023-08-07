import { Component, OnInit } from '@angular/core';
import { ChatsbarComponent } from './chatsbar/chatsbar.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  standalone:true,
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  imports:[SearchbarComponent,HeaderbarComponent,ChatsbarComponent],
})
export class ConversationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}