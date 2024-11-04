const CusBtn = ({
  px = "px-[24px]",
  py = "py-[10px]",
  text = "text-[18px]",
}) => {
  return (
    <button
      className={`bg-secondary ${px} ${py} ${text} text-info2 leading-6 font-bold uppercase`}
    >
      book a table
    </button>
  );
};

export default CusBtn;
