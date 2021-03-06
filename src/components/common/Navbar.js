import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
import toastr from 'toastr';

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

    logout = () => {
        this.props.actions.logout()
    }

    render() {
        this.props.auth.authenticated ? 
            null :
            this.context.router.push('/') 
        return (
            <div>
                <NavbarAppBar
                    login={this.showLogin}
                    logout={this.logout}
                    register={this.showRegister}
                    autheticated={this.props.auth.authenticated}
                />
                {this.props.loading && <LinearProgress mode="indeterminate" color={"pink"} />}
                <br />
            </div>
        );
    }
}

Navbar.PropType = {
    auth: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

Navbar.contextTypes = {
    router: PropTypes.object
}

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