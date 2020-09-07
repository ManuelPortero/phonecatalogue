import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Characteristics from './components/Characteristics';
import {Provider} from "react-redux";
import store from "./store";



class App extends Component {
constructor(props){
  super(props)
  this.state ={products :[],filteredProducts:[], characteristicsItems:[]};
  this.handleChangeSort = this.handleChangeSort.bind(this);
  this.handleAddCharacteristics = this.handleAddCharacteristics.bind(this);
  this.handleRemoveFromCharacteristics = this.handleRemoveFromCharacteristics.bind(this);

}




handleChangeSort(e){
  this.setState({sort: e.target.value});
  this.listProducts();
}


handleAddCharacteristics(e,product){
  this.setState(state => {
    const characteristicsItems = state.characteristicsItems;
    let productAlreadyInCharacteristics = false;
    characteristicsItems.forEach(item => {
    
      if(item.id ===product.id){
        productAlreadyInCharacteristics = true; 
        item.count++;
      } 
    });    

    if(!productAlreadyInCharacteristics){
      characteristicsItems.push({...product,count:1});
    }
    localStorage.setItem("characteristicsItems",JSON.stringify(characteristicsItems));
    return characteristicsItems;

  })
}

handleRemoveFromCharacteristics(e,item){
    this.setState(state => {
      const characteristicsItems = state.characteristicsItems.filter(elm => elm.id!= item.id)
      localStorage.setItem('characteristicsItems', characteristicsItems);
      return ({characteristicsItems});
    
    });
}


render (){
  return (
  <Provider store = {store}>
    <div className="container">

      <div className="text-center img-fluid">
        <br/>  
        <img className="header__image" src="https://images.ctfassets.net/5gv1edeicqfs/bomBQDobMA6eyu4CkuYmM/6f5debe74cf1e335bb0be7e3ecbba40b/gs-logo.png"/> 
      </div>
      
        <h3>Phone Catalogue </h3>
      
        <hr/>
        <div className="row ">
          <div className="col-md-6">

          <Products products={this.state.filteredProducts} handleAddCharacteristics={this.handleAddCharacteristics}/>
          </div>
          <div className="col-md-6">
          <Characteristics characteristicsItems={this.state.characteristicsItems}
          handleRemoveFromCharacteristics={this.handleRemoveFromCharacteristics}/>
          </div>
      </div>
    </div>
  </Provider>
  );
 }
}

export default App;
