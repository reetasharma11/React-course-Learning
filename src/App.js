import React,{useState} from 'react';



import classes from './App.module.css';

function App() {


  const [homepage, setHomePage]= useState(true);
  const [contactuspage, setContactusPage]= useState(false); 
  const [teampage, setTeamPage]= useState(false);
  const [careerpage, setCareerPage]= useState(false);
  
  function showHomePage(){

    setHomePage(true);
    setContactusPage(false);
    setTeamPage(false);
    setCareerPage(false);

  }


  function showContactusPage(){

    setHomePage(false);
    setContactusPage(true);
    setTeamPage(false);
    setCareerPage(false);

  }
  function showTeamPage(){

    setHomePage(false);
    setContactusPage(false);
    setTeamPage(true);
    setCareerPage(false);

  }


  function showCareerPage(){

    setHomePage(false);
    setContactusPage(false);
    setTeamPage(false);
    setCareerPage(true);

  }


  return (
    <div className={classes.app}>

      <div className={classes.header} >
        <div style={{borderStyle:'solid',color:"blue",marginLeft:"30px"}} 
             onClick={showHomePage}
             >
          Home
        </div>

        <div style={{borderStyle:'solid',color:'blue',marginLeft:"30px" }}
           onClick={showContactusPage}
        >
          Contact us

        </div>
	
        <div style={{borderStyle:'solid',color:"blue",marginLeft:"30px"}}
             onClick={showTeamPage}
             >  
        Team
        </div>
        <div style={{borderStyle:'solid',color:"blue",marginLeft:"30px"}}
             onClick={showCareerPage}
             >
        Career
        </div>

      </div>
    

      <div className={classes.body}>


        { homepage &&
        <div className={classes.home} style={{backgroundColor:"white",height:"100%"}} >
    
           This is home page  
         
        </div>

        }


        { contactuspage &&
        <div className={classes.contactus} style={{backgroundColor:"green",height:"100%"}} >
      
          This is contact us page.		
        </div>

        }
        
        { teampage &&
        <div className={classes.team} style={{backgroundColor:"yellow",height:"100%"}} >

          This is team page
        </div>

        }

	{ careerpage &&
        <div className={classes.career} style={{backgroundColor:"red",height:"100%"}}>

          This is career page
        </div>

        }

      </div>





    </div>
  );
}

export default App;
