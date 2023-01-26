import { EventEmitter, OnInit } from "@angular/core";
import { shoppingModel } from "../model/shopping.model";

export class shoppingService{
    private shoppingList : any[] = [
        new shoppingModel('https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=is&k=20&c=Cp3EUWJ5DxsRrwCy_x_Ad-lQb_-9euAUfsOue_vKpxQ=','Product 1','100'),
        new shoppingModel('https://media.istockphoto.com/id/1048400936/photo/whole-italian-pizza-on-wooden-table-with-ingredients.jpg?s=612x612&w=is&k=20&c=FXaNVwRjeeI-7GfUoHHWui8NRuL-_9yr9GpQwKDbji4=','Product 2','250'),
        new shoppingModel('https://media.istockphoto.com/id/966934632/photo/appetizing-french-fries-in-a-bowl.jpg?s=612x612&w=is&k=20&c=g6uax0o831OADm0NJp10I2n_j2XpKCrQ9GH6ayGoU-k=','Product 3','150'),
    ]
    getShoppingItem(){
        return this.shoppingList
    }

    addNewProd(prod : any){
        this.shoppingList.push(prod)
        // this.productEmitter.emit(prod)
        // console.log(prod)
    }

    bagArr : any[]=[];


    addTobag(itemArr : any){
        this.bagArr.push(itemArr)
    }

    getBaggedData(){
        return this.bagArr
    }

    productEmitter = new EventEmitter()


    // updatedDataEmitter = new EventEmitter()

}

// https://media.istockphoto.com/id/1341998526/photo/french-toast-with-berries-and-honey.jpg?s=612x612&w=is&k=20&c=p1pSse7UQial3YEgdaliJ7WbyQdt1ZDrCBAFeMm5MBU=