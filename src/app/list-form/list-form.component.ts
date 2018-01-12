import {Component, EventEmitter, OnInit} from "@angular/core";
import {Output } from "@angular/core";
import {Item} from "../item/item.component";
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {
  @Output() contentAdded = new EventEmitter<Item>();

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  addContent(heading: string, content: string) {
    this.contentAdded.emit(new Item(heading, content));
    this.apiService.sendCreateTodo({Token: this.apiService.securityToken, Username: this.apiService.user, TodoText: content})
      .subscribe(response => {
        if (response.error) {
          this.router.navigate(['register-login']);
          return;
        }
      });
  }
}

