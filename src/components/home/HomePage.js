import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Redirect, browserHistory } from 'react-router';
import {Card} from 'material-ui/Card';

import * as authActions from '../../actions/AuthActions'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Buckelist from '../bucketist/BucketlistPage';


class HomePage extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            auth: {},
            errors: {},
            resetPassword: false
        };
        this.updateAuthState = this.updateAuthState.bind(this);
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmitChangePassword = this.onSubmitChangePassword.bind(this)
    }

    updateAuthState(event) {
        const field = event.target.name;
        let auth = this.state.auth;
        auth[field] = event.target.value;
        this.setState({auth: auth});
    }

    login(event) {
        event.preventDefault();
        this.props.actions.login(this.state.auth)
    }

    changePassword() {
        let newReset = !this.state.resetPassword
        this.setState({resetPassword: newReset})
    }

    onSubmitChangePassword(event) {
        event.preventDefault();
        this.props.actions.changePassword(this.state.auth)
        this.changePassword()
    }

    register(event) {
        event.preventDefault();
        this.props.actions.register(this.state.auth)
        
    }

    render() {
        const style = {
            height: 600,
            width: 500,
            margin: 10,
            textAlign: 'center',
            display: 'inline-block',
          };

        this.props.auth.authenticated ? 
            this.context.router.push('/bucketlist') :
            null

        let showForm
        this.props.auth.login ?
            showForm = <LoginForm
                onChange={this.updateAuthState}
                onSubmit={this.login}
                errors={this.state.errors}
                reset={this.state.resetPassword}
                changePassword={this.changePassword}
                onSubmitChangePassword={this.onSubmitChangePassword}
            />
        
        : showForm = <RegisterForm
            onChange={this.updateAuthState}
            onSubmit={this.register}
        />
        
        return (
            <div>
                <Card style={style}>
                    {showForm}
                </Card>
            </div>         
        );
    }
}

HomePage.PropType = {
    auth: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

HomePage.contextTypes = {
    router: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);