import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const RegisterForm = register => {
    return (
        <div>
            <CardHeader
                title="Register Here"
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
        </div>
    );
}

RegisterForm.propType = {
    register:PropTypes.func.isRequired
};

export default RegisterForm;