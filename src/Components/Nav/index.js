import React from 'react';
import { Navbar } from 'react-bootstrap';

function Nav(props) {
  const tabs = ['Home', 'Portfolio', 'Resume', 'Contact'];
  return (
      <Navbar>
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link navActive' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </Navbar>
  );
}

export default Nav;