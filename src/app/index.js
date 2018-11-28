import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from '../components/menu';
import Home from '../components/home';
import DataTable from '../components/table';
import Contact from '../components/contact';
import Loader from '../components/loader';
import ErrorMessage from '../components/error';
import NotFound from '../components/notFound';
import { config } from '../utils/config';

class App extends Component {
  state = {
    loading: true,
    data: null,
    errorName: null,
    errorMessage: null,
  }

  componentDidMount() {
    const url = config.apiURL;
    const DEFAULT_QUERRY = config.query;

    fetch(url + DEFAULT_QUERRY)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(data => {
        this.setState({
          loading: false,
          data: data.results,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          errorName: error.name,
          errorMessage: error.message,
        });
      });
  }

  render() {
    //? set window allows to use Material UI new typography variants
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

    const { loading, data, errorName, errorMessage } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <Menu />
        {loading ?

          <Loader /> :

          errorMessage ?

            <ErrorMessage
              errorName={errorName}
              errorMessage={errorMessage}
            /> :

            <Switch>
              <Route
                exact path="/"
                render={() => (
                  <Home
                    usersData={data}
                  />
                )}
              />
              <Route
                path="/table"
                render={() => (
                  <DataTable
                    usersData={data}
                  />
                )
                }
              />
              <Route
                path="/contact"
                render={() => (
                  <Contact
                    usersData={data}
                  />
                )}
              />
              <Route
                render={() => (
                  <NotFound />
                )}
              />
            </Switch>
        }
      </Fragment>
    );
  }
}

export default App;