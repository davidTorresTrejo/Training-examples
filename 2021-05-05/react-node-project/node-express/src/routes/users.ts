import express from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/users.entity';

let userRoute = express.Router();

/* Users Data - Use data from jsonPlaceHolder */
let data = {
    users: [
        {name: 'Leanne Graham', email: 'Sincere@april.biz', address:{city: 'Gwenborough'}, phone: '1-770-736-8031 x56442', company: {name: 'Romaguera-Crona'}},
        {name: 'Ervin Howell', email: 'Shanna@melissa.tv', address:{city: 'Wisokyburgh'}, phone: '010-692-6593 x09125', company: {name: 'Deckow-Crist'}},
        {name: 'Clementine Bauch', email: 'Nathan@yesenia.net', address:{city: 'McKenziehaven'}, phone: '1-463-123-4447', company: {name: 'Romaguera-Jacobson'}}
    ]
}

/* Implement Methods of CRUD Operations */

/* Read all Users */
userRoute.get('/', async (req, res) => {
    /* res.json(data.posts); */
    let [user, error] = await handleAsync(getRepository(Users).find({relations: ['address', 'company']}));
    if (error) return res.send(error);
    res.send(user);
});

/* Read a single User */
userRoute.get('/:id', async (req, res) => {

    let id = req.params.id;
    let [user, error] = await handleAsync(getRepository(Users).findOne(id, {relations: ['address', 'company']}));
    if (error) return res.send(error);

    if (user) {
        res.send(user);
    } else {
        res.send(`No post found for id:  ${id}!`);
    }
});


/* Create a User */
userRoute.post('/', async (req, res) => {
    /* res.json('Creating'); */
    let data = req.body;
    const newUser = getRepository(Users).create(data);
    let [user, error] = await handleAsync(getRepository(Users).save(newUser));

    if (error) return res.send(error);
    res.send(user);

});

/* Update a single User based on id */
userRoute.patch('/:id', async (req, res) => {

    const id = Number(req.params.id);
    /* const data = req.body; */
    const data = {id: id, ...req.body};

    /* let [response, error] = await handleAsync(getRepository(Users).update(id, data)); */
    let [user, error] = await handleAsync(getRepository(Users).save(data));


    if (error) return res.send(error);

    let [updateUser, error2] = await handleAsync(getRepository(Users).findOne(id, {relations: ['address', 'company']}));
    if (error) return res.send(error2);

    if (updateUser) {
        res.send(updateUser);
    } else {
        res.send(`No post found for id:  ${id}!`);
    }

});


/* Delete a single User based on id */
userRoute.delete('/:id', async (req, res) => {

    const id = req.params.id;

    let [response, error] = await handleAsync(getRepository(Users).delete(id));
    if (error) return res.send(error);

    if (response.affected === 1) {
        res.send({ deleted: true });
    } else {
        res.send(`No post found for id:  ${id}!`);
    }

});

/* handleAsync Method */
const handleAsync = (promise: Promise<any>) => {
    return promise
        .then((data: any) => ([data, null]))
        .catch((error: any) => ([null, error]))
}

export default userRoute;