import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup-delete',
  templateUrl: './popup-delete.component.html',
  styleUrls: ['./popup-delete.component.scss']
})
export class PopupDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupDeleteComponent>) { }

  ngOnInit() {
  }
  closePopup() {
    this.dialogRef.close();
  }
}
