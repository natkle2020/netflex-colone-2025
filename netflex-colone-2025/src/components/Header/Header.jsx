import React from 'react'
import "./Header.css"
//  import netflix from './Header.jsx'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import logo from "../../assets/image/B743480D-B87E-4E2B-97F9-C8E1D6F809C2_4_5005_c.jpeg"
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
<li>Brose by Languges</li>
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