import React from "react";
import { Link } from "react-router-dom"
import "./LandingPage.css"
import {Button} from "@mui/material";

function LandingPage (props) {

    return (
        <div className={'landing-background'}>
            <div className={"content-container"}>
                <p className={'text'}>Dina's Kitchen</p>
                <Link to={"/menu"}>
                    {/*<p style={{fontSize: '3em'}}>View menu</p>*/}
                    <Button
                        style={{backgroundColor: 'brown',
                            boxShadow: '3px 7px 11px 2px black'}}
                        variant={'contained'}>View menu</Button>
                </Link>
            </div>
    </div>

    )
}

export default LandingPage;