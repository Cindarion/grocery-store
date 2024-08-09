import React from 'react'
import classes from './LoginPage.module.css'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className={classes.contentContainer}>
      <main>
        <div className={classes.contentWrapper}>

          <form>
            <div className={classes.companyTitle}>
              <Link to='/introduction'>
                <span>
                  BloomBasket
                </span>
              </Link>
            </div>
            <div className={classes.authContentWrapper}>
              <div className={classes.signInTitle}>
                <span><b>Sign in</b></span>
                <span>Don’t have an account? <a href="#">Create new</a></span>
              </div>

              <div className={classes.signInFromWrapper}>
                <div>
                  <span>E-mail</span>
                  <input type="text" />
                </div>
                <div>
                  <span>Password</span>
                  <input type="text" />
                </div>
              </div>
            </div>
          </form>

          <div className={classes.contentRight}>
          </div>

        </div>
      </main>
    </div>
  )
};

export default LoginPage