import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Form, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import { lighten } from 'polished'
import colors from '../../../../../theme/colors'
import Input from '../../../shared/input'
import Button from '../../../shared/button'

const StyledLogInForm = styled.div`
  > .ui.form {
    .field {
      label {
        color: ${lighten(0.6, colors.black)};
        font-weight: 500;
      }
    }
    
    > .field {
      &:nth-last-child(2) {
        margin: 30px 0 20px;
      }
    }
    
    .checkbox-holder {
      margin: 20px 0;
      
      > .field {
        display: flex;
        align-items: center;
      }
      
      input[type='checkbox'] {
        display: inline-flex;
      }
      
      label {
        display: inline-flex;
        margin: auto 10px;
      }
    }
  }
  
`


const LoginForm = ({
  user = {},
  handleChange,
  handleSubmit,
  success,
  loading,
  feedback_url,
}) => {
  return (
    <StyledLogInForm>
      <Form loading={loading} success={success}>
        <Form.Field>
          <label>Email</label>
          <Input name="email"
                 type="email"
                 value={user.email}
                 placeholder='ciroma@chukwuma.com' onChange={handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <Input name="password"
                 type="password"
                 value={user.email}
                 placeholder='*****' onChange={handleChange}/>
        </Form.Field>

        <div className="checkbox-holder">
          <Form.Field>
            <input type="checkbox" name="vehicle" value="Bike" />
            <label>Keep me logged in</label>
          </Form.Field>
        </div>

        <Button type='submit' onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </StyledLogInForm>
  )
}

export default LoginForm;