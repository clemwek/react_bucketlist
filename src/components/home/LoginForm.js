import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const LoginForm = ({onSubmit, onChange }) => {
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
                fullWidth={true}
                onChange={onChange}
            /><br />
            <TextField
                name="password"
                hintText="password"
                floatingLabelText="password"
                fullWidth={true}
                onChange={onChange}
                type="password"
            /><br />
            </CardText>
            <CardActions>
                <FlatButton
                    label="Login"
                    primary={true}
                    onClick={onSubmit}
                />
            </CardActions>
        </div>
    );
}

LoginForm.propType = {
    login:PropTypes.func.isRequired
};

export default LoginForm;