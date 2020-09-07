import React, { Component } from 'react';
import util from '../util.js';
import './Products.css';
import store from '../store'; 
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';


class Products extends Component {
    componentWillMount(){
        this.props.fetchProducts();
    }
    render() {
        const productItems = this.props.products.map( product => (
         <div className="col-md-6" key = {product.id}>
             <div className="thumbnail text-center pt-4 ">
                <a  href={`#${product.id}`}  onClick={(e)=> this.props.handleAddCharacteristics(e,product)}>
                    <img className= "responsive__img" src={`/phones/${product.id}.jpg`} alt={product.name}/>                     
                </a>
                <div>
                    <div>
                    <p>{product.name} </p>
                    <b className= "text-success">Price: {util.formatCurrency(product.price)} </b> 
                    </div>
                 
                    <button className="btn btn-primary"
                        onClick={(e)=> this.props.handleAddCharacteristics(e,product)}
                    > Characteristics </button>
                </div>
            </div>
         </div>   )
           
        )

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
const mapStateToProps = state => ({products: state.products.items})

export default connect (mapStateToProps, {fetchProducts}) (Products)