import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const RegisterForm = ({onChange, onSubmit}) => {
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
                onChange={onChange}
                floatingLabelText="Username"
                fullWidth={true}
            /><br />
            <TextField
                name="email"
                hintText="email"
                onChange={onChange}
                type="email"
                floatingLabelText="email"
                fullWidth={true}
            /><br />
            <TextField
                name="password"
                hintText="password"
                floatingLabelText="password"
                onChange={onChange}
                type="password"
                fullWidth={true}
            /><br />
            <TextField
                name="password"
                hintText="password"
                floatingLabelText="password"
                type="password"
                onChange={onChange}
                fullWidth={true}
            /><br />
            <CardActions>
                <FlatButton
                    label="Regster"
                    onClick={onSubmit}
                />
            </CardActions>
            </CardText>
        </div>
    );
}

RegisterForm.propType = {
    register:PropTypes.func.isRequired
};

export default RegisterForm;