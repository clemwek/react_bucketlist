import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import * as authActions from '../../actions/AuthActions'


class HomePage extends Component {
    render() {
        const style = {
            height: 600,
            width: 500,
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',
          };
        return (
            <div>
                <Card style={style}>
                    <CardHeader
                        title="Login Here"
                        actAsExpander={true}
                    />
                    <CardText>
                    <TextField
                        name="username"
                        hintText="Username"
                        floatingLabelText="Username"
                        floatingLabelFixed={true}
                        fullWidth={true}
                    /><br />
                    <TextField
                        name="password"
                        hintText="password"
                        floatingLabelText="password"
                        floatingLabelFixed={true}
                        fullWidth={true}
                    /><br />
                    <CardActions>
                        <FlatButton label="Login" />
                    </CardActions>

                    <TextField
                        name="username"
                        hintText="Username"
                        floatingLabelText="Username"
                        floatingLabelFixed={true}
                        fullWidth={true}
                    /><br />
                    <TextField
                        name="email"
                        hintText="email"
                        floatingLabelText="email"
                        floatingLabelFixed={true}
                        fullWidth={true}
                    /><br />
                    <TextField
                        name="password"
                        hintText="password"
                        floatingLabelText="password"
                        floatingLabelFixed={true}
                        fullWidth={true}
                    /><br />
                    <TextField
                        name="date"
                        hintText="date"
                        floatingLabelText="date"
                        floatingLabelFixed={true}
                        fullWidth={true}
                    /><br />
                    <CardActions>
                        <FlatButton label="Regster" />
                    </CardActions>
                    </CardText>
                </Card>
            </div>         
        );
    }
}

HomePage.PropType = {
    auth: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);