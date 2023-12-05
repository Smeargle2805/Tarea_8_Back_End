import { db } from "../database/conn.js";

const createPosts = async (req, res)=>{

    const params = [
        req.body.description,
        req.body.user_name,
    ];

    const sql = `insert into tbl_post 
                    (description, user_name)
                values 
                    ($1, $2) 
                returning id, user_name`;
                    
    const result = await db.query(sql, params);

    res.json(result);


}

const getPost = async (req, res) =>{


    const sql = ` select id, description , create_date, user_name from tbl_post
    order by create_date desc `;

    const result = await db.query(sql);

    res.json(result);


}


export {
 
    createPosts, 
    getPost

}