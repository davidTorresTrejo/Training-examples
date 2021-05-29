import { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Starred.css';


interface IProps {
    item: { id: string, content: string };
    index: number;
}

class Item extends Component<IProps>{
    render() {
        return (
            <Draggable draggableId={this.props.item.id} index={this.props.index}>
                { (provided, snapshot) => (
                    <div className="Item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {this.props.item.content}
                    </div>
                )}
            </Draggable>
        );
    }
}


export default Item;