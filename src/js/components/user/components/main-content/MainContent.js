import React from 'react'
import styled from 'styled-components'
import colors from '../../../../../theme/colors'

const StyledMainContent = styled.div`
  > .app-container {
    display: flex;
    z-index: 1
  }
  
  .caption {
    flex: 1;
    display: flex;
    justify-content: center;
    color: #fff;
    margin: 50px;
    z-index: 1;
    flex-direction: column;
    text-align: left;
    text-shadow: 0 2px 4px ${colors.black};
    
    h1 {
      font-size: 4rem;
      font-weight: 300;
      font-family: "Andale Mono", AndaleMono, monospace;
    }
    
    small {
      font-size: 1.7rem;
      font-weight: 600;
      margin-top: 10px;
    }
  }
  
  .form-holder {
    background: ${colors.white};
    border-radius: 5px;
    box-shadow: 0 2px 4px #000;
    height: auto;
    margin: 100px;
    margin-right: 0;
    width: 400px;
    z-index: 1;
  }
`

const MainContent = ({ status, token, confirmed }) => (
  <StyledMainContent className="app-container">
    <h3>Confirm your email!</h3>
    {token && <div>
      {status == 'processing' && 'Confirming your email, please wait....'}
      {confirmed() && 'Your email is confirmed! Redirecting you back to login page ...'}
      {(status == 'failed') && 'You email confirmation failed. Please try again'}
    </div>}
    {!token &&
    <div>
      We've sent you a mail with a link to confirm your email address. &nbsp;
      Please check your emal to get started.
    </div>
    }
  </StyledMainContent>
)

export default MainContent
