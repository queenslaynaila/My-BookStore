import React   from 'react'
import BookCard from './Card';
 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 
 
export default function Categories({books}) {
     
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  return (
    <> 
    <h1>Critically Acclaimed</h1>
      <Carousel responsive={responsive}>
      {books.map(book=><BookCard book={book}></BookCard>)}
      </Carousel>;
    <h1>Young Adult</h1> 
    <Carousel responsive={responsive}>
      {books.map(book=><BookCard book={book}></BookCard>)}
      </Carousel>;
    <h1>Political</h1> 
    <Carousel responsive={responsive}>
      {books.map(book=><BookCard book={book}></BookCard>)}
      </Carousel>;
    <h1>Slice of life</h1>
    <Carousel responsive={responsive}>
      {books.map(book=><BookCard book={book}></BookCard>)}
      </Carousel>;
    </>
       
     
    
  )
}