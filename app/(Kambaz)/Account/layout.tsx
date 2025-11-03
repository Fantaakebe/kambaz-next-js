import { ReactNode } from "react";
import Link from "next/link";
import AccountNavigation from "./Navigation";
export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
   <div id="wd-kambaz">
     <table>
       <tbody>
         <tr>
           <td valign="top">
           <div style={{ marginBottom: 8 }}>
                <Link href="/" id="wd-kambaz-home-link">Kambaz</Link>
              </div>
             <AccountNavigation />
           </td>
           <td valign="top" width="100%">
             {children}
           </td>
         </tr>
       </tbody>
     </table>
  </div>
);}

