import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import Buckelist from './components/bucketist/BucketlistPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="bucketlist" component={Buckelist} />
    </Route>
);
