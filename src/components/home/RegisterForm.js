import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const RegisterForm = ({onChange,
    onSubmit,
    titleStyle
}) => {
    return (
        <div>
            <CardHeader
                title="REGISTER"
                titleStyle={titleStyle}
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
                <RaisedButton
                    label="Register"
                    onClick={onSubmit}
                    primary="true"
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