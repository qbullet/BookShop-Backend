import { Module } from "@nestjs/common";
import { booksController } from "./books.controller";
import { booksLogic } from "./books.logic";
import { MongooseModule } from "@nestjs/mongoose";
import { booksSchema } from "./books.schema";
import { booksService } from "./books.service";

@Module({
    imports : [MongooseModule.forFeature([{ name: 'Books', schema: booksSchema }])],
    controllers : [booksController],
    providers:[booksLogic,booksService],
})
export class booksModule{}
