import React, {useEffect, useState} from 'react'
import {Section} from './Section';
import "./Menu.css"
import {menuItems} from '../data/menuItems'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Menu = (props) =>{

    const [primaryColor, setPrimaryColor] = useState('cornsilk')
    const [secondaryColor, setSecondaryColor] = useState('white')
    const [tertiaryColor, setTertiaryColor] = useState('black')
    const [primaryFontColor, setPrimaryFontColor] = useState('black')
    const [secondaryFontColor, setSecondaryFontColor] = useState('white')

    const handlePrimaryColorChange = (e) =>{
        setPrimaryColor(e.target.value)
    }

    const handleSecondaryColorChange = (e) =>{
        setSecondaryColor(e.target.value)
    }

    const handleTertiaryColorChange = (e) =>{
        setTertiaryColor(e.target.value)
    }

    const handlePrimaryFontColorChange = (e) =>{
        setPrimaryFontColor(e.target.value)
    }

    const handleSecondaryFontColorChange = (e) =>{
        setSecondaryFontColor(e.target.value)
    }

    return(

        <div
            // className={'card'}
            style={{backgroundColor: `${primaryColor}`}}
        >

            {
                <>
                    <div className={'logo-container'} style={{backgroundColor: `${tertiaryColor}`}}>
                        <p className={'header-text'}  style={{color: `${secondaryFontColor}`}}>Dina's Kitchen</p>
                    </div>

                    <div>

                        <div style={{display:"flex"}}>
                            <div>
                                Background Color
                            </div>
                            <input type={"text"} name={'backgroundColor'} onChange={handlePrimaryColorChange}/>
                        </div>

                        <div style={{display:"flex"}}>
                            <div>
                                Card Color
                            </div>
                            <input type={"text"} name={'cardColor'} onChange={handleSecondaryColorChange}/>
                        </div>

                        <div style={{display:"flex"}}>
                            <div>
                                Banner Color
                            </div>
                            <input type={"text"} name={'cardColor'} onChange={handleTertiaryColorChange}/>
                        </div>

                        <div style={{display:"flex"}}>
                            <div>
                                Meni Item Font Color
                            </div>
                            <input type={"radio"} name={'fontColor'} onChange={handlePrimaryFontColorChange} value={"black"}/>
                            <input type={"radio"} name={'fontColor'} onChange={handlePrimaryFontColorChange} value={"white"}/>
                        </div>

                        <div style={{display:"flex"}}>
                            <div>
                               Banner & Footer Font Color
                            </div>
                            <input type={"radio"} name={'fontColor'} onChange={handleSecondaryFontColorChange} value={"black"}/>
                            <input type={"radio"} name={'fontColor'} onChange={handleSecondaryFontColorChange} value={"white"}/>
                        </div>

                    </div>

                    <div className={"menu-container"}>

                        <div className={'page'}>
                            <Section
                                title={"Sandwhiches"}
                                items={menuItems}
                                altText={"sandwhich picture"}
                                cardColor={secondaryColor}
                                fontColor={primaryFontColor}
                            />
                        </div>

                    </div>
                </>
            }

            <div className={'sticky-container'}  style={{backgroundColor: `${tertiaryColor}`}} >
                <div className={'footer-text'} style={{color: `${secondaryFontColor}`}}>( 123 ) 456 - 7890</div>
                <div className={'footer-text'} style={{color: `${secondaryFontColor}`}}>myemailone@yahoo.com</div>
                <div className={['footer-text', 'icons']} style={{color: `${secondaryFontColor}`}}>
                    <InstagramIcon size={"medium"}/>
                    <FacebookIcon size={"medium"}/>
                </div>
            </div>

        </div>
    )
}