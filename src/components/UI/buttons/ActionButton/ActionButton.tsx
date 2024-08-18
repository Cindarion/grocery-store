import classes from './ActionButton.module.css'

type actionButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};
const ActionButton = ({onClick, children}:actionButtonProps) => {
  const buttonColor = children === "-" ? classes.ActionButton_darker : classes.ActionButton;

  return (
    <button 
      onClick={onClick} 
      className={buttonColor}
    >
      {children}
    </button>
  )
}

export default ActionButton