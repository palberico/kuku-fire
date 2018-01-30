// React
import React, { Component } from 'react'

// Router
import { NativeRouter, Switch, Route, } from 'react-router-native';
import { StackNavigator } from "react-navigation";

// Styling from Native Base
import { Root } from 'native-base';

// Components
import Home from './components/Home';
import Login from './components/Login';
import Settings from './components/Settings';
import Register from './components/Register';
// import Faq from './components/Faq';
// import Shop from './components/Shop';
// import Cart from './components/Cart';
// import Terms from './components/Terms';
// import Custom from './components/Custom';
// import Search from './components/Search';
// import CardComp from './components/Card';
// import Privacy from './components/Privacy';
// import Description from './components/Description';

class App extends Component {
  
  render() {
    console.disableYellowBox = true;
    return (
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/login" component={Login} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/faq" component={Faq} />
            <Route exact path="/shop" component={Shop} /> */}
            {/* <Route exact path="/terms" component={Terms} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/card" component={CardComp}  />
            <Route exact path="/privacy" component={Privacy} /> */}
            {/* <Route exact path="/cart/:category" component={Cart} />
            <Route exact path="/custom/:category" component={Custom} />
            <Route exact path="/description/:title/:category/:fromComponent" component={Description} /> */}
          </Switch>
        </NativeRouter>
  
    );
  }
}

const AppNav = StackNavigator(
  {
    Settings: { screen: Settings },
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
