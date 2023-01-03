import useNavigationHook from "../hooks/use-navigation-hook";

function Route({ path, children }) {
  const { currentPath } = useNavigationHook();

  if (path === currentPath) return children;

  return null;
};

export default Route;