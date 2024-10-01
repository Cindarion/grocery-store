import { useState } from 'react';
import classes from './LoginPage.module.css'

// Components
import AuthForm from 'src/components/UI/AuthForm/AuthForm';
import CreateAccountForm from 'src/components/UI/CreateAccountForm/CreateAccountForm'
import NewsPreview from 'src/components/UI/NewsPreview/NewsPreview';

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState("auth");
  
  const renderAuthForm = () => {
    return (
      <AuthForm
        setCurrentForm = {setCurrentForm}
      />
    )
  };

  const renderCreateAccountForm = () => {
    return (
      <CreateAccountForm 
        setCurrentForm = {setCurrentForm}
      />
    )
  };
 
  const renderNewsPreview = () => {
    return (
      <NewsPreview />
    )
  };

  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentWrapper}>
        <div className={classes.formWrapper}>
          {currentForm === "auth" ? renderAuthForm() : renderCreateAccountForm()}
        </div>
        <div className={classes.newsPreviewWrapper}>
          {renderNewsPreview()}
        </div>  
      </div>
    </div>
  );
};

export default LoginPage