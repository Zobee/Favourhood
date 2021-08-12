import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Landing from './components/Landing';
import Favours from './components/Favours';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User'
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { useRefresh } from "./components/hooks/useRefresh";

/* TODO
  * Create an isValid function to confirm that token is still valid 
*/

const App = () => {
  const loading = useRefresh()
  return (
    loading ? <div>LOADING</div> : <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/favours' component={Favours}/>
          <Route path='/user' component={User}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
