import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact component={AllQuotes} />
        <Route path='/quotes/:quoteId' component={QuoteDetail} />
        <Route path='/new-quote' component={NewQuote} />
      </Switch>
    </Layout>
  );
}

export default App;
