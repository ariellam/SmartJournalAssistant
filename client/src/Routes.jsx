import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import JournalPage from 'components/JournalPage';
import DashboardPage from 'components/DashboardPage';

const Routes = (props) => (
    <main>
    <Switch>
      <Route exact path='/journal' component={JournalPage}/>
      <Route exact path='/dashboard' component={DashboardPage} />
    </Switch>
  </main>
)

export default withRouter(connect(mapStateToProps)(Routes));