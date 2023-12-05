import  Express  from "express";
const app = Express();

import { auth } from "./routes/auth.js";
import { users } from "./routes/users.js";
import { posts } from "./routes/posts.js";
import cookieParser from "cookie-parser";

import cors from 'cors';

//Middleware 
app.use(Express.json());
app.use(cookieParser());

app.use(Express.static('public'));

const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:5173/',
        // Agrega otras rutas según sea necesario
    ],
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

//Routes
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/posts', posts);

app.listen(3000, ()=>{

    console.log("Servidor en puerto 3000");

})