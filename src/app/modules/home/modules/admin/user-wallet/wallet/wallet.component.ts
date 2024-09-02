import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ClintService } from '../../Clints/Providers/clint.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UpdateWalletComponent } from '../update-wallet/update-wallet.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})

export class WalletComponent implements OnInit {
  displayedColumns: string[] = ['amount', 'type', 'createdAt', 'update'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild('input', { static: false }) inputElement!: ElementRef;
  @ViewChild('profitInput', { static: false }) profitInputElement!: ElementRef;

  dataSource: any = [];
  showLoader = false
  controls: any
  parseData: any
  allUserList: any
  userId: any
  userEmail: any
  userData: any
  transHistory: boolean = false
  filter: any
  totalLength: any
  selectedDefaultValue = 'TRADE_PROFIT'
  totalDeposit: any
  totalWithdrawal: any
  refferalAmount: any
  showInput: boolean = false;
  totalProfit:any
  showProfitInput: boolean = false;

  walletForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
  });

  constructor(
    private router: ActivatedRoute,
    private clientService: ClintService,
    private ngxService: NgxUiLoaderService,
    private navigateRouter: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog

  ) {
    this.router.queryParams.subscribe(res => {
      if (res['userId']) {
        this.userId = res['userId']
      }
    });
    let data = localStorage.getItem('userinfo');
    if (data) {
      this.parseData = JSON.parse(data);
    }
    this.controls = this.walletForm.controls;
  }


  async ngOnInit(): Promise<void> {
    this.showLoader = true;
    this.ngxService.start();
    this.initializeFilter();
    await this.getUsersData();
    await this.walletDetails();
    await this.allTransactionHistory();
    await this.transactionHistory();
    this.showLoader = false;
  }



  // GET ALL USER DETAILS
  async getUsersData() {
    try {
      const res: any = await this.clientService.getWalletUsers(this.parseData.token).toPromise();
      this.allUserList = res.data.results;
      const matching_objects = this.allUserList.filter((item: any) => item.id == this.userId)
      if (matching_objects) {
        this.userEmail = matching_objects[0]
      }
    } catch (error) {
    } finally {
      this.showLoader = false;
    }
  }

  // GET USER WALLET DETAILS WITH EMAIL
  findUserWithEmail() {
    const findUser = this.allUserList.filter((item: any) => item.email == this.walletForm.value.email)
    if (findUser.length > 0) {
      this.userId = findUser[0].id
      this.userEmail = findUser[0]
      if (this.userId) {
        // this.getUsersData();
        // this.walletDetails();
        // this.transactionHistory();
        this.ngOnInit()
      }
    } else {
      alert("Invalid user")
    }
  }


  // GET USER WALLET DETAILS
  async walletDetails() {
    if (this.userId) {
      try {
        const res = await this.clientService.walletDetails(this.parseData.token, this.userId).toPromise();
        this.totalProfit = res.profitAmount;
        console.log(this.totalProfit);
        this.userData = res;
      } catch (error) {
      }
    }
  }


  // INITIALIZER FOR TRANSACTION HISTORY
  initializeFilter() {
    const obj: any = {
      token: this.parseData.token,
      userId: this.userId,
      transactionType: this.selectedDefaultValue,
      page: 1,
      limit: 5
    }
    this.filter = obj;
  }

  // GET TRANSACTION HISTORY
  async transactionHistory() {
    try {
      const res = await this.clientService.userTransactionHistory(this.filter).toPromise();
      this.dataSource = res.results
      this.totalLength = res.count
      this.showLoader = false;
    }
    catch {
    }
  }

  // GET TRANSACTION HISTORY
  async allTransactionHistory() {
    const obj: any = {
      token: this.parseData.token,
      userId: this.userId,
      page: 1,
      limit: Number.MAX_SAFE_INTEGER
    }
    try {
      const res = await this.clientService.allTransactionHistory(obj).toPromise();

      // TOTAL DEPOSIT
      const depositValue = res.results.filter((item: any) => item.transactionType == 'DEPOSIT')
      let totalUsdtAmount = 0;
      for (const item of depositValue) {
        totalUsdtAmount += item.usdtAmount || 0;
      }
      this.totalDeposit = totalUsdtAmount !== 0 ? totalUsdtAmount.toFixed(2) : '0'

      // TOTAL WITHDRAWAL
      const withdrawalValue = res.results.filter((item: any) => item.transactionType == 'WITHDRAWAL')
      let withdrawalUsdtAmount = 0;
      for (const item of withdrawalValue) {
        withdrawalUsdtAmount += item.usdtAmount || 0;
      }
      this.totalWithdrawal = withdrawalUsdtAmount !== 0 ? withdrawalUsdtAmount.toFixed(2) : '0';

      // TOTAL REFFERAL
      const refferalValue = res.results.filter((item: any) => item.transactionType == 'REFERRAL')
      let refferalUsdtAmount = 0;
      for (const item of refferalValue) {
        refferalUsdtAmount += item.usdtAmount || 0;
      }
      this.refferalAmount = refferalUsdtAmount !== 0 ? refferalUsdtAmount.toFixed(2) : '0'
      this.showLoader = false;
    }
    catch {
    }
  }

  // TRANSACTION HISTORY PAGE CHANGE
  pageChange(event: PageEvent) {
    this.filter.page = event.pageIndex + 1;
    this.filter.limit = event.pageSize;
    this.transactionHistory();
  }

  // SELECTION CHANGE FOR TRANCATION CHANGE IN HISTORY
  selectionChange(data: any) {
    this.selectedDefaultValue = data.value
    this.initializeFilter();
    this.transactionHistory();
  }

  // BACK NAVIGATE TO USER LISTS
  backToUser() {
    this.navigateRouter.navigate(['/admin/client'])
  }

  // show update input for current balance 
  getupdateUsdtAmount() {
    if (this.showInput) {
      const newBalance = parseFloat(this.inputElement.nativeElement.value);
      if (!isNaN(newBalance)) {
        this.updateWalletAmount(newBalance);
      }
      this.showInput = false; 
    } else {
      this.showInput = true; 
    }
  }

  // calling api for giving amount
  updateWalletAmount(newBalance:number){
    this.showLoader = true;
    this.ngxService.start();
    const obj = {
      token: this.parseData.token,
      userId: this.userId,
      balance: newBalance
    }
   this.clientService.updateWallet(obj)
   .subscribe((res)=>{    
    this.snackBar.open(res.message, 'Close', {
      duration: 3000
    });    
    this.walletDetails();    
    this.showLoader = false;
    this.ngxService.stop(); 

   })
   
  }

  // update wallet
  updateWallet(data:any){
   const dialogRef =  this.dialog.open(UpdateWalletComponent,{
      data: data
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.ngxService.start();
        this.showLoader = true;
        this.transactionHistory();
        this.ngxService.stop();
        this.showLoader = false;
      }
      
    })
  }


  // updateTotalProfit
  getUpdateTotalProfit(){
    this.showProfitInput = true;
    if(this.showProfitInput){
      const newProfit = parseFloat(this.profitInputElement.nativeElement.value)
      if(!isNaN(newProfit)){
        this.updateTotalProfit(newProfit)
      }
      this.showProfitInput = false;
    } 
    else{
      this.showProfitInput  = true;
    }

  }

  updateTotalProfit(newProfit:number){
    this.showLoader = true;
    this.ngxService.start();
    const obj = {
      token: this.parseData.token,
      userId: this.userId,
      profitAmount: newProfit
    }
    this.clientService.updateTotalProfit(obj).subscribe((res)=>{
      console.log(res);
      if(res.status == '200'){
        this.snackBar.open(res.message, 'Close', {
          duration: 3000
        });    
      }
      this.walletDetails();
      this.showLoader = false;
      this.ngxService.stop();
      
    })
  }



}
