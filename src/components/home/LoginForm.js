import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const LoginForm = login => {
    return (
        <div>
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
            </CardText>
            <CardActions>
                <FlatButton label="Login" />
            </CardActions>
        </div>
    );
}

LoginForm.propType = {
    login:PropTypes.func.isRequired
};

export default LoginForm;