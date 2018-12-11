import React, { Component } from 'react';
import { connect } from 'react-redux';

import { tokenExists } from '../actions';

const keyName = process.env.REACT_APP_TOKEN_ITEM;

export default ChildComponent => {
    class ComposedComponent extends Component {
        
        componentDidMount() {
            this.checkForAuth();
        }

        componentDidUpdate() {
            this.checkForAuth();
        }

        checkForAuth() {
            const key = localStorage.getItem(keyName);

            if (key) {
                this.props.tokenExists();
            } else if (this.props.authenticated) {
                this.props.history.push('/');
            } else {
                this.props.history.push('/login');
            }
        }

        render() {
            return (
                <ChildComponent {...this.props}/>
            )
        }
    }

    const mapStateToProps = state => {
        const { authenticated } = state.auth;
        return { authenticated };
    }

    return connect(mapStateToProps, { tokenExists })(ComposedComponent);
};