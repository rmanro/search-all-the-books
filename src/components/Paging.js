import React, { Component } from 'react';

export default class Paging extends Component {

  handlePage(increment) {
    const { page, onPage, startIndex } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { totalItems, page, perPage } = this.props;

    if(!totalItems) return <div>No results found!</div>;

    const totalPages = Math.ceil(totalItems / perPage);

    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        &nbsp;
        <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev</button>
        <button onClick={() => this.handlePage(1)} disabled={page === totalPages}>Next &gt;</button>
        <span>{totalItems} Total Books</span>
      </div>
    );
  }
}