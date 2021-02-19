import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";


const Navba = () =>{  
  const [isLoggedIn,setIsloggedIn] = useState(false)
  useEffect(()=>{
  const x = (JSON.parse(localStorage.getItem("user")));
  
  if(x){
   if(x.token && x._id)
   {
     setIsloggedIn(true)
   }
 }
  },[])
  const handleLOgout = (e)=>{
      e.preventDefault();
      localStorage.clear()
      window.location.reload()
      (alert("Logged out succesfully"))
    }
    return(
      <div>
      <section id="topbar" className="d-none d-lg-block">
      <div className="container d-flex">
        <div className="contact-info mr-auto">
          <i className="icofont-envelope"></i><a href="mailto:principal_svuce2003@yahoo.co.in">principal_svuce2003@yahoo.co.in</a>
          <i className="icofont-phone"></i> +91-877-2289561
        </div>
        
      </div>
    </section>
    <header id="header">
  <div className="container d-flex">

    <div className="logo mr-auto">
       <h1 className="text-light"><a href="/">SVUCE</a></h1>
     
    </div>

    <nav className="nav-menu d-none d-lg-block">
      <ul>
        <li><a href="/">Home</a></li>
       
        {/* <li className="drop-down"><a href={window.location}>About</a>
          <ul>
            <li><a href="/principal">Principal</a></li>
            <li><a href="/vicepeincipal">Vice-Principal</a></li>
            <li className="drop-down"><a href={window.location}>Committees</a>
              <ul>
                <li><a href="/constituent_committees">Constituent Committees</a></li>
                <li><a href="/non_constituent_committees">Non-Constituent Committees</a></li>
              </ul>
            </li>
          </ul>
        </li> */}
        <li className="drop-down"><a href={window.location}>Academics</a>
          <ul>
            <li><a href="/courses_offered">Courses Offered</a></li>
            <li><a href="/linktopdf">Academic Calendar</a></li>
            <li className="drop-down"><a href="/academic_regulations">
            Academic Regulations</a>
              <ul>
                <li><a href="/btech_reg_file.pdf">B.Tech</a></li>
                <li><a href="/mtech_reg_file.pdf">M.Tech</a></li>
             
              </ul>
            </li>
            <li className="drop-down"><a href="/#">Syllabus</a>
              <ul>
                <li><a href="/btech_syllabus.pdf">B.Tech</a></li>
                <li><a href="/mtech_syllabus.pdf">M.Tech</a></li>
              </ul>
            </li>
            <li ><a href="/timetables.pdf">Time Tables</a>
              {/* <ul>
                <li><a href="/che_time_tables">Chemical Engineering</a></li>
                <li><a href="/ce_time_tables">Civil Engineering</a></li>
                <li><a href="/eee_time_tables">Electrical and Electronics Engineering</a></li>
                <li><a href="/ece_time_tables">Electronics and Communication Engineering</a></li>
                <li><a href="/me_time_tables">Mechanical Engineering</a></li>
                <li><a href="/cse_time_tables">Computer Science & Engineering</a></li>
              </ul> */}
            </li>  
          </ul>
        </li>
        <li className="drop-down"><a href={window.location}>Departments</a>
          <ul>
            <li><a href="/ChE">Chemical Engineering</a>
              <ul>
                {/* <li><a href="che_faculty">Faculty</a></li>
                <li><a href="che_students">Students</a></li>
                <li><a href="che_facilities">Facilities</a></li> */}
              </ul>
            </li>
            <li><a href="/CE">Civil Engineering</a>
              <ul>
                {/* <li><a href="ce_faculty">Faculty</a></li>
                <li><a href="ce_students">Students</a></li>
                <li><a href="ce_facilities">Facilities</a></li> */}
              </ul>
            </li>
            <li ><a href="/EEE">Electrical and Electronics Engineering</a>
            </li>
            <li ><a href="/ECE">Electronics and Communication Engineering</a>
               
            </li>
            <li ><a href="/ME">Mechanical Engineering</a>
             
            </li>
            <li><a href="/CSE" >Computer Science & Engineering</a>
             
            </li>   
          </ul>
        </li>
        {/* <li className="drop-down"><a href="examinations">Examinations</a>
          <ul>
            <li><a href="exam_notifications">Notifications</a></li>
            <li><a href="exam_results">Results</a></li>
            <li><a href="exam_applications">Applications</a></li>
            <li><a href="exam_halltickets">Hall Tickets</a></li>
          </ul>
        </li> */}

        <li className="drop-down"><a href={window.location}>Facilities</a>
          <ul>
            <li ><a href="/hostels">Hostels</a>
              {/* <ul>
                <li><a href="/mens_hostel">SVUCE Men's Hostels</a></li>
                <li><a href="/womens_hostel">SVU Women's Hostels</a></li>
              </ul> */}
            </li>
          
            <li><a href="/library">Library</a></li>
            <li><a href="/healthcenter">Health Centre</a></li>
            <li><a href="/nss_ncc">NSS / NCC</a></li>
            {/* <li><a href="/student_support_cell">Student Support Cell</a></li>
            <li><a href="/grievances_redressal_cell">Grievances Redressal Cell</a></li> */}
            <li><a href="/alumni">Alumni</a></li>
          </ul>
        </li> 
        <li><a href="/placements">Placements</a></li>
        <li ><a href="/TQ">TEQIP</a>
          {/* <ul>
            <li><a href="bog">BOG</a></li>
            <li><a href="nirf">NIRF</a></li>
            <li><a href="audit">Audit</a></li>
            <li><a href="eap">EAP</a></li>
          </ul> */}
        </li>
         <li><a href="/newsportal">News</a></li>
          <li><a href="/contact">Contact</a></li>
          {isLoggedIn ? (<li><Button onClick={handleLOgout} style={{marginTop:10,fontSize:15,padding:"6px 10px"}}>LOGOUT</Button></li>):(<> <li><a href="/login" >LOGIN</a></li></>)}
       
      </ul>
    </nav>
    </div>

 
    

  </header>
    </div>  
           
    )
}
export default Navba
