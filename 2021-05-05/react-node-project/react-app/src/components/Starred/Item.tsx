import { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Starred.css';


const styleItem = (isDragging: boolean, draggableStyle: any, isDragDisabled: boolean) => {
    return {
        ...draggableStyle,
        background: isDragDisabled ? 'lightgrey' :  isDragging ? 'orange' : 'lightgreen'
    }
}

interface IProps {
    item: { id: string, content: string };
    index: number;
}

class Item extends Component<IProps>{
    render() {

        // To disable one item
        const isDragDisabled = this.props.item.id === `item-5`;

        return (
            <Draggable draggableId={this.props.item.id} index={this.props.index} isDragDisabled={isDragDisabled}>
                { (provided, snapshot) => (
                    <div className="Item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={styleItem(snapshot.isDragging, provided.draggableProps.style, isDragDisabled)}>
                        {/* <div className="ItemHandler" {...provided.dragHandleProps}></div> */}
                        {this.props.item.content}
                    </div>
                )}
            </Draggable>
        );
    }
}


export default Item;