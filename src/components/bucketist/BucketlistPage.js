import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';

import * as bucketlistActions from '../../actions/BucketlistActions';
import SearchBarComponent from './SearchBar';
import BucketlistCard from './BucketlistCard';
import AddBucketlist from './AddBucketlist';

export class Bucketlist extends Component {
    constructor(props, ownProps) {
        super(props, ownProps);
        this.state = {
            bucket: {},
            search: '',
            openAdd: false
        };
        this.handleCloseAdd = this.handleCloseAdd.bind(this)
        this.updateBucketState = this.updateBucketState.bind(this)
        this.handleOpenAdd = this.handleOpenAdd.bind(this)
        this.addBucket = this.addBucket.bind(this)
        this.deleteBucket = this.deleteBucket.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.search = this.search.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
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
    search(value) {
        this.props.actions.searchBucketlist(this.state.search)
    }
    updateSearch(value) {
        this.setState({search: value})
    }
    deleteBucket(id) {
        this.props.actions.deleteBucketlist(id)
    }
    deleteItem(id, item_id) {
        this.props.actions.deleteBucketlistItem(id, item_id)
        .then(this.props.actions.getBucketlist());
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
            cardRow: {
              display: 'flex',
              flexDirection: 'row wrap',
              flexWrap: 'wrap',
              padding: 10,
              width: '100%'
            },
            cardHeader: {
                fontSize: '20px',
                fontWeight: 'bold'
            }
          }
        let bucketlists 
        if (this.props.bucketlist.length > 0) {
        bucketlists = this.props.bucketlist.map(bucket => {
            return (
                <BucketlistCard
                    bucket={bucket}
                    titleStyle={style.cardHeader}
                    deleteBucket={this.deleteBucket}
                    deleteItem={this.deleteItem}
                />
            )
        })
    } else {
        bucketlists = <Card>
            <CardText>
                <h4>You have no bucketlists yet, please click on the button with a plus to add bucketlist.</h4>
            </CardText>
        </Card>
    }
  
        return (
            <div style={style.root}>
                <SearchBarComponent
                    onChange={this.updateSearch}
                    onSubmitSearch={this.search}
                />
                <br />
                <AddBucketlist
                    openAdd={this.state.openAdd}
                    handleCloseAdd={this.handleCloseAdd}
                    handleChange={this.updateBucketState}
                    handleOpenAdd={this.handleOpenAdd}
                    onsubmit={this.addBucket}
                />
                <div style={style.cardRow}>
                        {bucketlists}
                </div>
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