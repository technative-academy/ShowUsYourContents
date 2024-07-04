# Show Us Your Contents

The final group project for TechNative Academy. This app is the backend and consists of an API and database. The theme is whatever is in your bag, pockets, drawers, etc.

## Meet the Team

- [Jo](https://github.com/Jo-Pickering)
- [Conrad](https://github.com/cnrdgrgry)
- [Susannah](https://github.com/sfbennett)
- [Chloe](https://github.com/ChloeSAPage)

# Our Process

## Day 1

For day one we did the basics, created a trello board, started our repo, talked about our MVP.

![trello](resources/image.png)

## Day 2

## Day 3

## Day 4

## Day 5

# Technical Information

## Database

To set up this project locally, you'll need to run the SQL included in the `db`` folder.

## Using the API - Installation

```sh
git clone https://github.com/yourusername/ShowUsYourContents.git
cd ShowUsYourContents
npm install
```

## Running the Server

`node index.js`

### Endpoints - Auth

Register a new user

- Method: `POST`
- URL: /register

Login a user

- Method: `POST`
- URL: /login

Logout a user

- Method: `POST`
- URL: /logout

### Endpoints - Users

Get all users

- Method: `GET`
- URL: `/users`

Get user by ID

- Method: `GET`
- URL: `/users/:id`

Add a new user

- Method: `POST`
- URL: `/users`

Update/replace a user

- Method: `PUT`
- URL: `/users/:id`

Delete a user

- Method: `DELETE`
- URL: `/users/:id`

### Endpoints - Bags

Get all bags

- Method: `GET`
- URL: `/bags`

Get bag by user ID

- Method: `GET`
- URL: `/fetchByUser`

Get bag by ID

- Method: `GET`
- URL: `/bags/:id`

Add a new bag

- Method: `POST`
- URL: `/bags`

Update/replace a bag

- Method: `PUT`
- URL: `/bags/:id`

Delete a bag

- Method: `DELETE`
- URL: `/bags/:id`

### Endpoints - Treasures

Get all treasures

- Method: `GET`
- URL: `/treasures`

Get treasures by ID

- Method: `GET`
- URL: `/treasures/:id`

Add a new treasure

- Method: `POST`
- URL: `/treasures`

Update/replace a treasure

- Method: `PUT`
- URL: `/treasures/:id`

Delete a treasure

- Method: `DELETE`
- URL: TBC
