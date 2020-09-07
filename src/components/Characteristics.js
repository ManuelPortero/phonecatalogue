import React, { Component } from 'react'
import util from '../util'
import './Characteristics.css';

export default class Characteristics extends Component {
    render() {
        const {characteristicsItems} = this.props;
        return (
            <div className="alert alert-info text-center">
                {characteristicsItems.length === 0 
                ? "No phones selected": 
                <div>You have {characteristicsItems.length} phones selected.<hr /></div>}
                {characteristicsItems.length > 0 && 
                    
                    <div>
                        <div >
                            {characteristicsItems.map(item =>
                                
                                <li className="img-thumbnail">
                                    <div className ="loader">
                                    <h4><b> <p className=" text-success "><u>Phone</u></p></b></h4>
                                    {item.name}
                                    <h5><b> <p className=" text-success "><u>Manufacturer</u> </p></b></h5>
                                    {item.manufacturer}
                                    <h5><b> <p className=" text-success "><u>Description</u></p></b></h5>
                                    <p className="text-justify">{item.description}</p>
                                    <h5><b> <p className=" text-success "><u>Color</u></p></b></h5>
                                    {item.color}
                                    <h5><b> <p className=" text-success "><u>Screen</u> </p></b></h5>
                                    {item.screen}
                                    <h5><b><p className=" text-success "><u>Processor</u></p></b></h5>
                                    {item.processor}
                                    <h5><b><p className=" text-success "><u>Ram memory</u> </p></b></h5>
                                    <p>{item.ram} Gb</p>
                                    </div>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCharacteristics(e, item)}>X</button>
                                    <hr />
                                </li>)}
                        </div>
                    </div>
                    
                }

            </div>
        )
    }
}
