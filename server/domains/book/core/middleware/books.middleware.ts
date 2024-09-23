
import { BookEntity } from "../entities/book.entity";
import { BookDTO } from "../dtos/book.dto";

export const bookHandler = (book: BookEntity) => {

   return  <BookDTO>{
        ...book,
        id: book._id.toString(),
        name: book.name.toString(),
        description: book.description.toString(),
        genre:book.genre,
        image: book.image.toString(),
      }
}