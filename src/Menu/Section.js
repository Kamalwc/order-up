import {Card, Box,Grid, Typography } from '@mui/material'
import {React,useEffect} from 'react'
import './Menu.css'
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';


Section.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}
export function Section(props){
    const isMobile = useMediaQuery("min-width:600px")

    return (
        <div style={{margin: '16px'}}>
            <Box className={'section-header-container'}>
                <Typography
                    className={'section-header'}
                    textAlign="center"
                    variant='h4'
                >{props.title}</Typography>
            </Box>
            <Grid container>
                {
                    props.items.map((item, key ) =>{
                        return(
                            <Grid key={key} item xs={12} md={4} style={{padding: '20px'}}>
                                <Card className={'card'} elevation={5}>
                                    <Box className={'card-header-container'}>
                                        <Typography  className={'item-name'} variant={'h5'}>{item.name}</Typography>
                                        <Typography  className={'item-name'} variant={'h5'}>${`${item.price}`}</Typography>
                                    </Box>
                                    <Box className={'card-content'}>
                                        <img src={item.image} alt={"sandwhich picture"} style={{padding: '16px'}}/>
                                        <Typography
                                            className={'item-description'}
                                            // variant='body1'
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>)
}