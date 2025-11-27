import { Box, List, ListItem} from '@mui/material'
import {useState} from "react"
import { SidebarData } from './Data/SidebarData'
import { motion } from "framer-motion";
import logo from "../../../assets/Group 33690.png"
import {Link} from "react-router-dom"
import logout from "../../../assets/logout.png"
import logoutStyle from "./index.module.css"
import {MenuRounded} from '@mui/icons-material';
import style from "./index.module.css"

// Sidebar

const Sidebar = () => {
   const [selected, setSelected] = useState(0);
   const [expanded, setExpaned] = useState(true)
   

   const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-200%'
    }
  }
 
  
  return (
    <Box 
         className={style.sidebar_container}
         boxShadow={1} 
         >
         <Box className={style.bars}
          style={expanded?{left: '90%'}:{left: '90%'}} onClick={()=>setExpaned(!expanded)}
          >  
            <MenuRounded sx={{fontSize: "35px", backgroundColor: 'red'}}/>
         </Box>
         <motion.div className={style.sidebar}
              variants={sidebarVariants}
              animate={window.innerWidth<=968?`${expanded}`:''}
         >
               <Box sx={{ width: "100%"}}>
                   <div style={{marginTop: "20px", marginBottom: "65px", marginLeft: "30px"}}>
                       <img src={logo} alt={logo} />
                   </div>
                      {SidebarData.map((item, index) => {
                        return (
                                 <List sx={{width: "100%"}} key={item.id}>
                                      <ListItem disablePadding sx={{width: "100%"}}>
                                           <div
                                                className={selected === index ? `${style.menuItem} ${style.active}`: `${style.menuItem}`}
                                                key={index}
                                                onClick={() => setSelected(index)}
                                           >
                                           <Link to={item.path}>
                                               <div  className={selected === index ? `${style.test} ${style.active}`: `${style.test}`} onClick={()=>setExpaned(false)}>
                                                   
                                                   <img src={item.icon}  alt={item.icon} />
                                                   <span> {item.heading}</span>
                                               </div >
                                           </Link>
                                          </div>
                                 </ListItem>
                              </List>
                       );
                       })}
          
          <List>
               <ListItem disablePadding sx={{width: "100%"}}>
      
              <div className='menuItem'>
                   <div className={logoutStyle.logout} >
                       <img src={logout} alt={logout} />
                       <span>Logout</span>
                   </div>
             </div>
             </ListItem>
          </List>   
    </Box>
    </motion.div>
    </Box>
  )
}

export default Sidebar