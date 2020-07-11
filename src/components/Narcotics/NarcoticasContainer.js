import React, { Component } from 'react';
import OneNarcotic from './Opium/OneNarcotic';
import style from './narcoticsContainer.module.css'

export default class NarcotisContainer extends Component {
    
    render() {

        // let arr = [];
        // let pageElements = arr.map(item => {
            
        //     if (arr.isOpium) {
        //         return (
        //             <Opium state={this.props}/>
        //         )
        //     }
        // }
        // )
        console.log(this.props.Opium);
        return (
            <div className={style.narcotisContainer}>

                {/* {pageElements} */}
    
                <OneNarcotic Opium={this.props.Opium}/>

            </div>
        )
    }
    
}