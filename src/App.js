import React, { Component } from 'react';
import { Menu, ChangeInput, HoverBox, SelectBoxes, ResizeWindow, Purestack, Location, CallApi } from './components';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Minute, Second } from './components/Timer';

class App extends Component {


  render() {

    return (
      <Router>
        <div>
          <Menu />
          <div>
            {this.showContentMenus(routes)}
            <br />
            <br />
            <br />
            <span style={{ height: '120px' }}></span>
            <div>Minute: <Minute minutes={12} /></div>
            <div>Second: <Second seconds={51} /></div>

            <ChangeInput />
            <br />
            <HoverBox />
            <SelectBoxes />
            <ResizeWindow />
            <Purestack />
            <hr />
            <Location />
            <CallApi />
          </div>

        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
