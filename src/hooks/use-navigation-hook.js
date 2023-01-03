import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigationHook() {
    return useContext(NavigationContext);
};

export default useNavigationHook;