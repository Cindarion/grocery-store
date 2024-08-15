import React, { useEffect, useRef } from 'react'
import classes from './LoginPage.module.css'
import { Link } from 'react-router-dom';

// Components
import ActionButton from '../../components/UI/Buttons/ActionButton/ActionButton'

// Test
import news_test_img from '../../data/images/news-img.png'

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.contentWrapper}>
        <div className={classes.formContainer}>
          <div className={classes.companyLogo}>
            <Link to='/introduction'>
              BloomBasket
            </Link>
          </div>
          <div className={classes.authContentWrapper}>
            <div className={classes.formTitle}>
              <h1>Sign in</h1>
              <span>Don’t have an account? <a href="#">Create new</a> </span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={classes.authInputsContainer}>
                <div className={classes.emailInputContainer}>
                  <label for="userEmail">E-mail</label>
                  <input type="email" id="userEmail" required/>
                </div>
                <div className={classes.passwordInputContainer}>
                  <label for="userPassword">Password</label>
                  <input type="password" id="userPassword" minLength={6} maxLength={54} required >
                  </input>
                  <div className={classes.hidePasswordWrapper}>
                    <img 
                      alt='hide-password'
                      className={classes.hidePasswordIcon} 
                      src={require("../../data/icons/hide-password-true.png")}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.authOptionsContainer}>
                <label className={classes.rememberMeOption}>
                  <input type="checkbox" id="rememberMe" />
                  <span>Remember me</span>
                </label>
                <div>
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <div>
                <ActionButton 
                  children={"Sign-in"}
                />
              </div>
            </form>
            <p className={classes.orDivider}>OR</p>
            <div className={classes.otherAuthMethods}>
              <ActionButton 
                children={"Continue with Google"} 
              />
              <ActionButton 
                children={"Continue with VK"} 
              />
            </div>
          </div>
        </div>
        <div className={classes.previewContentContainer}>
          <div className={classes.previewImgWrapper}>
            <span />
            <img src={news_test_img} alt="news test img" />
          </div>
          <div className={classes.previewTitleWrapper}>
            <h1>
              Introducing new features
            </h1>
            <span>
              Dive deeper into the products you love. 
              Our detailed product pages now offer comprehensive information
            </span>
          </div>
          <div className={classes.newsPaginationWrapper}>
            <span>&lt;</span>
            <li>○</li>
            <li>●</li>
            <li>○</li>
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage