
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


 interface Register{
  email: string,
  password: string,
  comfirmpassword?: string,
  phoneNumber?: string,
  firstName: string,
  lastName: string
  }

 
 

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({  baseUrl: 'https://fashionhub-6b095e9e993d.herokuapp.com/'}),
  endpoints: builder => ({
    register: builder.mutation({
      query: (body:Register)=>{
        return{
          url:"api/Auth/SignUp",
          method: "post",
          body,
        }
      } 
    })
  })
})





export const {useRegisterMutation} = apiSlice

