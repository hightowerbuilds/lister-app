import React, { Component, useEffect } from 'react';
import Thumbnail from './Thumbnail';

class DataEntry extends Component {

    render(){
        return(
            <div>
                <h1 className='data-header'>data entry</h1>
                
                <textarea className='textOne'>title</textarea>
                <textarea className='textOne'>date</textarea>
                <textarea className='textOne'>notes</textarea>
                <textarea className='textOne'>deadline</textarea>
                <textarea className='textOne'>thumbnail</textarea>

                <button className='button'>CREATE</button>
            </div>
        )
    }

}

export default DataEntry;