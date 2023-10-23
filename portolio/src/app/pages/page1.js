"use client"

import React, {useState, Component, useEffect, Suspense} from 'react'
import { Menu, MenuMenu,Grid,
  GridColumn,GridRow,
  Icon,
  Container, 
  Segment, 
  Rail} from 'semantic-ui-react'
   import ego from '../navbars/topnavz.module.css'


   export const metadata = {
    title: 'ENAGY PORTFOLIv',
    description: 'portfolio website',
  }

const Ipage = ()=>{

  const [witf, setwitf] = useState()


  useEffect(()=>{
    const mq = window.matchMedia( "(max-width: 500px)" );
    setwitf(mq.matches)
  console.log(mq.matches)
  console.log(mq.media)
  
  
  },[])


    return (
      <>
      <Segment basic className={ego.pag1} style={ witf ? {display:"none"} : null}>
        <Grid  style={{marginTop:"50px"}} >
      <Grid.Column floated='left' width={5} className={ego.pag2} style={{marginLeft:"10rem"}}>
       <Segment padded basic style={{padding:0}}
          className='animate-fadeInRight
           font-bold px-200 
          text-3xl font-medium leading-tight'>
        <div>
        <h1> Hello, </h1>
        <h1 className="mb-4  pb-4
         text-5xl leading-tight" style={{color:"darkblue"}}>I'm ENAGY</h1>

         <Segment basic  >
          <div className="mb-4 pb-4 font-bold text-3xl leading-tight" style={{color:"#646974"}}>
        a passionate web developer with expertise in React and Next.js
         & ethical hacker dedicated to
         crafting exceptional digital experiences.<br/>
         <h3 className="text-3xl font-bold leading-tight"
         style={{color:"darkblue"}}>
          I thrive on turning ideas into stunning, 
          functional websites that leave a lasting impact.
          </h3>
          </div>
              </Segment>
        </div>
       </Segment>
      </Grid.Column>

      <Grid.Column floated='right' width={7}  style={{marginRight:"4rem"}} className={ego.pagi2}>
        <Segment basic className="fadeInRight">
      <Segment basic className='animate-wiggle'>
      <h1 style={{width:'520px', height:'490px', paddingBottom:'500px',   position:'relative'}} className={ego.dimage}>
<iframe src="https://giphy.com/embed/W3UKOgmwRJHx7x8Azk" width="100%" height="100%"
 style={{position:"absolute", frameBorder:"0", class:"giphy-embed"}} allowFullScreen className={ego.dimage}></iframe>
</h1>
</Segment>
</Segment>
      </Grid.Column>

       <Segment className={ego.serv} basic style={ {marginLeft:"40rem", 
       fontSize:"4rem", fontFamily:"oppins,sans-serif",
        fontWeight:"bolder", color:"#646974", textDecoration:"underline"}}
       >my services</Segment>

    

      </Grid>
      </Segment>

      {witf ? 
      <Grid  style={{width: '44%',
    textAlign: 'center',
    marginTop: '1.5rem'}}>
        <GridRow>
      <Grid.Column>
      <Segment padded basic style={{padding:0}}
          className='animate-fadeInRight
           font-bold px-200 
          text-3xl font-medium leading-tight'>
        <div>
        <h1> Hello, </h1>
        <h1 className="mb-4  pb-4
         text-5xl leading-tight" style={{color:"darkblue"}}>I'm ENAGY</h1>

         <Segment basic  >
          <div className="mb-4 pb-4 font-bold text-3xl leading-tight" style={{color:"#646974"}}>
        a passionate web developer with expertise in React and Next.js
         & ethical hacker dedicated to
         crafting exceptional digital experiences.<br/>
         <h3 className="text-3xl font-bold leading-tight"
         style={{color:"darkblue"}}>
          I thrive on turning ideas into stunning, 
          functional websites that leave a lasting impact.
          </h3>
          </div>
              </Segment>
        </div>
       </Segment>
      </Grid.Column>
      </GridRow>
      <Grid.Row>
      <Grid.Column>
      <Segment basic className="fadeInRight">
      <Segment basic className='animate-wiggle'>
      <h1 style={{width:'420px', height:'390px', paddingBottom:'200px',   position:'relative'}} className={ego.dimage}>
<iframe src="https://giphy.com/embed/W3UKOgmwRJHx7x8Azk" width="100%" height="100%"
 style={{position:"absolute", frameBorder:"0", class:"giphy-embed"}} allowFullScreen className={ego.dimage}></iframe>
</h1>
</Segment>
</Segment>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    :null}
     <Segment className={ego.serv} basic style={ {marginLeft:"40rem", 
       fontSize:"4rem", fontFamily:"oppins,sans-serif",
        fontWeight:"bolder", color:"#646974", textDecoration:"underline"}}
       >my services</Segment>
      </>
    )
}
export default Ipage