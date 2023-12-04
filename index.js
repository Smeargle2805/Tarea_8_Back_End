import  Express  from "express";
const app = Express();

import { auth } from "./routes/auth.js";
import { users } from "./routes/users.js";
import { posts } from "./routes/posts.js";
import cookieParser from "cookie-parser";

//Middleware 
app.use(Express.json());
app.use(cookieParser());

app.use(Express.static('public'));

//Routes
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/posts', posts);

app.listen(4000, ()=>{

    console.log("Servidor en puerto 4000");

})