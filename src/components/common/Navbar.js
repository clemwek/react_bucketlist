import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

import AppBar from 'material-ui/AppBar';
import * as authActions from '../../actions/AuthActions'
import NavbarAppBar from './NavbarAppBar';


class Navbar extends Component {
    constructor(props, ownProps) {
        super(props, ownProps);
        this.showLogin = this.showLogin.bind(this)
        this.showRegister = this.showRegister.bind(this)
    }

    showLogin() {
        this.props.actions.showLogin()
    }

    showRegister = () => {
        this.props.actions.showRegister()
    }


    render() {
        return (
            <NavbarAppBar
                login={this.showLogin}
                register={this.showRegister}
                user
            />
        );
    }
}

Navbar.PropType = {
    auth: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);