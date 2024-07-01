// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table user {
  id serial [primary key]
  username varchar
  email varchar
  bio text
  password varchar
  role varchar
}


Table treasure {
  id serial [primary key]
  bag_id int 
  user_id int 
  treasure_name varchar
  description text
}

Table bag {
  id serial [primary key]
  user_id int
  bag_name varchar
  description text
}



Ref: "user"."id" < "bag"."user_id"

Ref: "bag"."id" < "treasure"."bag_id"

Ref: "user"."id" < "treasure"."user_id"