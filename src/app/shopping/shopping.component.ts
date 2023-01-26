import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { shoppingService } from '../shared/service/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  // @Output('dataFromShopping') dataFromShopping : any = new EventEmitter()
 
  shopList : any[] = [];

  bagList : any[] = [];

  amtTotal : any;

  constructor( private shopServ : shoppingService ){
    this.shopList = this.shopServ.getShoppingItem()
    // this.shopServ.productEmitter.subscribe((updatedData : any)=>{
    //   this.shopList = updatedData
    // })
    console.log(this.shopList)
    // console.log(this.shopList)
  }

  countAdd(itemLi : any){
    itemLi.prodctqty++
  }

  countRemove(itemLi : any){
    if(itemLi.prodctqty === 0){
      return
    }
    itemLi.prodctqty--
  }

  addToBag(bagItem : any){

    let flag = false;
    let newObj = Object.assign({}, bagItem)
    for(let i of this.bagList){
      if(i.id === bagItem.id){
        i.prodctqty = bagItem.prodctqty;
        flag = true;
      }
    }
    if(!flag){
      this.bagList.push(newObj)
    }
    this.calculationTotal();
    // console.log(bagItem)
    // this.bagList.push(bagItem)
    // this.shopServ.addTobag(bagItem);
  }

  calculationTotal(){
    this.amtTotal = 0;
    for(let i of this.bagList){
      this.amtTotal += i.productPrice * i.prodctqty
    }
  }

  ngOnInit(): void {
    // this.shopServ.productEmitter.subscribe((updatedForm : any)=>{
    //   // console.log(updatedForm)
    //   // this.shopServ.addNewProd(updatedForm)
    //   this.shopList.push(updatedForm)
    //   // console.log(this.shopList)
    // })

    // this.shopServ.updatedDataEmitter.emit(this.bagList)
  }


}




