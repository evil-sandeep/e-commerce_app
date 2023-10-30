// Desc: Main App component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Container} from 'react-bootstrap'; 
import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';




function App() {
  return (
    <Router >
      <Header />
      <main className='py-3'>
        <Container>
         <Routes>
            <Route path='/' element={<HomeScreen/> } exact />
            <Route path='/product/:id' element={<ProductScreen/> }  />
            <Route path='/Cart/:id?' element={<CartScreen/> }  />
          

          </Routes>


        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
