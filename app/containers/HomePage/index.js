/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userLogin } from './action';
import LoginForm from '../../components/LoginFormComponent';

class HomePage extends Component {
  state = {
    loginPopup: false,
  };

  render() {
    const loginClicked = () => {
      this.setState({
        loginPopup: true,
      });
    };
    const modalClose = () => this.setState({ loginPopup: false });
    return (
      <>
        <center>
          <Button className="loginbtn" variant="primary" onClick={loginClicked}>
            login
          </Button>
        </center>
        <LoginForm
          show={this.state.loginPopup}
          onHide={modalClose}
          data={this.props}
        />
      </>
    );
  }
}

export default connect(
  state => ({
    response: state.loginResponse,
  }),
  {
    userLogin,
  },
)(HomePage);
