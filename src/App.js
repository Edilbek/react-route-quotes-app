import { Route, Switch } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path='/quotes' exact component={AllQuotes} />
      <Route path='/quotes/:quoteId' component={QuoteDetail} />
      <Route path='/new-quote' component={NewQuote} />
    </Switch>
  );
}

export default App;
