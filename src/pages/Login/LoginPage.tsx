import { useState } from 'react';
import classes from './LoginPage.module.css'

// Components
import AuthForm from '@/components/UI/AuthForm/AuthForm';
import CreateAccountForm from '@/components/UI/CreateAccountForm/CreateAccountForm'
import NewsPreview from '@/components/UI/NewsPreview/NewsPreview';

const LoginPage = () => {
  const [isToggled, setIsToggled] = useState(false);

  const renderForm = () => {
    if (isToggled) {
      return (
        <div className={`${classes.formWrapper} ${classes.formWrapperActive}`} key={classes.formWrapperActive} >
          <CreateAccountForm 
            setIsToggled={setIsToggled}
          />
        </div> 
      )
    } else {
      return (
        <div className={classes.formWrapper}>
          <AuthForm 
            setIsToggled={setIsToggled}
          />
        </div> 
      )
    }
  };
 
  const renderNewsPreview = () => {
    if (isToggled) {
      return (
        <div className={`${classes.newsPreviewWrapper} ${classes.newsPreviewWrapperActive}`}>
          <NewsPreview />
        </div> 
      )
    } else {
      return (
        <div className={classes.newsPreviewWrapper}>
          <NewsPreview />
        </div>
      );
    }
  };

  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentWrapper}>
        {renderForm()}
        {renderNewsPreview()}
      </div>
    </div>
  );
};

export default LoginPage