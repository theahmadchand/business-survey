type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
};

export const Button = (props: ButtonProps) => {
  const { text, onClick, disabled, variant } = props;

  const primaryButtonStyle = `bg-green-500 hover:bg-green-600 text-white hover:text-white border-green-500 border hover:border-transparent`;
  const secondaryButtonStyle = `bg-gray-100 hover:bg-gray-200 text-black border-gray-300 border hover:border-transparent`;

  const varientStyle = variant === 'secondary' ? secondaryButtonStyle : primaryButtonStyle;
  const disabledStyle = disabled ? 'hidden' : '';

  return (
    <button
      className={`w-full font-semibold py-1 px-4 rounded ${varientStyle} ${disabledStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
