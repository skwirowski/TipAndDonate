import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';

import { createRows, columns } from '../../utils/data';

class DataTable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sorting: [{ columnName: 'secondname', direction: 'asc' }],
      currentPage: 0,
      pageSize: 5,
      pageSizes: [5, 10, 15, 0],
      filters: [],
    };

    this.changeSorting = sorting => this.setState({ sorting });
    this.changeCurrentPage = currentPage => this.setState({ currentPage });
    this.changePageSize = (pageSize) => {
      localStorage.setItem('pageSize', JSON.stringify(pageSize));
      this.setState({ pageSize });
    };
    this.changeFilters = filters => this.setState({ filters });
  }

  componentDidMount() {
    const catchedPageSize = localStorage.getItem('pageSize');
    if (catchedPageSize) {
      return (
        this.setState({ pageSize: JSON.parse(catchedPageSize) })
      );
    }
    return (
      this.setState({ pageSize: 5 })
    );
  }

  render() {
    const rows = createRows(this.props.usersData);
    const {
      sorting, pageSize, pageSizes, currentPage, filters
    } = this.state;

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
          <PagingState
            currentPage={currentPage}
            onCurrentPageChange={this.changeCurrentPage}
            pageSize={pageSize}
            onPageSizeChange={this.changePageSize}
          />
          <IntegratedPaging />
          <FilteringState
            filters={filters}
            onFiltersChange={this.changeFilters}
          />
          <IntegratedFiltering />
          <Table />
          <TableHeaderRow
            showSortingControls
          />
          <PagingPanel
            pageSizes={pageSizes}
          />
          <TableFilterRow />
        </Grid>
      </Paper>
    );
  }
}

export default DataTable;