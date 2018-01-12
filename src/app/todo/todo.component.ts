import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  itemList: any[];

  constructor(private apiService: ApiService, private router: Router) {

    this.itemList = [];
  }

  addNewItemContent(item) {
    this.itemList.unshift(item);
  }

  ngOnInit() {
    this.apiService.sendGetUserTodos({Token: this.apiService.securityToken, Username: this.apiService.user})
      .subscribe(response => {
        if (response.error) {
          this.router.navigate(['register-login']);
          return;
        }
        this.itemList = [];
        for (let item of response.todos) {
          this.itemList.push({content: item});
        }
      });
  }

  deleted(itemNumber: number) {
    this.itemList.splice(itemNumber, 1);
  }

  copied(itemNumber: number) {
    // this.itemList.splice(itemNumber, 0, this.itemList[itemNumber]);
    this.itemList.push(JSON.parse(JSON.stringify(this.itemList[itemNumber])));

  }

}
