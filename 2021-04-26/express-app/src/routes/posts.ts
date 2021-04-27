import express from 'express';

let postRouter = express.Router();

/* Posts Data - Use data from jsonPlaceHolder */
let data = {
    posts: [
        {id: 1 , userId: 1, title: 'sunt aut facere ', body: 'quia et suscipit suscipit recusandae consequuntur expedita'},
        {id: 2 , userId: 1, title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor'},
        {id: 3 , userId: 1, title: 'ea molestias quasi exercitationem', body: 'et iusto sed quo iure voluptatem occaecati omnis'}
    ]
}

/* Implement Methods */
postRouter.get('/', (req, res) => {
    res.json(data.posts);
});

postRouter.post('/', (req, res) => {
    res.json('Creating');
});

postRouter.patch('/', (req, res) => {
    res.json('Patching....');
});

postRouter.delete('/', (req, res) => {
    res.json('Deleting....');
});

export default postRouter;