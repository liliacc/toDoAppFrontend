import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  itemList: any[];

  constructor() {

    this.itemList = [
    ];
  }

  addNewItemContent(item) {
    this.itemList.unshift(item);
  }
  ngOnInit() {
  }

  deleted(itemNumber: number) {
    this.itemList.splice(itemNumber, 1);
  }

  copied(itemNumber: number) {
    // this.itemList.splice(itemNumber, 0, this.itemList[itemNumber]);
    this.itemList.push(JSON.parse(JSON.stringify(this.itemList[itemNumber])));

  }

}
