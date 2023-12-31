import {Card, Box, Grid, Typography, Skeleton} from '@mui/material'
import {React,useEffect} from 'react'
import './Menu.css'
import PropTypes from 'prop-types';


Section.propTypes = {
    title: PropTypes.string,
    altText: PropTypes.string,
    items: PropTypes.array
}
export function Section(props){

    return (
        <div style={{margin: '16px'}}>
            <div className={'section-header-container'}>
                {/*<div className={'section-header'}>{props.title}</div>*/}
            </div>
            <Grid container>
                {
                    props.items.map((item, key ) =>{

                        return(

                            <Grid key={key} item xs={12} md={4} style={{padding: '20px'}}>

                                <Card
                                    className={'card'}
                                      elevation={5} style={{backgroundColor: `${props.cardColor}`}}>

                                    <div className={'card-header-container'}>

                                        <p
                                            className={'item-name'}
                                            style={{color: `${props.fontColor}`}}>{item.name}  </p>

                                        <p
                                            className={'item-name'}
                                            style={{color: `${props.fontColor}`}} >${`${item.price}`}  </p>

                                    </div>

                                    <div className={'card-content'}>

                                        <img src={item.image} alt={props.altText} style={{padding: '4px'}}/>

                                        <div className={'item-description'} style={{color: `${props.fontColor}`}}>

                                            {item.description}

                                        </div>

                                    </div>

                                </Card>

                            </Grid>

                        )

                    })

                }

            </Grid>

        </div>)
}