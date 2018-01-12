import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() indexOfItem: number;
  @Output() deleted = new EventEmitter<any>();
  @Output() copied = new EventEmitter<any>();


  constructor() { }

  ngOnInit() { }

  editable;

  edited() {
    this.editable = !this.editable;

  }

}

export class Item {
  heading: string;
  content: string;
  constructor (heading: string, content: string) {
    this.heading = heading;
    this.content = content;

  }

}
