import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const LoginForm = ({onSubmit,
    onChange,
    reset,
    changePassword,
    onSubmitChangePassword,
    titleStyle
}) => {
    return (
        reset ? 
        <div>
            <CardHeader
                title="RESET PASSWORD"
                titleStyle={titleStyle}
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
                    label="go back to login"
                    secondary={true}
                    onClick={changePassword}
                />
            </CardActions>
        </div>
        :
        <div>
            <CardHeader
                title="LOGIN"
                titleStyle={titleStyle}
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
                    secondary={true}
                    onClick={changePassword}
                />
            </CardActions>
        </div>
    );
}

LoginForm.propType = {
    login: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    reset: PropTypes.bool.isRequired,
    changePassword: PropTypes.bool.isRequired,
    onSubmitChangePassword: PropTypes.func.isRequired,
    titleStyle: PropTypes.object.isRequired
};

export default LoginForm;