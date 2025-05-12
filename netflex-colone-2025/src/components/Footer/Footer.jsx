import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'

function Footer() {
  return (
    <div className='footer_outer_container'>
<div className='footer_inner_container' >
<div className='footer_icons'>
<FacebookOutlinedIcon />
<InstagramIcon/>
<YouTubeIcon/>
</div>
<div className='footer_data'>
<div>
<ul>
<li>Audio Description</li>
<li>Investor Relation</li>
<li>Legal Notices</li>
</ul>
</div>
<div>
    <ul>
        <li>Help center</li>
        <li>Jobs</li>
        <li>cookies preferencese</li>
       </ul>
</div>
<div>
<ul>
<li>Gift cards</li>
<li>Terms of uses</li>
<li>corporate Information</li>
</ul>
</div>
<div>
<ul>
<li>Media center</li>
<li>Privacye</li>
<li>Contact use</li>
</ul>
</div>
</div>
<div className='service_code'      >
<p>
    service_code
</p>
</div>
<div className='copy-write'>
&copy; 1997-2024 netflix,inc
</div>
</div>
 </div>
  )
}
export default Footer