import './css/App.scss';
import React from 'react'
import { Switch, Route} from 'react-router-dom'


import Home from"./Home"
import Layout from "./shared/Layout"
import CartLanding from './CartLanding'
import Products from './Products'


function App (){
    return (
      <div>
        <Layout>
        <Switch>
          <Route exact path = '/home' component={Home} />
          <Route path='/cart' component={CartLanding} />
          <Route path='/home/:id' component={Products} />

        </Switch>
      </Layout>
      </div>
    );
}

export default App;
