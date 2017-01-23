import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Article from './containers/Article';
import Message from './containers/Message';
import Login from './containers/Login';
import Profile from './containers/Profile';
import prefix from './utils/routePrefix';

const PublishTopica = (location, cb) => {  //路由按需处理
	require.ensure([], require => {
	    cb(null, require('./containers/PublishTopic').default)
	},'PublishTopica')
}     

const routes = (
    <Route path={`${prefix}/`} component={App}>
        <IndexRoute component={HomePage}/>
        <Route path='topic/:id' component={Article}/>
        <Route path='message' component={Message}/>
        <Route path='login' component={Login}/>
        <Route path='profile' component={Profile}/>
        <Route path='publishTopic' getComponent={PublishTopica}/>
    </Route>
);
export default routes;