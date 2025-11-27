import { createRoutesFromElements, createBrowserRouter, Route} from "react-router-dom";
import BuyerLayout from "./Buyer-Dashboard/BuyerLayout";
import Product from "./Product/Product";
import SingleItem from "./SingleItem/SingleItem";
import Distribution from "./Distribution/Distribution";
import SaveProducts from "./SaveProducts/SaveProducts";
import Collections from "./Collections/Collections";
import Wallet from "./Wallet/Wallet";
import SimilarProduct from "./SimilarProduct/SimilarProduct";
import LandingPage from "../../Layout/Landing_Page/LandingPage";
import Parent from "../Main/Components/Parent/Parent";
import Login from "../Auth/Login/Login";
import SignUp from "../../Pages/Auth/SignUp/SignUp";

export const router =  createBrowserRouter(
    createRoutesFromElements(
        <Route>
           <Route path="/" element={<LandingPage/>}>
          
           <Route path="/" element={ <Parent/>}/>
           <Route path="/login" element={ <Login/>}/>
           <Route path="/signup" element={ <SignUp/>}/>
        </Route>
      <Route path="/dash" element={<BuyerLayout/>}>
          <Route path="product" element={<Product/>}/>
          <Route path="stock" element={<SingleItem/>}/>
          <Route path="distribution" element={<Distribution/>}/>
          <Route path="save" element={<SaveProducts/>}/>
          <Route path="collection" element={<Collections/>}/>
          <Route path="wallet" element={<Wallet/>}/>
          <Route path="similar-product" element={<SimilarProduct/>}/>
          <Route path="dash/single-item" element={<SingleItem/>}/>   
      </Route>
       
        </Route>
    )
  );