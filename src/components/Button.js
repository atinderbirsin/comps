import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const backgroundColor = `${
    primary
      ? "bg-blue-500 border-blue-500"
      : "" || secondary
      ? "bg-gray-900 border-gray-900"
      : "" || success
      ? "bg-green-500 border-green-500"
      : "" || warning
      ? "bg-yellow-500 border-yellow-500"
      : "" || danger
      ? "bg-red-500 border-red-500"
      : ""
  }`;
  const roundedClass = `${rounded ? "rounded-full" : ""}`;

  const outlineClass = `${
    (outline && primary ? "bg-white text-blue-500 " : "") ||
    (outline && secondary ? "bg-white text-gray-900" : "") ||
    (outline && success ? "bg-white text-green-500" : "") ||
    (outline && warning ? "bg-white text-yellow-500" : "") ||
    (outline && danger ? "bg-white text-red-500" : "")
  }`;

  const classes = `flex items-center gap-1 px-3 py-1.5 text-white ${backgroundColor} border ${roundedClass} ${outlineClass} ${rest.className}`;

  return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error(
        "Only one of primary, secondary , success, warning, danger can be true"
      );
    }
  },
};

export default Button;
