import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import { ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {red500, blue500 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

const BucketlistItem = ({ item, deleteItem, editItem, bucket_id }) => {
    const style = {
        margin: '10px',
        width: '350px',
        height: 'auto'
    }
    return (
        <div>
            <ListItem
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                rightIcon={
                    <div>
                        <Link to={`bucketlist/${bucket_id}/editItem/${item.id}`}>
                            <FontIcon className="material-icons" >edit</FontIcon>
                        </Link>
                        <FontIcon className="material-icons" color={red500} onClick={() => deleteItem(bucket_id, item.id)}>delete</FontIcon>
                    </div>
                }
                primaryText={item.name}
                secondaryText={item.date}
            />
        </div>
    );
}

BucketlistItem.propType = {
    onSubmit: PropTypes.func.isRequired
};

export default BucketlistItem;