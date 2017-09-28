import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

import AppBar from 'material-ui/AppBar';

const NavbarAppBar = ({login, register, autheticated}) => {
    return (
        <AppBar
            showMenuIconButton={false}
            title='Bucketlist'
            iconElementRight={
                <div>
                    <FlatButton
                        label="Login"
                        onClick={login}
                    />
                    <FlatButton
                        label="Register"
                        onClick={register}
                    />
                    <FlatButton
                        label="Logout"
                    />
                </div>
            }
        />
    );
}

NavbarAppBar.propType = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    autheticated: PropTypes.bool
};

export default NavbarAppBar;