import { Outlet } from "react-router-dom"
import '../../../App.css'
import { Box, Stack} from '@mui/material';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Rightbar from "../Rightbar/Rightbar";

const BuyerLayout = () => {
  return (
    <Box width="100%">
    <Stack direction="row" justifyContent="space-between">
         <Sidebar/>
         <div className="container">
              <Navbar/>  
               <Outlet/> 
         </div>
         <Rightbar/>
    </Stack>
</Box>
  )
}

export default BuyerLayout