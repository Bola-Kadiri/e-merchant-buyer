
import dashboard_icon from "../../../../assets/dashboard.png"
import distribution from "../../../../assets/distribution.png"
import save from "../../../../assets/save.png"
import collection from "../../../../assets/collection.png"
import wallet from "../../../../assets/wallet.png"
import profile from "../../../../assets/profile.png"
import contact from "../../../../assets/contact.png"

 //  Sidebar data
type Data={
  id: number;
  icon: string,
  heading: string;
  path: string;
}[]

  export const SidebarData: Data= [
    {


      id: 1,
      icon: dashboard_icon,
      heading: "Dashboard",
      path: "/dash/product"
    },
    {
      id: 2,
      icon:  distribution ,
      heading: "Distributions",
      path: "/dash/distribution"
    },
    {
      id: 3,
      icon: save,
      heading: "Saved Items",
      path: "/dash/save"
    },
    {
      id: 4,
      icon: collection,
      heading: 'Collection',
      path: "/dash/collection"
    },
    {
      id: 5,
        icon: wallet,
        heading: 'Wallet',
        path: "/dash/wallet"
      },
      {
        id: 6,
          icon: profile,
          heading: 'Edit Profile',
          path: "/dash/edit"
        },
    {
      id: 7,
      icon: contact,
      heading: 'Contact Support',
      path: "/support"
    },
  ];
  
  
  
  