import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
<header>
  <div>
    <NavLink to="/"> MohdAmer</NavLink>
    <ul>
      <li> <NavLink to="/">Home</NavLink></li>
      <li> <NavLink to="/trad">FetchOld</NavLink></li>
      <li> <NavLink to="/rq">fetchRQ</NavLink></li>
    </ul>
  </div>
</header>  )
}
