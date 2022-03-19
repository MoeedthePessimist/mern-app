import React, { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './users/pages/Users';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
            <Route path="/" element={<Users />} exact />
            <Route path="/places/new" element={<NewPlace />} exact />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
