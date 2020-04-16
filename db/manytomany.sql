create table manytomany (
    manytomany_id serial primary key
    user_id int references users(user_id)
    product_id int references products(product_id)
)