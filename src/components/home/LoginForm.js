import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const LoginForm = ({onSubmit, onChange, reset, changePassword, onSubmitChangePassword }) => {
    return (
        reset ? 
        <div>
        <CardHeader
            title="Reset your password"
            actAsExpander={true}
        />
        <CardText>
        <TextField
            name="username"
            hintText="username"
            floatingLabelText="username"
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
        <TextField
            name="passwordAgain"
            hintText="passwordAgain"
            floatingLabelText="passwordAgain"
            fullWidth={true}
            onChange={onChange}
            type="password"
        /><br />
        </CardText>
        <CardActions>
            <RaisedButton
                label="change password"
                primary={true}
                onClick={onSubmitChangePassword}
            /><br /><br />
            <FlatButton
                label="Forgot your password? "
                primary={true}
                onClick={changePassword}
            />
        </CardActions>
    </div>
        :

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
                <RaisedButton
                    label="Login"
                    primary={true}
                    onClick={onSubmit}
                /><br /><br />
                <FlatButton
                    label="Forgot your password? "
                    primary={true}
                    onClick={changePassword}
                />
            </CardActions>
        </div>
    );
}

LoginForm.propType = {
    login:PropTypes.func.isRequired
};

export default LoginForm;