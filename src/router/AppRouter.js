import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ReadingList from "../components/ReadingList";
import { Route ,Routes } from "react-router-dom"
import Home from "../components/Home";
import Browse from "../components/Browse"
import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import Extrs from "../components/Extrs";

 
 
export default function AppRouter() {
  const [books,setBooks] =useState([])
  useEffect(() => {
    fetch("https://mymovieapphere.herokuapp.com/books")
    .then(res => res.json())
    .then(data=>setBooks(data))
  },[])

  return (
    <>
      <Navbar books={books}></Navbar>
      <Routes>
        
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="list" element={<ReadingList></ReadingList>}>
          </Route>
          <Route path="/browse" element={<Browse books={books}></Browse>}></Route>
          <Route path="/category" element={< Categories books={books}></Categories>}>
          </Route>
          <Route path="/category/:id" element={<Extrs books={books}></Extrs>}>
          </Route>
          
             
        
      </Routes>
      
      
   </>
 )
}