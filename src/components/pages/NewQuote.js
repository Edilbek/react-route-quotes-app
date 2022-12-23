import React from 'react'

import QuoteForm from '../../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQuiteHandler = quoteDate => {
    console.log(quoteDate);
  };

  return (
    <QuoteForm onAddQuote={addQuiteHandler} />
  )
}

export default NewQuote;