import React from 'react'
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();
  
  const addQuiteHandler = quoteDate => {
    console.log(quoteDate);

    history.push('/quotes');
  };

  return (
    <QuoteForm onAddQuote={addQuiteHandler} />
  )
}

export default NewQuote;