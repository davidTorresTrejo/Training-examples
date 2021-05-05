import express from 'express';
import { getRepository } from 'typeorm';
import Posts from '../models/posts.entity';

let postRouter = express.Router();

/* Posts Data - Use data from jsonPlaceHolder */
let data = {
    posts: [
        { id: 1, userId: 1, title: 'sunt aut facere', body: 'quia et suscipit suscipit recusandae consequuntur expedita' },
        { id: 2, userId: 1, title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor' },
        { id: 3, userId: 1, title: 'ea molestias quasi exercitationem', body: 'et iusto sed quo iure voluptatem occaecati omnis' }
    ]
}

/* Implement Methods of CRUD Operations */

/* Read all posts */
postRouter.get('/', async (req, res) => {
    /* res.json(data.posts); */
    let [post, error] = await handleAsync(getRepository(Posts).find());
    if (error) return res.send(error);
    res.send(post);
});

/* Read a single post */
postRouter.get('/:id', async (req, res) => {

    let id = req.params.id;
    let [post, error] = await handleAsync(getRepository(Posts).findOne(id));
    if (error) return res.send(error);

    if (post) {
        res.send(post);
    } else {
        res.send(`No post found for id:  ${id}!`);
    }
});


/* Create a Post */
postRouter.post('/', async (req, res) => {
    /* res.json('Creating'); */
    let data = req.body;
    const newPost = getRepository(Posts).create(data);
    let [post, error] = await handleAsync(getRepository(Posts).save(newPost));

    if (error) return res.send(error);
    res.send(post);

});

/* Update a single Post based on id */
postRouter.patch('/:id', async (req, res) => {

    const id = req.params.id;
    const data = req.body;

    let [response, error] = await handleAsync(getRepository(Posts).update(id, data));
    if (error) return res.send(error);

    let [updatePost, error2] = await handleAsync(getRepository(Posts).findOne(id));
    if (error) return res.send(error2);

    if (updatePost) {
        res.send(updatePost);
    } else {
        res.send(`No post found for id:  ${id}!`);
    }

});


/* Delete a single Post based on id */
postRouter.delete('/:id', async (req, res) => {

    const id = req.params.id;

    let [response, error] = await handleAsync(getRepository(Posts).delete(id));
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

export default postRouter;