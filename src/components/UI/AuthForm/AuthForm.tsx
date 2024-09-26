import { Link } from 'react-router-dom';
import ActionButton from 'src/components/UI/Buttons/ActionButton/ActionButton'
import classes from "./AuthForm.module.css"

const AuthForm = () => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.companyLogo}>
        <Link to='/introduction'>
          BloomBasket
        </Link>
      </div>
      <div className={classes.authContentWrapper}>
        <div className={classes.formTitle}>
          <h1>Sign in</h1>
          <span className={classes.dontHaveAccountWrapper}>
            <span>Don’t have an account?</span>
            <a href="#">Create new</a> 
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputsContainer}>
            <div className={classes.emailInputContainer}>
              <label htmlFor="userEmail">E-mail</label>
              <input type="email" id="userEmail" required/>
            </div>
            <div className={classes.passwordInputContainer}>
              <label htmlFor="userPassword">Password</label>
              <span>
                <input type="password" id="userPassword" minLength={6} maxLength={54} required >
                </input>
                <div className={classes.hidePasswordWrapper}>
                  <img 
                    alt='hide-password'
                    className={classes.hidePasswordIcon} 
                    src={require("src/data/icons/hide-password-true.png")}
                  />
                </div>
              </span>
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
          <div className={classes.SignInButtonWrapper}>
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
  )
}

export default AuthForm