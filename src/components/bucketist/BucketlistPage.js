import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import * as bucketlistActions from '../../actions/BucketlistActions';
import SearchBarComponent from './SearchBar';
import BucketlistCard from './BucketlistCard';
import AddBucketlist from './AddBucketlist';

class Bucketlist extends Component {
    constructor(props, ownProps) {
        super(props, ownProps);
        this.state = {
            bucket: {},
            openAdd: false
        };
        this.handleCloseAdd = this.handleCloseAdd.bind(this)
        this.updateBucketState = this.updateBucketState.bind(this)
        this.handleOpenAdd = this.handleOpenAdd.bind(this)
        this.addBucket = this.addBucket.bind(this)
    }
    updateBucketState(event) {
        const field = event.target.name;
        let bucket = this.state.bucket;
        bucket[field] = event.target.value;
        this.setState({bucket: bucket});
    }
    addBucket(event) {
        event.preventDefault();
        this.props.actions.addBucketlist(this.state.bucket)
        this.handleCloseAdd()
    }
    handleCloseAdd() {
        this.setState({openAdd: false})
    }
    handleOpenAdd() {
        this.setState({openAdd: true})
    }
    componentWillMount() {
        this.props.actions.getBucketlist()
    }
    render() {
        const style = {
            root: {
              margin: 'auto',
              width: '90%',
              height: 'auto',
              textAlign: 'center',
            },
            card: {
              margin: '10px',
              width: '350px',
              height: 'auto'
            },
            imgHeader: {
              height: '50%',
              width: '100%'
            }
          }
        return (
            <div style={style.root}>
                <SearchBarComponent />
                <br />
                <AddBucketlist
                    openAdd={this.state.openAdd}
                    handleCloseAdd={this.handleCloseAdd}
                    handleChange={this.updateBucketState}
                    handleOpenAdd={this.handleOpenAdd}
                    onsubmit={this.addBucket}
                />
                <BucketlistCard style={style.card}/>
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