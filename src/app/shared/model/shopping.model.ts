
import  {v4 as uuid} from 'uuid';

export class shoppingModel{
    productImage : string;
    productName : string;
    productPrice : string | number;
    prodctqty? : string | number = 0;
    id? : any;

    constructor(prdImg : string, prdName : string, prdPrice : string | number, prdQty? : number | string, id? : any){
        this.productImage = prdImg,
        this.productName = prdName,
        this.productPrice = prdPrice,
        this.id = uuid();
    }

    // constructor(public prdImg : string, public prdName : string, public prdPrice : string, public prdQty? : number){
    //     this.prdQty = 0
    // }




}