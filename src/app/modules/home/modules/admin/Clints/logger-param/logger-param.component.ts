import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-logger-param',
  templateUrl: './logger-param.component.html',
  styleUrls: ['./logger-param.component.scss']
})
// export class LoggerParamComponent {
//   keyValuePairs: { key: string, value: any }[] = [];

//   constructor(
//     @Inject(MAT_DIALOG_DATA) public values: any
//   ) {
//     const params = values.Data.param;
//     for (const key in params) {
//       if (params.hasOwnProperty(key)) {
//         this.keyValuePairs.push({ key: key, value: params[key] });
//       }
//     }
    
//   }
// }




export class LoggerParamComponent {
  keyValuePairs: { key: string, value: any }[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public values: any
  ) {
    const params = values.Data.param;
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        this.flattenValue(key, params[key]);
      }
    }
    
    console.log(this.keyValuePairs);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  flattenValue(prefix: string, value: any) {
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (Array.isArray(item)) {
          this.flattenValue(`${prefix}[${index}]`, item);
        } else {
          this.keyValuePairs.push({ key: `${prefix}[${index}]`, value: item });
        }
      });
    } else if (this.isObject(value)) {
      for (const subKey in value) {
        if (value.hasOwnProperty(subKey)) {
          const subValue = value[subKey];
          if (Array.isArray(subValue)) {
            this.flattenValue(`${prefix}.${subKey}`, subValue);
          } else if (this.isObject(subValue)) {
            for (const subSubKey in subValue) {
              if (subValue.hasOwnProperty(subSubKey)) {
                this.keyValuePairs.push({ key: `${prefix}.${subKey}.${subSubKey}`, value: subValue[subSubKey] });
              }
            }
          } else {
            this.keyValuePairs.push({ key: `${prefix}.${subKey}`, value: subValue });
          }
        }
      }
    } else {
      this.keyValuePairs.push({ key: prefix, value: value });
    }
  }
}