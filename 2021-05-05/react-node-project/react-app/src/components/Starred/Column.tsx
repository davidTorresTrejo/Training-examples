import { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Item from './Item';
import './Starred.css';


const styleColum = (isDraggingOver: boolean) => {
    return {
        background: isDraggingOver ? 'lightgrey' : 'inherit'
    }
}

interface IProps {
    column: { id: string, title: string };
    items: { id: string, content: string }[];
    isDropDisabled: boolean;
    index: number;
}

class Column extends Component<IProps>{

    render() {
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <div className="Column" ref={provided.innerRef} {...provided.draggableProps}>
                        <h3 {...provided.dragHandleProps}>{this.props.column.title}</h3>
                        <Droppable droppableId={this.props.column.id} isDropDisabled={this.props.isDropDisabled}>
                            {(provided, snapshot) => (
                                <div className="ItemList" ref={provided.innerRef} {...provided.droppableProps} style={styleColum(snapshot.isDraggingOver)}>
                                    {this.props.items.map((item, index) => <Item key={item.id} item={item} index={index}></Item>)}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                )}
            </Draggable>
        );
    }
}


export default Column;