import React, { Component } from 'react'
import loading from '../images/loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div  style={{height:"20vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={loading} alt="loading"/>
            </div>
        )
    }
}

export default Spinner