import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import Buckelist from './components/bucketist/BucketlistPage';
import AddItem from './components/bucketist/AddItems';
import EditItem from './components/bucketist/EditItems';
import EditBucketlist from './components/bucketist/EditBucketlist';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="bucketlist" component={Buckelist} />
        <Route path="bucketlist/addItem/:id" component={AddItem} />
        <Route path="bucketlist/:id" component={EditBucketlist} />
        <Route path="bucketlist/:bucket_id/editItem/:id" component={EditItem} />
    </Route>
);
