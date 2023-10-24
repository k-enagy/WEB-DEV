"use client"

import Link from 'next/link';
import React, {useState} from 'react'
import {
  Container, 
  Icon, 
  Segment, 
  } from 'semantic-ui-react'

  export const metadata = {
    title: 'ENAGY PORTFOLIv',
    description: 'portfolio website',
  }
  import ego from '../navbars/topnavz.module.css'


  const currentDate = new Date();
  const theyear =  currentDate.getFullYear()
  console.log(currentDate.toString())
    

  const Lpage = ()=> {
  
    function mail () {
        window.open('mailto:uchekojo@gmail.com?subject=Contract email')
    }


     return (
        
        <>
        <Segment id="ol" basic  style={{height:"54%"}} className={ego.hold}>
      <Segment basic textAlign='center' style={{margin:"10rem 10rem 0 12rem", backgroundColor:"#91a4a361",
       paddingBottom:"3rem",
        borderRadius:"10px"} } className={ego.con}>
        <div style={{ fontWeight:"bolder",fontSize:"2rem",color:"#5c5c75f0", fontFamily:"verdana"}}>
            contact me
        </div>
        <h1  style={{ fontWeight:"bolder",fontSize:"2rem",
        color:"#08082bf0"
        ,fontFamily:"Trebuchet MS",
         padding:"2.5rem"}} className={ego.hold3}>
         Lets discuss your idea and bring it into life through technology !
        </h1>

       <Link href='#'><Segment onClick={mail}   basic className='pointer-cursor' ><Icon name='mail' size='massive' color='grey'></Icon>
           <span   style={{ fontWeight:"bolder",fontFamily:"Trebuchet MS"
         ,fontSize:"3rem"
         ,color:"#08082bf0", padding:"2rem"}} className={ego.hold1}>
            uchekojo@gmail.com
            </span>
            </Segment>
            </Link> 

      </Segment>
        <Segment basic textAlign='center' className={ego.last}>&copy; {theyear} enagy.inc.  All rights reserved.</Segment>
        </Segment>
        </>
     )
  }
  export default Lpage
