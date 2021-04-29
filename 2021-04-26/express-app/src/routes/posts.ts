import express from 'express';
import {getRepository} from 'typeorm';

import Posts from '../models/posts.entity';

let postRouter = express.Router();

/* Posts Data - Use data from jsonPlaceHolder */
let data = {
    posts: [
        {id: 1 , userId: 1, title: 'sunt aut facere', body: 'quia et suscipit suscipit recusandae consequuntur expedita'},
        {id: 2 , userId: 1, title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor'},
        {id: 3 , userId: 1, title: 'ea molestias quasi exercitationem', body: 'et iusto sed quo iure voluptatem occaecati omnis'}
    ]
}

/* Implement Methods */
postRouter.get('/', async (req, res) => {
    /* res.json(data.posts); */
    let [post, error] =  await handleAsync( getRepository(Posts).find());
    if (error) return res.send(error);
    res.send(post);
});

postRouter.get('/:id', (req, res) => {
    let post = data.posts.filter( item => item.id.toString() === req.params.id);
    res.json(post[0]);
});



postRouter.post('/', async (req, res) => {
    /* res.json('Creating'); */
    let data = req.body;
    const newPost = getRepository(Posts).create(data);
    let [post, error] =  await handleAsync( getRepository(Posts).save(newPost));

    if (error) return res.send(error);
    res.send(post);

});

postRouter.patch('/', (req, res) => {
    res.json('Patching....');
});

postRouter.delete('/', (req, res) => {
    res.json('Deleting....');
});

const handleAsync = (promise: Promise<any>) =>{
    return promise
        .then( (data: any) => ([data, null]) )
        .catch( (error: any) => ([null, error]) )
}

export default postRouter;