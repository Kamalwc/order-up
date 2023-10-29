import React, {useState} from "react";
import { Link } from "react-router-dom"
import "./LandingPage.css"
import {Button} from "@mui/material";

function LandingPage (props) {

    const [primaryColor, setPrimaryColor] = useState('cornsilk')
    const [secondaryColor, setSecondaryColor] = useState('brown')
    const [tertiaryColor, setTertiaryColor] = useState('black')
    const [fontColor, setFontColor] = useState('black')

    const handlePrimaryColorChange = (e) =>{
        setPrimaryColor(e.target.value)
    }

    const handleSecondaryColorChange = (e) =>{
        setSecondaryColor(e.target.value)
    }

    const handleTertiaryColorChange = (e) =>{
        setTertiaryColor(e.target.value)
    }

    const handleFontColorChange = (e) =>{
        setFontColor(e.target.value)
    }

    return (
        <div className={'landing-background'} style={{backgroundColor: `${primaryColor}`}}>
            <div>

                <div style={{display:"flex"}}>
                    <div>
                        Background Color
                    </div>
                    <input type={"text"} name={'backgroundColor'} onChange={handlePrimaryColorChange}/>
                </div>

                <div style={{display:"flex"}}>
                    <div>
                        Button Color
                    </div>
                    <input type={"text"} name={'cardColor'} onChange={handleSecondaryColorChange}/>
                </div>

                <div style={{display:"flex"}}>
                    <div>
                        Font Color
                    </div>
                    <input type={"radio"} name={'fontColor'} onChange={handleFontColorChange} value={"black"}/>
                    <input type={"radio"} name={'fontColor'} onChange={handleFontColorChange} value={"white"}/>
                </div>

            </div>

            <div className={"content-container"} style={{color: `${fontColor}`}}>

                <p className={'header-text'}  >Dina's Kitchen</p>

                <div className={'landing-text-container'} >

                    <div className={"landing-text-primary"} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>

                    <div className={"landing-text-secondary"} >
                        Lorem ipsum dolor sit amet.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </div>

                </div>


                <div className={'menu-btn-container'}>

                    <Link to={"/menu"}>

                        <button className={"menu-btn"} style={{backgroundColor: `${secondaryColor}`}}>
                            View menu
                        </button>

                    </Link>

                </div>

            </div>

        </div>
    )
}

export default LandingPage;