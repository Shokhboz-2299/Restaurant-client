import './App.scss';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home.jsx';
import Admin from './pages/admin/Admin.jsx';

 const App = () => {
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact><Home/> </Route>
        <Route path="/admin"><Admin/> </Route>
      </Switch>
    </div>
  );
}

export default App;
