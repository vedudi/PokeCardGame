import React, { Component } from 'react'
import Pokecard from './pokecard';
import './Pokedex.css'  

class Pokedex extends Component {
  
    render() {
let title
if (this.props.isWinner) {
    title= <h2 className='Pokedex-winner'>winning player</h2>
} else {
    title= <h2 className='Pokedex-loser'>loser player</h2>

}
      return (
        <>
        <div className='Pokedex'>
            {title}
            <h4> total experience : {this.props.exp}</h4>
         <div className='Pokedex-cards'>
            {
                this.props.pokemon.map((p)=>(
                    <Pokecard 
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                    />
                ))
            }
         </div>
        </div>
        </>
      )
    }}
    export default Pokedex 