import "../sidebar/sidebar.css"
import logo from "../../../assets/Logo.png"
import { useState } from "react"
function Sidebar({changePage,activePage}){   
    return(
        <div>
        <div className="sidenav">
            <img src={logo}/>
            <ul>
                <li onClick={()=>{
                    changePage("overview")
                }}>Overview</li>
                <li  onClick={()=>{
                    changePage("customers")
                }}>Customers</li>
                <li  onClick={()=>{
                    changePage("sellers")
                }} >Sellers</li>
                <li  onClick={()=>{
                    changePage("settings")
                }}>Settings</li>
                <li onClick={()=>{
                    changePage("account")}} >Account</li>
            </ul>
        </div>
        </div>

    )
}
export default Sidebar