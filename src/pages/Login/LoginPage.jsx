import React from 'react'
import classes from './LoginPage.module.css'
import { Link } from 'react-router-dom';
import ActionButton from '../../components/UI/Buttons/ActionButton/ActionButton'

const LoginPage = () => {
  return (
    <div className={classes.contentContainer}>
      <main>
        <div className={classes.contentWrapper}>
          <form>
            <div className={classes.companyTitle}>
              <Link to='/introduction'>
                <span>BloomBasket</span>
              </Link>
            </div>
            <div className={classes.authContentWrapper}>
              <div className={classes.formTitle}>
                <h1>Sign in</h1>
                <span>
                  Don’t have an account? 
                  <a href="#">Create new</a>
                </span>
              </div>
              <div className={classes.inputsWrapper}>
                <div>
                  <div>E-mail</div>
                  <input type="text" />
                </div>
                <div>
                  <div>Password</div>
                  <input type="text" />
                </div>
              </div>
              <div className={classes.additionalOptionsWrapper}>
                <div>
                  <input type="checkbox" name="" value="true" />
                  <span>Remember me</span>
                </div>
                <div>
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <div>
                <ActionButton children={"Sign-in"}/>
              </div>
              <div className={classes.orSeparator}>
                <hr />
                <span>OR</span>
                <hr />
              </div>
              <div className={classes.otherLoginMethod}>
                <ActionButton children={"Continue with Google"} />
                <ActionButton children={"Continue with VK"} />
              </div>
            </div>
          </form>
          <div className={classes.contentRight}>
            <div className={classes.previewImgWrapper}></div>
            <div className={classes.previewTitleWrapper}>
              <h1>Introducing new features</h1>
              <span>Dive deeper into the products you love. 
                Our detailed product pages now offer comprehensive information</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export default LoginPage