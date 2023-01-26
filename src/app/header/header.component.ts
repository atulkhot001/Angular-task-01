import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { shoppingModel } from '../shared/model/shopping.model';
import { shoppingService } from '../shared/service/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Input('dataCatched') updatedList : any;

  myform : FormGroup | any;
  img : any = '';
  myImgFile : any;

  constructor( private shopServ : shoppingService ){}

  // newArr : any[] = [];
  // data : any;

  ngOnInit() : void{
    this.myform = new FormGroup({
      image : new FormControl('',Validators.required),
      prodName : new FormControl('', Validators.required),
      prodPrice : new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    })
  }


  // buyNow(){
  //   let updatedObj = this.shopServ.getBaggedData();
  //   console.log(updatedObj)
  // }

  // addNew(){
  //   // console.log(this.myform)
  //   const newProdObj = new shoppingModel(this.myform.value.image, this.myform.value.prodName,this.myform.value.prodPrice)
  //   // console.log(newProdObj)
  //   this.shopServ.productEmitter.emit(newProdObj)
  //   this.myform.reset()
  // }

  onSubmit(){
    // console.log(this.myform)
    const newProdObj = new shoppingModel(this.myImgFile, this.myform.value.prodName,this.myform.value.prodPrice)
    // console.log(newProdObj)
    // this.shopServ.productEmitter.emit(newProdObj)
    this.shopServ.addNewProd(newProdObj)
    this.myform.reset()
  }

  getFile(eve : any){
    console.log(eve.target.files[0].size);
    this.img = eve.target.files[0]
    console.log('file', this.img)
    let reader = new FileReader();
    reader.readAsDataURL(this.img);
    reader.onload = ( ev : any)=>{
      this.myImgFile = ev.target.result;
    }
  }



}
