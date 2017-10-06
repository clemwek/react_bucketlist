import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import * as bucketlistActions from '../../actions/BucketlistActions'

export class EditBucketlist extends Component {
    constructor(props, ownProps) {
        super(props, ownProps);
        this.state = {
            bucketlist: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        const field = event.target.name;
        let bucketlist = this.state.bucketlist;
        bucketlist[field] = event.target.value;
        this.setState({bucketlist: bucketlist});
    }
    onSubmit(event) {
        event.preventDefault();
        let bucketlist = this.state.bucketlist
        bucketlist.id = this.props.params.id
        this.props.actions.editBucketlist(bucketlist)
        .then(this.props.actions.getBucketlist());
        this.context.router.push('/bucketlist')
    }
    render(){
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Edit Bucketlist"
                        actAsExpander={true}
                    />
                    <CardText>
                    <TextField
                        name="name"
                        hintText="Bucketlist name"
                        floatingLabelText="Bucketlist name"
                        onChange={this.onChange}
                    /><br />
                    </CardText>
                    <CardActions>
                        <RaisedButton
                            label="Edit Bucketlist"
                            primary={true}
                            onClick={this.onSubmit}
                        /><br /><br />
                        <Link to="/bucketlist">
                            <FlatButton
                                label="Cancel"
                                secondary={true}
                            />
                        </Link>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

EditBucketlist.propType = {
    login:PropTypes.func.isRequired
};

EditBucketlist.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps (state, ownProps) {
    return {
        bucketlist: state.bucketlist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bucketlistActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditBucketlist);