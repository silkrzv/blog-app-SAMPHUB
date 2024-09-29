import { Router } from 'express';
const router = Router();

// array to keep the posts (temporarily, in memory)
let posts = [];

// main route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'SAMP Hub', 
    content: 'Bine ai venit la blog!', 
    posts: posts,
    editPost: null 
  });
});

router.get('/views/about', (req, res) => {
  res.render('about');
});

router.get('/views/contact', (req, res) => {
  res.render('contact');
});

// route for creating new posts
router.post('/create-post', (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: Date.now(), title, content });
  res.redirect('/');
});

// route for displaying the edit form (uses index.ejs with editPost populated)
router.get('/edit-post/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.redirect('/');
  }
  res.render('index', { 
    title: 'Editează Postarea', 
    content: '', 
    posts: posts, 
    editPost: post 
  });
});

// route for updating a post
router.post('/edit-post/:id', (req, res) => {
  const { title, content } = req.body;
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex !== -1) {
    posts[postIndex] = { ...posts[postIndex], title, content };
  }
  res.redirect('/');
});

// route for deleting a post
router.post('/delete-post/:id', (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.redirect('/');
});


export default router;
