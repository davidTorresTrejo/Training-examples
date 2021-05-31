import { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
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
}

class Column extends Component<IProps>{

    render() {
        return (
            <div className="Column">
                <h3>{this.props.column.title}</h3>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <div className="ItemList" ref={provided.innerRef} {...provided.droppableProps} style={styleColum(snapshot.isDraggingOver)}>
                            {this.props.items.map((item, index) => <Item key={item.id} item={item} index={index}></Item> )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        );
    }
}


export default Column;