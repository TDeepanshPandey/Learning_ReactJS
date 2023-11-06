import {Component} from 'react';
import './card-list.style.css';
import Card from '../card/card';

class CardList extends Component{

    render(){
        console.log(this.props);

        const {monsters} = this.props;

        return (
        <div className='card-list'>
            {
                monsters.map((monster) => { 
                    return (
                    <Card sendinfo={monster}></Card>    
                    )
                })
            }
        </div>
        )}
}

export default CardList;