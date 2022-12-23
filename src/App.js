import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";

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
        <Route path='*' component={NotFound}/>
      </Switch>
    </Layout>
  );
}

export default App;
