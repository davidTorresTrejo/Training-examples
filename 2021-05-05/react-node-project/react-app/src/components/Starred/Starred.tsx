import { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';
import './Starred.css';

interface IProps {
    items: { [key: string]: { id: string, content: string } };
    columns: { [key: string]: { id: string, title: string, itemIds: string[] } };
    columnOrder: string[];
}


class Starred extends Component {

    state: IProps = {
        // Draggable items
        items: {
            'item-1': { id: 'item-1', content: 'Finish ESLinting' },
            'item-2': { id: 'item-2', content: 'Carry Out Dev Testing' },
            'item-3': { id: 'item-3', content: 'Create Build' },
            'item-4': { id: 'item-4', content: 'Fix Bugs' },
            'item-5': { id: 'item-5', content: 'Fix Code' },
            'item-6': { id: 'item-6', content: 'Create a new repository' },
            'item-7': { id: 'item-7', content: 'Test' },
            'item-8': { id: 'item-8', content: 'For Production' }
        },
        // Droppable areas
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'To Do',
                itemIds: ['item-1', 'item-2', 'item-3', 'item-4']
            },
            'column-2': {
                id: 'column-2',
                title: 'In Progress',
                itemIds: ['item-5', 'item-6']
            },
            'column-3': {
                id: 'column-3',
                title: 'Done',
                itemIds: ['item-7', 'item-8']
            }
        },
        // Order of droppable areas
        columnOrder: ['column-1', 'column-2', 'column-3']
    }

    componentDidMount() {
        // fetch items from backend & populate states
    }

    onDragStart = (start: any) => {
        /* const start = {
            draggableId: 'item-1',
            type: 'TYPE',
            reason: 'DROP',
            source: {
                droppableId: 'column-1',
                index: 0
            }
        } */
    }

    onDragUpdate = () => {
        /* const update = {
            ...start,
            destination: {
                droppableId: 'column-1',
                index: 1
            }
        } */
    }

    // MULTIPLE COLUMNS
    onDragEnd = (result: any) => {
        // Update the itemIds with new order

        //const result = {
        //    ...update,
        //    reason: 'DROP'
        //}
        console.log(result);

        const { source, destination, draggableId, type } = result;

        // Don´t deal if item is pulled outside of a drappable area
        if (!destination) {
            return;
        }

        // if destination & source are same, don´t do anything
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }


        // dragging a column
        if (type === "column") {
            // re-arrange columnOrder
            const newColumnOrder = Array.from(this.state.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            // create a new state
            const newState = { ...this.state, columnOrder: newColumnOrder };

            // Now, update the state
            this.setState(newState);
            return;
        }


        // dragging an item
        // Retreive Column
        const startColumn = this.state.columns[source.droppableId];
        const endColumn = this.state.columns[destination.droppableId];

        // If start and end column are same
        if (startColumn === endColumn) {
            // retreive items
            const newItemsIds = Array.from(startColumn.itemIds);
            // remove item from initial position
            newItemsIds.splice(source.index, 1);
            // insert item into new position
            newItemsIds.splice(destination.index, 0, draggableId);

            const newColumn = { ...startColumn, itemIds: newItemsIds }

            const newState = { ...this.state, columns: { ...this.state.columns, [newColumn.id]: newColumn } }

            // Now, update the state!
            this.setState(newState);
        } else {
            // If start and end columns are different

            // Remove items from source column
            const newStartItemIds = Array.from(startColumn.itemIds);
            newStartItemIds.splice(source.index, 1);
            const newStartColumn = { ...startColumn, itemIds: newStartItemIds }

            // Insert item into destination column
            const newEndItemIds = Array.from(endColumn.itemIds);
            newEndItemIds.splice(destination.index, 0, draggableId);
            const newEndColumn = { ...endColumn, itemIds: newEndItemIds }

            // create a new state
            const newState = { ...this.state, columns: { ...this.state.columns, [newStartColumn.id]: newStartColumn, [newEndColumn.id]: newEndColumn } }

            // Now, update the state!
            this.setState(newState);
        }


    }

    // SINGLE COLUMN
    /* onDragEnd = (result: any) => {
        // Update the itemIds with new order

        //const result = {
        //    ...update,
        //    reason: 'DROP'
        //}

        const { source, destination, draggableId } = result;

        // Don´t deal if item is pulled outside of a drappable area
        if (!destination) {
            return;
        }

        // if destination & source are same, don´t do anything
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        // NOTE: if source & destination columns are same 
        // Persist data changes (new order of itemIds)
        // retreive column
        const column = this.state.columns[destination.droppableId];
        // retreive items
        const newItemsIds = Array.from(column.itemIds);
        // remove item from initial position
        newItemsIds.splice(source.index, 1);
        // insert item into new position
        newItemsIds.splice(destination.index, 0, draggableId);

        const newColumn = { ...column, itemIds: newItemsIds }

        const newState = { ...this.state, columns: { ...this.state.columns, [newColumn.id]: newColumn } }

        // Now, update the state!
        this.setState(newState);
    } */

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
                <Droppable droppableId="column-all" type="column" direction="horizontal">
                    {(provided, snapshot) => (
                        <div className="ColumnContainer" ref={provided.innerRef} {...provided.droppableProps}>
                            {
                                this.state.columnOrder.map((columnId: string, index: number) => {
                                    // retreive individual column from based on this columnId
                                    const column = this.state.columns[columnId];

                                    // retreive all item values (array) within this column
                                    const items = column.itemIds.map((itemId: string) => this.state.items[itemId]);

                                    const isDropDisabled = false;

                                    // display the column with items
                                    return <Column key={column.id} column={column} items={items} index={index} isDropDisabled={isDropDisabled}></Column>

                                })
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Starred;