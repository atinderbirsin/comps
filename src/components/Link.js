import useNavigationHook from "../hooks/use-navigation-hook";

function Link({ to, children, ...rest }) {
    const { navigate } = useNavigationHook();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to} {...rest}>
      {children}
    </a>
  );
}

export default Link;
