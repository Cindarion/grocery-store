import { Link } from 'react-router-dom';
import { useState } from 'react';
import ActionButton from '@/components/UI/buttons/ActionButton/ActionButton';
import classes from "./CreateAccountForm.module.css"
import hide_password_true from "@/data/icons/hide-password-true.png";

type CreateAccountFormProps = {
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
};

const CreateAccountForm = ({setIsToggled}: CreateAccountFormProps) => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmitEvent = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      //!!!dispatch action from hooks!!!
    }
    alert("please provide a valid input");
  };

  const handleInput = (e: React.SyntheticEvent) => {
    const { name, value }: any = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeForm = () => {
    setIsToggled(false)
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.companyLogo}>
        <Link to='/introduction'>BloomBasket</Link>
      </div>
      <div className={classes.authContentWrapper}>
        <div className={classes.formTitle}>
          <h1>Create an account</h1>
          <span className={classes.dontHaveAccountWrapper}>
            <span>Already have an account?</span>
            <a href="#" onClick={handleChangeForm}>
              Sign in
            </a> 
          </span>
        </div>
        <form onSubmit={handleSubmitEvent}>
          <div className={classes.inputsContainer}>
            <div className={classes.nameInputContainer}>
              <label htmlFor="userName">Name</label>
              <input 
                type="text" 
                id="userName" 
                onChange={handleInput}
                required
              />
            </div>
            <div className={classes.emailInputContainer}>
              <label htmlFor="userEmail">E-mail</label>
              <input 
                type="email" 
                id="userEmail" 
                aria-describedby="user-email"
                aria-invalid="false"
                onChange={handleInput}
                required
              />
            </div>
            <div className={classes.passwordInputContainer}>
              <label htmlFor="userPassword">Password</label>
              <span>
                <input 
                  type="password" 
                  id="userPassword" 
                  minLength={6} 
                  maxLength={54} 
                  aria-describedby="user-password"
                  aria-invalid="false"
                  onChange={handleInput}
                  required 
                />
                <div className={classes.hidePasswordWrapper}>
                  <img 
                    alt='hide-password'
                    className={classes.hidePasswordIcon} 
                    src={hide_password_true}
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