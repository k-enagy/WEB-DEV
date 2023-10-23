"use client"

import React, {useState, Component, useEffect, Suspense} from 'react'
import { Menu, MenuMenu,Grid,
  GridColumn,GridRow,
  Icon,
  Container, 
  Segment, 
  Rail} from 'semantic-ui-react'
   import ego from '../navbars/topnavz.module.css'




  const Pag2i =()=> {

    const mq = window.matchMedia( "(max-width: 500px)" );
  const hoja = mq.matches

    return (
     <>
      <Grid className={ego.gdi} id='serv' style={hoja ? {display:"none"}: null}>
  <Grid.Row className='animate-fadeDown'>   
<Grid.Column width={6} floated='left' style={{paddingBottom:"3rem",marginLeft:"4rem"}} >
  <Segment raised>
<Segment floated='right' basic compact style={{fontSize:"2rem",
fontFamily:"Trebuchet MS", fontWeight:"bold", color:"#1d1d52d4"}} className={ego.servi}> 
WEB DEVELOPMENT</Segment> 
<Segment compact raised ><Icon name='code' color='blue' size='big'/></Segment>
   <div style={{paddingTop:"2rem", fontWeight:"bolder",fontSize:"1.3rem",
   fontFamily:"oppins,sans-serif"
   ,color:"#08082bf0"}}>
    I am not just a web developer I am a problem solver, 
    an architect of digital dreams,
     and a partner in achieving your web development goals.
     If you're looking for a web developer
      who can turn your vision into reality,
      I am here and ready to collaborate with you.
  </div>
  </Segment>
</Grid.Column>

<Grid.Column width={6} floated='right' style={{marginRight:"4rem"}}>
  
  <Segment basic>
<Segment floated='right' basic compact style={{fontSize:"2rem",
fontFamily:"Trebuchet MS", fontWeight:"bold", color:"#1d1d52d4"}} className={ego.servi}> 
ETHICAL HACKING</Segment> 
<Segment compact raised><Icon name='detective' color='brown' size='big'/></Segment>
   <div style={{paddingTop:"2rem", fontWeight:"bolder",fontSize:"1.3rem",color:"#08082bf0"}}>
   my journey as an ethical hacker is marked by a relentless pursuit of security excellence and
    a commitment to safeguarding the digital world from malicious threats.
     I am not just an ethical hacker;
      I am your ally in the ongoing battle against cybercriminals.

  </div>
  </Segment>
</Grid.Column>
</Grid.Row>



  
     
    <Grid.Row   className='animate-fadeUp'>
     <Grid.Column className={ego.colu} 
      width={6} floated='left' style={{marginLeft:"4rem"}}>
      
     <Segment basic className={ego.col2}>
     <Segment floated='right' basic compact style={{fontSize:"2rem",
    fontFamily:"Trebuchet MS", fontWeight:"bold", color:"#1d1d52d4"}} className={ego.serv2}> GRAPIC DESIGN
    </Segment> 
    <Segment compact raised ><Icon name='gg' color='green' size='big'/></Segment>
         <div style={{paddingTop:"2rem", fontWeight:"bolder",fontSize:"1.3rem",color:"#08082bf0"}}>
         I am a visual storyteller, a brand enhancer, 
         and a creative partner dedicated to bringing your ideas to life.
If you are seeking a graphic designer 
who can transform your vision into captivating visuals,
 I am here to collaborate with you. 
 Let's embark on a creative journey together, 
 where imagination knows no bounds.
        </div>
        </Segment>

      </Grid.Column>
      
      <Grid.Column className={ego.colu} width={6}  floated='right' style={{marginRight:"4rem"}}>
      <Segment raised className={ego.col2}>
    <Segment floated='right' basic compact style={{fontSize:"2rem",
    fontFamily:"Trebuchet MS", fontWeight:"bold", color:"#1d1d52d4"}} className={ego.porti4}> BACKEND ENGINEER
    </Segment> 
    <Segment compact raised ><Icon name='configure' color='grey' size='big'/></Segment>
         <div style={{paddingTop:"2rem", fontWeight:"bolder",fontSize:"1.3rem",color:"#08082bf0"}}>
         If you are seeking a backend engineer who can power your digital initiatives with efficiency and scalability
         , I am here and ready to collaborate with you.
          Let's embark on a journey of digital transformation together,
           where challenges are opportunities for innovation.
        </div>
        </Segment>

      </Grid.Column>
      </Grid.Row>
      
     </Grid>

      
   <Grid style={{width:"44%"}}>
    <Grid.Row>
      <Grid.Column>
      <Segment raised>
<Segment floated='right' basic compact style={{fontSize:"2rem",
fontFamily:"Trebuchet MS", fontWeight:"bold", color:"#1d1d52d4"}} className={ego.servi}> 
WEB DEVELOPMENT</Segment> 
<Segment compact raised ><Icon name='code' color='blue' size='big'/></Segment>
   <div style={{paddingTop:"2rem", fontWeight:"bolder",fontSize:"1.3rem",
   fontFamily:"oppins,sans-serif"
   ,color:"#08082bf0"}}>
    I am not just a web developer I am a problem solver, 
    an architect of digital dreams,
     and a partner in achieving your web development goals.
     If you're looking for a web developer
      who can turn your vision into reality,
      I am here and ready to collaborate with you.
  </div>
  </Segment>
   
  <Segment basic>
<Segment floated='right' basic compact style={{fontSize:"2rem",
fontFamily:"Trebuchet MS", fontWeight:"bold", color:"#1d1d52d4"}} className={ego.servi}> 
ETHICAL HACKING</Segment> 
<Segment compact raised><Icon name='detective' color='brown' size='big'/></Segment>
   <div style={{paddingTop:"2rem", fontWeight:"bolder",fontSize:"1.3rem",color:"#08082bf0"}}>
   my journey as an ethical hacker is marked by a relentless pursuit of security excellence and
    a commitment to safeguarding the digital world from malicious threats.
     I am not just an ethical hacker;
      I am your ally in the ongoing battle against cybercriminals.

  </div>
  </Segment>

  <Segment basic className={ego.col2}>
     <Segment floated='right' basic compact style={{fontSize:"2rem",
    fontFamily:"Trebuchet MS", fontWeight:"bold", color:"#1d1d52d4"}} className={ego.serv2}> GRAPIC DESIGN
    </Segment> 
    <Segment compact raised ><Icon name='gg' color='green' size='big'/></Segment>
         <div style={{paddingTop:"2rem", fontWeight:"bolder",fontSize:"1.3rem",color:"#08082bf0"}}>
         I am a visual storyteller, a brand enhancer, 
         and a creative partner dedicated to bringing your ideas to life.
If you are seeking a graphic designer 
who can transform your vision into captivating visuals,
 I am here to collaborate with you. 
 Let's embark on a creative journey together, 
 where imagination knows no bounds.
        </div>
        </Segment>

        <Segment raised className={ego.col2}>
    <Segment floated='right' basic compact style={{fontSize:"2rem",
    fontFamily:"Trebuchet MS", fontWeight:"bold", color:"#1d1d52d4"}} className={ego.porti4}> BACKEND ENGINEER
    </Segment> 
    <Segment compact raised ><Icon name='configure' color='grey' size='big'/></Segment>
         <div style={{paddingTop:"2rem", fontWeight:"bolder",fontSize:"1.3rem",color:"#08082bf0"}}>
         If you are seeking a backend engineer who can power your digital initiatives with efficiency and scalability
         , I am here and ready to collaborate with you.
          Let's embark on a journey of digital transformation together,
           where challenges are opportunities for innovation.
        </div>
        </Segment>

      </Grid.Column>
    </Grid.Row>
   </Grid>

  </>
    )
  }
export default Pag2i    
