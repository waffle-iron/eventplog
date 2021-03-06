import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from '../../../theme/variables'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import MainContent from './components/main-content'
import { Auth } from '../../auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import { media } from '../../../styles/mixins'

const responseGoogle = (response) => {
  debugger
  console.log(response);
}

const responseFacebook = (response) => {
  console.log(response);
}


const StyledLogin = styled.div`
  --fg: ${defaults.fg};
  --bg: ${defaults.bg};
  --activeLink: ${defaults.activeLink};
  
  display: flex;
  flex-direction: column;
  height: 100%;
  
  > .header {
    height: 70px;
  }
  
  .main-content {
    flex: 1;
    
    ${
      media.phone`
        background-repeat: no-repeat;
        background-size: contain;
      `
    }
  }
  
  .app-container {
    ${
      media.phone`
        padding: 0;
      `
    }
    
    
  }
  
  .footer {
    height: 200px;
    background: #eee;
  }
`

class Login extends Component {
  loginUser = (payload) =>  {
    this.props.loginUser(payload)
      .then(res => {
        // this.props.history.push('/')
        window.location.replace('/')
      })
  }

  fbResponse = (res) => {
    if (!res) return
    const [ first_name, ...otherNames ] = res.name.split(' ')
    const payload = {
      first_name,
      last_name: otherNames.join(' '),
      avatar_url: res.picture.data.url,
      email: res.email,
      oauth_user_id: res.userID,
    }
    this.loginUser(payload)
  }

  googleResponse = (res = {}) => {
    if (!res || !res.profileObj) return
    const {
      email,
      familyName: last_name,
      givenName: first_name,
      imageUrl: avatar_url,
      googleId: oauth_user_id
    } = res.profileObj

    const payload = {
      email, first_name, last_name, avatar_url, oauth_user_id
    }
    this.loginUser(payload)
  }

  render() {
    const menu = [
      {text: 'I want to create my first event >', url: '/leads/1'}
    ]
    if (Auth.isLoggedIn) return <Redirect to="/" />
    const {state} = this.props.location
    return (
      <StyledLogin>
        <MainContent currentPath={this.props.match.path}
                     flashMsg={state ? state.flash_msg : null}
                     googleResponse={this.googleResponse}
                     fbResponse={this.fbResponse}
        />
      </StyledLogin>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loginUser: Auth.loginUser
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
