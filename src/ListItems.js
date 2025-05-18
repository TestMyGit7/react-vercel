import React from 'react';
import './ListItems.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
                <span onClick={() => props.deleteItem(item.key)}><i className="fa fa-trash" aria-hidden="true"></i></span>
            </p>
        </div>
    })
    return <div className='list-main'>{listItems}</div>;
}

export default ListItems;