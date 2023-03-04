import classNames from "classnames"
import { useNavigate } from "../hooks/use-navigation"


export const Link = ({children, to, className, activiteClassName}) => {
    const {navigate, currentPath} = useNavigate()

    const classes = classNames(
      "text-blue-500", 
      className,
      currentPath === to && activiteClassName
      )

    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey){
          return; 
        }

        event.preventDefault()

        navigate(to) 
    }

  return (
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  )
}

