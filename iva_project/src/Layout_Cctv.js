import React from 'react';
import Cctv from './Components/Cctv/Cctv';
import 'bootstrap/dist/css/bootstrap.css'
import './Layout_Cctv.css'
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';



var LayoutCctv = (props) =>{

    return(
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%" }}>
            <Navbar />
            <div className='rowC'>
                <div className='SidebarPosition'>
                    <Sidebar/>
                </div>
                <div className='CameraPosition'>
                    <Cctv photoURL = {props.imageURL}/>
                </div>
                
            </div>
        </div>
        
        );}

export default LayoutCctv

