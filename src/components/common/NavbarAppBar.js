import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

import AppBar from 'material-ui/AppBar';

class NavbarAppBar extends Component {
    render() {
        let button
        if (this.props.autheticated) {
            button = 
            <FlatButton
                label="Logout"
                onClick={this.props.logout}
            />
        } else {
            button = 
            <div>
                <FlatButton
                    label="Login"
                    onClick={this.props.login}
                />
                <FlatButton
                    label="Register"
                    onClick={this.props.register}
                />
            </div>
        }
        return (
            <AppBar
                showMenuIconButton={false}
                title='Bucketlist'
                iconElementRight={button}
            />
        );
    }
}

NavbarAppBar.propType = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    autheticated: PropTypes.bool
};

export default NavbarAppBar;