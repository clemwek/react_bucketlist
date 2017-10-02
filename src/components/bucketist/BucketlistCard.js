import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List} from 'material-ui/List';

import BucketlistItem from './BucketlisItem';

const BucketlistCard = ({
    bucket,
    deleteBucket,
    deleteItem,
    titleStyle
}) => {
    const style = {
        margin: '10px',
        width: '350px',
        height: '400px',
        overflow: 'scroll'
    }
    let items = <h4>There are no items added</h4>
    if (bucket.items.length > 0) {
        items = bucket.items.map(item => {
            return (
                <div>
                    <BucketlistItem
                        item={item}
                        bucket_id={bucket.id}
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
                    titleStyle={titleStyle}
                    actAsExpander={true}
                />
                <CardActions>
                    <Link to={`bucketlist/addItem/${bucket.id}`}>
                        <FlatButton
                            label="Add Item"
                        />
                    </Link>
                    <Link to={`bucketlist/${bucket.id}`}>
                        <FlatButton
                            label="Edit"
                            primary="true"
                        />
                    </Link>
                    <FlatButton
                        label="Delete"
                        secondary="true"
                        onClick={() => deleteBucket(bucket.id)}
                    />
                </CardActions>
                <CardText>
                    <List>
                        {items}
                    </List>
                </CardText>
            </Card>
        </div>
    );
}

BucketlistCard.propType = {
    onSubmit: PropTypes.func.isRequired
};

export default BucketlistCard;