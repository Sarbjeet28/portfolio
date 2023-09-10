import React from 'react'

export default function NavBarLinks(props) {
  return (
    <li>
        <a href={props.href} className={props.active ? "active" : ""} onClick={props.onClick}>{props.label}</a>
    </li>
  )
}
