import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { min } from 'rxjs';
import { PublishService } from '../../publish-strategy/Providers/publish.service';
import { SupportService } from '../Providers/support.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {

  newTicketIssue: string = '';
  parseData: any;
  chatData: any[] = [];
  showLoader = false

  clientData = {
    issue: ["fix that XYZ issue"],
    replies: [ "ok", "work on it"]
  };

  constructor(
    private supportService: SupportService,
    private dialogRef: MatDialogRef<ReplyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log("comming data", data)
    let userData = localStorage.getItem('userinfo')
    if (userData) {
      this.parseData = JSON.parse(userData);
    }
  }

  ngOnInit(): void {
    // this.getData();
  }

  // async getData(): Promise<void>{
  //   await  this.getSupport();
  // }

  // async getSupport(): Promise<void> {
  //   try {
  //     const data = {
  //       token: this.parseData.token,
  //       page: 1,
  //       limit: 10,
  //     };
  //     const res = await this.supportService.getsupportData(data).toPromise();

  //     const issues = res.data.results[0].issue;
  //     const replies = res.data.results[0].replies;
  //     for (let i = 0; i < Math.max(issues.length, replies.length); i++) {
  //       if (issues[i] && i !== issues.length - 1) {
  //         this.chatData.push({ type: 'issue', message: issues[i] });
  //       }

  //       if (replies[i] && i !== replies.length - 1) {
  //         this.chatData.push({ type: 'reply', message: replies[i] });
  //       }


  //     }



  //   } catch(error) {
  //     console.error(error);
  //   }
  // }



  // async submitTicket(): Promise<void> {
  //   try {
  //     const data = {
  //       supportId : this.values.supportId,
  //       replies: this.newTicketIssue
  //     };
  //     console.log(data)
  //     const res: any = await this.supportService.postSupportTicket(data).toPromise();
  //     console.log('Ticket submitted:', res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // isIssue(message: any): boolean {
  //   return message.type === 'issue';
  // }


}
