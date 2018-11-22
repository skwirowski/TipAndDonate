import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import { SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

import { getCountry } from '../../utils/config';
import { firsLetterToUpperCase } from '../../utils/helperFunctions';


const createRows = (users) => users.map((user) => {
  const rows = {
    firstname: firsLetterToUpperCase(user.name.first),
    lastname: firsLetterToUpperCase(user.name.last),
    gender: user.gender,
    age: user.dob.age,
    city: firsLetterToUpperCase(user.location.city),
    country: getCountry(user.nat),
    registered: user.registered.date,
  };

  return rows;
});

class Info extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sorting: [{ columnName: 'secondname', direction: 'asc' }],
    };

    this.changeSorting = sorting => this.setState({ sorting });
  }

  render() {
    const columns = [
      { name: 'firstname', title: 'First Name' },
      { name: 'lastname', title: 'Last Name' },
      { name: 'gender', title: 'Gender' },
      { name: 'age', title: 'Age' },
      { name: 'city', title: 'City' },
      { name: 'country', title: 'Country' },
      { name: 'registered', title: 'Registered' },
    ];
    const rows = createRows(this.props.usersData);
    const { sorting } = this.state;

    return (
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <SortingState
            sorting={sorting}
            onSortingChange={this.changeSorting}
          />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow
            showSortingControls
          />
        </Grid>

      </Paper>
    );
  }
}

export default Info;