import AuthForm from 'src/components/UI/AuthForm/AuthForm';
import classes from './LoginPage.module.css'

// Components
import NewsPreview from 'src/components/UI/NewsPreview/NewsPreview';

const LoginPage = () => {
  const renderAuthForm = () => {
    return (
      <AuthForm/>
    )
  }

  const renderNewsPreview = () => {
    return (
      <NewsPreview/>
    )
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.contentWrapper}>
        <div className={classes.formWrapper}>
          {renderAuthForm()}
        </div>
        <div className={classes.newsPreviewWrapper}>
          {renderNewsPreview()}
        </div>  
      </div>
    </div>
  );
};

export default LoginPage