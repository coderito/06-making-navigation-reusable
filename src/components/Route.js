import { useNavigate } from "../hooks/use-navigation"

export const Route = ({path, children}) => {
    const {currentPath} = useNavigate()

    if(path === currentPath){
        return children
    }

    return null
}
