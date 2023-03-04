import { useContext } from "react";
import NavigationContext from "../context/navigation"

export const useNavigate = () => {
    return useContext(NavigationContext)
}
