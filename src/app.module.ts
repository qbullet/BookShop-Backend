import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { booksModule } from './modules/books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    booksModule,
    MongooseModule.forRoot('mongodb+srv://admin:1234@nyquil-qqig0.mongodb.net/book-shop?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
