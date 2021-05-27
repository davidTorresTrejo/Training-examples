import { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import './Starred.css';

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
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <h3>Items go here...</h3>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        );
    }
}


export default Column;