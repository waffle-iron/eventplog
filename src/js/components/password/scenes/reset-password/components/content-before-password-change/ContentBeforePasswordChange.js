import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Input from '../../../../../shared/input'
import Button from '../../../../../shared/button'

const StyledContent = styled.div`
  .ui.form {
    max-width: 500px;
    margin: 60px auto;
    
    .password-holder {
      flex: 1;
      
      input[type='password'] {
        width: 100%;
      }
    }
  }
  
`

const ContentBeforePasswordChange = ({
  password,
  handleChange,
  resetPassword,
  loading,
  error
}) => (
  <StyledContent>
    <p>Type in your new password and then click submit. Your password should be less than 8 characters. It's a good idea to add in some numbers.</p>
    <div className="submit-form">

      <Form loading={loading} error={!!error}>

        <Message
          error
          header="Error"
          content={error && error.toString()}
        />

        <Form.Group inline>
          <Form.Field className="password-holder">
            <Input name="password"
                   type="password"
                   value={password}
                   placeholder='****' onChange={handleChange}/>

          </Form.Field>
          <Button onClick={resetPassword}>Change my password</Button>
        </Form.Group>
      </Form>
    </div>
  </StyledContent>
)

export default ContentBeforePasswordChange
