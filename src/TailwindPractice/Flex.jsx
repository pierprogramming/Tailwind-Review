const Flex = (props) => {
  const { flexStyle } = props;
  console.log(props);

  return (
    <div className={flexStyle}>
      <div className="size-16 bg-red-400"></div>
      <div className="size-16 bg-blue-400"></div>
      <div className="size-16 bg-yellow-400"></div>
    </div>
  );
};

export default Flex;
