import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: Observable<any>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    const fireList = this.chat.getMessages();
    this.feed = fireList.valueChanges();
  }

  ngOnChanges() {
    // const fireList = this.chat.getMessages();
    // this.feed = fireList.snapshotChanges();
  }

}