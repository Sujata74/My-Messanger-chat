import { Component, OnInit } from '@angular/core';
import { ArchivedchatComponent } from './archivedchat/archivedchat.component';
import { ChatsComponent } from './chats/chats.component';
import { MarketComponent } from './marketchat/market.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestchatComponent } from './requestchat/requestchat.component';

@Component({
  standalone:true,
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  imports:[ChatsComponent,ProfileComponent,MarketComponent,RequestchatComponent,ArchivedchatComponent],
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}