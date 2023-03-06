import React from 'react'
import {Link} from "../components/Link"

export const Sidebar = () => {
    const links = [
        {label: "Dropdown", path: "/"},
        {label: "Accordion", path: "/accordion"},
        {label: "Buttons", path: "/buttons"},
        {label: "Modal", path: "/modal"},
        {label: "Table", path: "/table"},
    ]

    const renderedLinks = links.map((link) => {
        return (
            <Link 
                to={link.path} 
                key={link.label}
                className="mb-3"
                activiteClassName="font-bold border-l-4 border-blue-500 pl-2"
            >{link.label}</Link>
        )
    })

  return (
    <div className='sticky top-0 flex flex-col p-3 items-start'>
        {renderedLinks}
    </div>
  )
}
