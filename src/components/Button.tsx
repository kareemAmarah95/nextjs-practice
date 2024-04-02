"use client";

interface IProps {
  text: string;
  // onClick: () => void;
}
const Button = ({ text }: IProps) => {
  return (
    <button
      onClick={() => {
        console.log("Clicked Me");
      }}
      className="my-2 p-2 rounded-md bg-indigo-500 text-white"
    >
      {text}
    </button>
  );
};

export default Button;
