import React, { PureComponent, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Menu from '../components/menu/index';
import Home from '../components/home/index';
import Info from '../components/info/index';
import Contact from '../components/contact/index';
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
    const resParam = config.resultsParam;
    const results = config.results;
    const natParam = config.nationalityParam;
    const nationalities = config.nationalities;

    fetch(url + resParam + results + '&' + natParam + nationalities)
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
              <Info
                usersData={this.state.data}
              />
            )
            }
          />
          <Route
            path="/contact"
            render={() => (
              <Contact
                usersData={this.state.data}
              />
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