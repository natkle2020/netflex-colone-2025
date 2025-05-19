import React from 'react'
import "./Header.css"
//  import netflix from './Header.jsx'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import logo from "../../assets/image/FF1B70F8-B4DF-4488-8A06-2109259276E6.png"
function Header() {
  return (
<div className='header_outer_container'>
<div className='header_container'  >
<div className='header_left'>
<ul>
<li><img src={logo} alt="Log-on"/></li>
<li>Netflix</li>
<li>Home</li>
<li>TVshows</li>
<li>Moviest</li>
<li>Latest</li>
<li>MyList</li>
<li>Browse by Languages</li>
</ul>
<div className='header_right'>
<ul>
    <li><SearchRoundedIcon/></li>   
      <li><NotificationsNoneRoundedIcon/></li>
      <li><AccountBoxRoundedIcon/></li> 
      <li><ArrowDropDownRoundedIcon/></li> 
</ul>
</div>
</div>
</div>
 </div>
  )
}
export default Header