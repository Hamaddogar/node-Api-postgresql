require('dotenv').config();

const express = require('express');
const routes = require('./router/post_router');
const getroutes=require('./router/get_router');
const delroutes =require('./router/del_router')
const putrouter =require('./router/update_router')

const app = express();

const PORT = 3000;

app.use('/', routes);
app.use('/', getroutes);
app.use('/',delroutes)
app.use('/',putrouter)



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
