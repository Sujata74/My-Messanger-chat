import { Component, OnInit } from '@angular/core';
import { HeaderboxComponent } from './headerbox/headerbox.component';
import { MessageboxComponent } from './messagebox/messagebox.component';
import { TextingboxComponent } from './textingbox/textingbox.component';

@Component({
  standalone:true,
  selector: 'app-chatsss',
  templateUrl: './chatsss.component.html',
  styleUrls: ['./chatsss.component.css'],
  imports:[TextingboxComponent,MessageboxComponent,HeaderboxComponent],
})
export class ChatsssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}