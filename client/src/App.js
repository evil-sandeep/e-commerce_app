// Desc: Main App component
import React from 'react';
import {Container} from 'react-bootstrap'; 
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    < >
      <Header />
      <main>
        <Container>
          <h1>Welcome to sandeep</h1>
        </Container>
          
        <h1>App</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
