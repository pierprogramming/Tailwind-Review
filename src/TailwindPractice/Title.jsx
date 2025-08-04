
const Title = (props) => {
  const { message, anotherMessage, children, divStyle } = props;
//   console.log(props);
  return (
    // in-line style - OUTDATE
    <div className={divStyle}> 
      <p>{message}</p>
      <p>{anotherMessage}</p>
      <p>{children}</p>
    </div>
  );
};

export default Title;
