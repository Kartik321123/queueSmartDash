import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-logger-param',
  templateUrl: './logger-param.component.html',
  styleUrls: ['./logger-param.component.scss'],
})
export class LoggerParamComponent implements OnInit {
  keyValuePairs: { key: string; value: any }[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public values: any,
  private dialogRef: MatDialogRef<any>
  ) {
    console.log(values);
  }

  ngOnInit() {
    this.iterateObject(this.values.Data.param);
  }

  iterateObject(obj: any) {
    for (var key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.iterateObject(obj[key]);
      } else {
        console.log(key + ' ', obj[key]);
        this.keyValuePairs.push({ key: key, value: obj[key] });
      }
    }
  }

  close(): void {
    this.dialogRef.close();
    console.log('hello')
  }
}
