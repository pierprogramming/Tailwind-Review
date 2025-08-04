const Button = (props) => {
  const { buttonStyle, text } = props;
  return <button className={buttonStyle}>{text}</button>;
};

export default Button;
