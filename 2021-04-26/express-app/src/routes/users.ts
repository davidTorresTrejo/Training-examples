import express from 'express';

let userRoute = express.Router();

/* Posts Data - Use data from jsonPlaceHolder */
let data = {
    users: [
        {name: 'Leanne Graham', email: 'Sincere@april.biz', address:{city: 'Gwenborough'}, phone: '1-770-736-8031 x56442', company: {name: 'Romaguera-Crona'}},
        {name: 'Ervin Howell', email: 'Shanna@melissa.tv', address:{city: 'Wisokyburgh'}, phone: '010-692-6593 x09125', company: {name: 'Deckow-Crist'}},
        {name: 'Clementine Bauch', email: 'Nathan@yesenia.net', address:{city: 'McKenziehaven'}, phone: '1-463-123-4447', company: {name: 'Romaguera-Jacobson'}}
    ]
}

/* Implement Methods */
userRoute.get('/', (req, res) => {
    res.json(data.users);
});

userRoute.post('/', (req, res) => {
    res.json('Creating in Users');
});

userRoute.patch('/', (req, res) => {
    res.json('Patching in Users');
});

userRoute.delete('/', (req, res) => {
    res.json('Deleting in Users');
});

export default userRoute;