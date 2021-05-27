import { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

interface IProps{
    items: {[key: string]: {id: string, content: string}};
    columns: {[key: string]: {id: string, title: string, itemIds: string[]}};
    columnOrder: string[];
}


class Starred extends Component{

    state: IProps = {
        // Draggable items
        items: {
            'item-1': {id: 'item-1', content: 'Finish ESLinting'},
            'item-2': {id: 'item-2', content: 'Carry Out Dev Testing'},
            'item-3': {id: 'item-3', content: 'Create Build'},
            'item-4': {id: 'item-4', content: 'Fix Bugs'}
        },
        // Droppable areas
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'To Do',
                itemIds: ['item-1', 'item-2', 'item-3', 'item-4']
            }
        },
        // Order of droppable areas
        columnOrder: ['column-1']
    }

    componentDidMount(){
        // fetch items from backend & populate states
    }

    onDragEnd = ( result: any ) => {
        // Update the itemIds with new order
    }

    render(){
        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
                {
                    this.state.columnOrder.map( (columnId: string) => {
                        // retreive individual column from based on this columnId
                        const column = this.state.columns[columnId];

                        // retreive all item values (array) within this column
                        const items = column.itemIds.map((itemId: string) => this.state.items[itemId]);

                        // display the column with items
                        return <Column key={column.id} column={column} items={items}></Column>

                    })
                }
            </DragDropContext>
        );
    }
}

export default Starred;