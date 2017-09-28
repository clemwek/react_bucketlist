import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

import AppBar from 'material-ui/AppBar';

const Navbar = () => {
    return (
        <AppBar
            showMenuIconButton={false}
            title='Bucketlist'
            iconElementRight={
                <div>
                    <FlatButton label="Login" />
                    <FlatButton label="Register" />
                    <FlatButton label="Logout" />
                </div>
            }
        />
    );
};

export default Navbar;