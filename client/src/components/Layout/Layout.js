import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children , title , description,keywords, author}) => {
  return (
    <div>
       <Helmet>
       <meta charSet="utf-8" />
       <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
       </Helmet>
    <Header/>
    <main style={{minHeight:'80vh'}}>
    <Toaster />
 { children}


    </main>
    <Footer/>
    </div>
  );
};
Layout.defaultProps={
  title: "E-Pustakalay | Shop Now",
  description : "mern stack project",
  keywords : "mern,react,node,mongodb",
  author : "Abiral Shrestha",  
}
export default Layout;