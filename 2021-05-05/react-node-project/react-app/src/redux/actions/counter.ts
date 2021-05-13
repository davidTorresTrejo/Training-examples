export const INCREMENT = ` [counter] INCREMENT`;
export const DECREMENT = ` [counter] DECREMENT`;



export const incrementCounter = (increment: number) => (
    {
        type: `INCREMENT`,
        payload: increment
    }
);


export const decrementCounter = (decrement: number) => (
    {
        type: `DECREMENT`,
        payload: decrement
    }
);


