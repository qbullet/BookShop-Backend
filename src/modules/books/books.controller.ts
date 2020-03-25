import { Controller, Get, Param, Query } from "@nestjs/common";
import { booksService } from "./books.service";
import { booksLogic } from "./books.logic";

@Controller('books')
export class booksController {
    constructor(
        private readonly booksService : booksService,
        private readonly booksLogic : booksLogic
    ){}

    @Get('findAll')
    async findAll(){
        return this.booksService.books_findAll()
    }

    @Get('findOne/:id')
    async findOne(@Param('id') _id:string){
        return this.booksService.book_findByID(_id)
    }

    @Get('deleteOne/:id')
    async deleteOne(@Param('id')_id:string){
        this.booksService.book_deleteByID(_id)
    }

    @Get('updateOne')
    async updateOne(@Query() query){
        let data = await this.booksLogic.verifyData(query)
        this.booksService.book_updateByID(data.id,data.name,data.price)
    }
}