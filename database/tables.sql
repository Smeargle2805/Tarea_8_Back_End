-- Active: 1699316839154@@127.0.0.1@5432@redsocial
create table tbl_role
(
    id SERIAL PRIMARY key,
    name_role varchar(100), 
    is_active BOOLEAN DEFAULT true, 
    created_date TIMESTAMP DEFAULT current_timestamp, 
    deleted_date TIMESTAMP, 
    update_date TIMESTAMP
);

insert into tbl_role
(name_role)
values
('Administrador'), 
('Cliente');

select * from tbl_role;

create table tbl_users
(
    user_name varchar(30) PRIMARY key,
    email VARCHAR(70) UNIQUE, 
    pass VARCHAR(30),
    profile_picture bytea, 
    id_role int REFERENCES tbl_role(id),
    is_active BOOLEAN DEFAULT true, 
    created_date TIMESTAMP DEFAULT current_timestamp, 
    deleted_date TIMESTAMP, 
    update_date TIMESTAMP
);

insert into tbl_users 
(user_name, email, pass, id_role)
values 
('smeargle28', 'smeargle29@unitec.edu', 'Arroz19$', 1), 
('alan783', 'alan783@unitec.edu', 'maiz001$', 2);

select * from tbl_users
where user_name = 'smeargle28' and pass = 'Arroz19$' and is_active = true;

select id, description , user_name ,  encode(img, 'base64') img_base64 from tbl_post
order by create_date desc;

SELECT * FROM tbl_users;

create table tbl_post 
(   
    id SERIAL PRIMARY key,
    description varchar(200),
    img bytea,
    create_date TIMESTAMP default current_timestamp,
    user_name varchar(30) REFERENCES tbl_users (user_name) 
);
