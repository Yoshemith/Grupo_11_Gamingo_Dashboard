import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NavbarGamingo from './components/NavbarGamingo';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import NotFound from './pages/NotFound';

function App() {
  return (
    <React.Fragment>
    <NavbarGamingo />
      <div className="flex">
        <Sidebar />
        <div className="content w-100">      
        {/* <TopBar /> */}
          <Switch>
            <Route exact path="/">
                    <Home />
            </Route>
            <Route exact path="/products">
                    <Products />
            </Route>
            <Route exact path="/users">
                    <Users />
            </Route>
            {/* <Route path="/" exact component={<Home />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/users" exact element={<Users />}  /> */}
            <Route component={NotFound}  />
          </Switch>
        </div>
      </div>
      {/* <h1>Hello world</h1> */}
    </React.Fragment>
  );
}

export default App;
