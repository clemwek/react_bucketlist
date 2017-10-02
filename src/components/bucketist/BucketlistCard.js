import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import BucketlistItem from './BucketlisItem';

const BucketlistCard = ({ bucket, deleteBucket, deleteItem }) => {
    const style = {
        margin: '10px',
        width: '350px',
        height: 'auto'
    }
    let items = <h4>There are no items added</h4>
    if (bucket.items) {
        items = bucket.items.map(item => {
            return (
                <div>
                    <BucketlistItem
                        item={item}
                        id={bucket.id}
                        deleteItem={deleteItem}
                    />
                </div>
            );
        });
    }
    return (
        <div>
            <Card style={style}>
                <CardHeader
                    title={bucket.name}
                    actAsExpander={true}
                />
                <CardActions>
                    <Link to={`bucketlist/addItem/${bucket.id}`}>
                        <FlatButton label="Add Item" />
                    </Link>
                    <FlatButton label="Edit" />
                    <FlatButton
                        label="Delete"
                        onClick={() => deleteBucket(bucket.id)}
                    />
                </CardActions>
                <CardText>
                    <h3>This where the items will go</h3>
                    {items}
                </CardText>
            </Card>
        </div>
    );
}

BucketlistCard.propType = {
    onSubmit: PropTypes.func.isRequired
};

export default BucketlistCard;