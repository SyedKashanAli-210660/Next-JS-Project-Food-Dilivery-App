'use client'
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DeliveryHeader = (props) => {
  
      const [details, setDetails] = useState();
      const router = useRouter();
      const pathName = usePathname();
    
      useEffect(() => {
        let data = localStorage.getItem("delivery")
        if (!data && pathName == "/deliverydashboard"){
          router.push("/deliverypartner")
        } else if
          (data && pathName == "/deliverypartner") {
            router.push("/deliverydashboard");
        }
        else {
          setDetails(JSON.parse(data))
        }
      },[]
      )

  const logout=()=>{
    localStorage.removeItem("delivery")
    router.push("/deliverypartner")
  }
    return (
        <div className="header-wrapper">
            <div className="logo">
            <img style={{ width: 100 }} src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-gigih-rudya-designcrowd.png" />
            </div>
            <ul>
        {
          details ?
            <>
              <li><button onClick={logout}>Logout</button></li>
            </> :
            <>
            <li><Link href="/">Home</Link></li>
            </>
        }
      </ul>
          </div>
    )
}
export default DeliveryHeader;