import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Landing from './components/Landing';
import Favours from './components/Favours';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/favours' component={Favours}/>
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
