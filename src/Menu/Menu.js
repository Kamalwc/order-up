import React, {useEffect} from 'react'
import {Section} from './Section';
import "./Menu.css"
import {menuItems} from '../data/menuItems'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Menu = (props) =>{


    return(

        <div className={'background'}>


            {
                <>
                    <div className={'logo-container'}>
                        <img
                            src={'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/logo%2FDINA%E2%80%99S.png?alt=media&token=f824e860-df96-4659-a295-d7d2ea0113e0&_gl=1*1xlct75*_ga*OTQ2NDc2NjcxLjE2OTM4NjE5MDU.*_ga_CW55HF8NVT*MTY5NjQ3ODUxNS41LjEuMTY5NjQ3ODc0Ny40OC4wLjA'}
                            alt={'Sis Dina Kitchen logo'}
                            className={'logo-image'}
                        />
                    </div>
                    <div className={"menu-container"}>

                        <div className={'page'}>
                            <Section
                                title={"Sandwhiches"}
                                items={menuItems}
                                altText={"sandwhich picture"}
                            />
                        </div>

                    </div>
                </>
            }

            <div className={'sticky-container'}>
                <div className={'footer-text'}>( 123 ) 456 - 7890</div>
                <div className={'footer-text'}>myemailone@yahoo.com</div>
                <div className={['footer-text', 'icons']}>
                    <InstagramIcon size={"medium"}/>
                    <FacebookIcon size={"medium"}/>
                </div>
            </div>

        </div>
    )
}