import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Books } from "./books.interface";

@Injectable()
export class booksService {

    constructor(@InjectModel('Books') private booksModel:Model<Books>){}
    
    async books_findAll(): Promise<Books[]> {
        return this.booksModel.find().exec();
    }

    async book_findByID(_id:string): Promise<Books[]>{
        return this.booksModel.find({id:_id }).exec();
    }

    async book_deleteByID(_id:string) {
       this.booksModel.findOneAndDelete({id:_id }).exec()
    }

    async book_updateByID(_id:string,_name:string,_price:any){
        this.booksModel.findOneAndUpdate({id:_id},{
            name:_name,
            price:_price
        }).exec()
    }
}