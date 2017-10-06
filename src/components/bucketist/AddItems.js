import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import * as bucketlistActions from '../../actions/BucketlistActions'

export class AddItem extends Component {
// ({onSubmit, onChange, takeDate }) 
    constructor(props, ownProps) {
        super(props, ownProps);
        this.state = {
            item: {},
            date: '',
            openAdd: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        const field = event.target.name;
        let item = this.state.item;
        item[field] = event.target.value;
        this.setState({item: item});
    }
    onSubmit(event) {
        event.preventDefault();
        let strDate = this.state.date.toString()
        let newDate = new Date(strDate)
        let formatedDate = (newDate.getMonth()+1) + '/' + newDate.getDate() + '/' + newDate.getFullYear()
        let data = this.state.item
        data.id = this.props.params.id
        data.date = formatedDate
        this.props.actions.addItems(data)
        this.context.router.push('/bucketlist')
    }
    render(){
        const style = {
            height: 'auto',
            width: 700,
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',
          };
        const titleStyle = {
            fontSize: '30px',
            fontWeight: 'bold',
            textAlign: 'center'
        }
        const row = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
        const pgHeight = {
            height: '100%'
        }
        return (
            <div style={pgHeight}>
                <div style={row}>
                <Card style={style}>
                    <CardHeader
                        title="Add Items"
                        actAsExpander={true}
                        titleStyle={titleStyle}
                    />
                    <CardText>
                    <TextField
                    name="name"
                    hintText="Item name"
                    floatingLabelText="Item name"
                    fullWidth={true}
                    onChange={this.onChange}
                /><br />
                <br />
                <TextField
                    name="description"
                    hintText="Item description"
                    floatingLabelText="Item description"
                    fullWidth={true}
                    onChange={this.onChange}
                /><br />
                <br />
                <DatePicker hintText="Choose A date" container="inline"
                    onChange={(e, date) => {
                    this.setState({date: date})
                    }}
                /><br />
                    </CardText>
                    <CardActions>
                        <RaisedButton
                            label="Add Item"
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
            </div>
        );
    }
}

AddItem.propType = {
    login:PropTypes.func.isRequired
};

AddItem.contextTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(AddItem);