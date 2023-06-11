import React, { Component } from 'react';
import '../App.css'

class Thumbnail extends Component {

    static defaultProps = {
        title: 'first note',
        date: 'date: 12/1/2023',
        deadline: 'deadline: 6 days',
        display: 'flex'
    }

    constructor(props){
        super(props);
        this.state = { title: 'empty', date: 'today', deadline: 'deadline', display: 'none'}
    }

    press(props){
        this.setState( {title: this.title })
        this.setState( {date: this.date })
        this.setState( {deadline: this.deadline })
    }

    render(){
        return(
            <div className='thumbnail' style={{ display: this.state.display }}>
                 <div className='info-box'>
                    <div>{this.state.title}</div>
                    <div>{this.state.date}</div>
                    <div>{this.state.deadline}</div>
                </div>
            </div>
        )
    }
}

export default Thumbnail;