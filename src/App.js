import React, {useState, useEffect} from 'react';
import Quote from './components/Quote';
import styled from '@emotion/styled';

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;


function App() {

  const [quote, setQuote] = useState({});

  const ConsultAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await api.json();
    setQuote(quote[0]);
  }

  useEffect( () => {
    ConsultAPI()
  }, []);



  return (
    <Container>
      <Quote 
        quote={quote}
      />
      <Button
        onClick={ConsultAPI}
      >
        Obtener Frase
      </Button>
    </Container>
    
  );
}

export default App;
