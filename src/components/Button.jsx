const Button = ({ style, children, onBtnColorChange }) => {
  const classes = "outline-none px-4 py-1 rounded-full shadow-xl text-white";
  return (
    <button className={classes} style={style} onClick={onBtnColorChange}>
      {children}
    </button>
  );
};

export default Button;
