import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react'
import {Section} from './Section';
import "./Menu.css"
import {menuItems} from '../data/menuItems'

export const Menu = (props) =>{

    return(

        <div className={'background'}>


            {
                <>
                    <Box sx={{ display: 'flex', justifyContent:'center', backgroundColor:'#231f20'}}>
                        <img
                            src={'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/logo%2F1.png?alt=media&token=e6c82f0b-587a-4a87-9d32-b5eccce9b283'}
                            alt={'Sis Dina Kitchen logo'}
                        />
                    </Box>
                    <div style={{margin: '0% 10%', padding: '24px'}}>

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
                <Typography variant={'h5'}>Call now: ( 123 ) 456 - 7890</Typography>
            </div>

        </div>
    )
}