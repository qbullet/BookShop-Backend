import { Injectable } from "@nestjs/common";
import { booksService } from "./books.service";
import { Books } from "./books.interface";

@Injectable()
export class booksLogic{
    constructor(
        private readonly booksService : booksService
    ){}
    async verifyData(data){
        let oldData = await this.booksService.book_findByID(data.id) 
        let newData
        (data.name != '')? newData.name = data.name : newData.name = oldData[0].name;
        (data.price != '')? newData.price = data.price : newData.price = oldData[0].price;
        return newData
    }
}