import { Link } from 'react-router-dom';
import ActionButton from 'src/components/UI/Buttons/ActionButton/ActionButton'
import classes from "./CreateAccountForm.module.css"



const CreateAccountForm = ({setIsToggled}:any) => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const changeForm = () => {
    setIsToggled(false)
  }

  return (
    <div className={classes.formContainer}>
      <div className={classes.companyLogo}>
        <Link to='/introduction'>
          BloomBasket
        </Link>
      </div>
      <div className={classes.authContentWrapper}>
        <div className={classes.formTitle}>
          <h1>Create an account</h1>
          <span className={classes.dontHaveAccountWrapper}>
            <span>Already have an account?</span>
            <a href="#" onClick={changeForm}>Sign in</a> 
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputsContainer}>
            <div className={classes.nameInputContainer}>
              <label htmlFor="userName">Name</label>
              <input type="text" id="userName" required/>
            </div>
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

export default CreateAccountForm