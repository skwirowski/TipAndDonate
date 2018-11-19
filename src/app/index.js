import React, { PureComponent, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Menu from '../components/menu/index';
import Home from '../components/home/index';
import Info from '../components/info/index';
import Contact from '../components/info/index';
import NotFound from '../components/notFound/index';
import { config } from '../utils/config';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    }
  }

  // TODO: actions handlers

  componentDidMount() {
    const url = config.apiURL;
    const param = config.resultsParam;
    const results = config.results;

    fetch(url + param + results)
      .then(response => response.json())
      .then(data => data.results)
      .then(data => {
        this.setState({
          loading: false,
          data
        });
        console.log(this.state.data);
      })
      .catch(error => {
        console.log('Data fetch error:', error);
      });
  }

  render() {
    return (
      <Fragment>
        <Menu />
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home
                usersData={this.state.data}
              />
            )}
          />
          <Route
            path="/info"
            render={() => (
              <Info />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <Contact />
            )}
          />
          <Route
            render={() => (
              <NotFound />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);