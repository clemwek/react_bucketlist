import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import SearchBar from 'material-ui-search-bar'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import * as bucketlistActions from '../../actions/BucketlistActions'

class Bucketlist extends Component {
    render() {
        return (
            <div>
                <SearchBar
                    onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    style={{
                    margin: '0 auto',
                    maxWidth: 800
                    }}
                />
                <Card>
                    <CardHeader
                        title="Bucket name"
                        actAsExpander={true}
                    />
                    <CardActions>
                        <FlatButton label="Add Item" />
                        <FlatButton label="Edit" />
                        <FlatButton label="Delete" />
                    </CardActions>
                    <CardText>
                        <h3>This where the items will go</h3>
                    </CardText>
                </Card>
            </div>
        );
    }
}


Bucketlist.PropType = {
    auth: PropTypes.array.isRequired,
    bucketlist: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {
    return {
        auth: state.auth,
        bucketlist: state.bucketlist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bucketlistActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bucketlist);