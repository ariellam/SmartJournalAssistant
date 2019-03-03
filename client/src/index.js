import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import TitlePage from './components/TitlePage';
import JournalPage from './components/JournalPage';
import DashboardPage from './components/DashboardPage';
import store from './store'


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={TitlePage} />
                <Route path="/journal" component={JournalPage} />
                <Route path="/dashboard" component={DashboardPage} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
