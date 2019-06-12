# React-Docker Test Environment

This is a multi-container docker environment that utilizes Docker to create three seperate but linked containers:

- MongoDB database
- Node/Express Server
- React client

## Project Requirements

- Docker
    - [For Mac Users](https://docs.docker.com/docker-for-mac/install/)
    - [For Windows 10 Pro/Enterprise Users](https://docs.docker.com/docker-for-windows/install/)
    - [For Windows 7 or Windows 10 home Users](https://docs.docker.com/toolbox/toolbox_install_windows/)
    - Kitematic should come automatically installed, with Docker, but make sure you have it available, it will be very useful in managine containers
- Do not have anything running on the required ports (3000 for client, 4000 for server, 27017 for mongo.)

## Running the project

- After cloning the repo, go into the project's root directory and run `docker-compose up`. The first time running this the server and client will both go through the build process, but this should only happen once.
- Your connection target on Mac and Linux is `localhost://`. For Windows, you will need to run `docker-machine ip` to find your address to connect to, default is `192.168.99.100:`.
- Database can be found at `(target):27017`, server at `(target):4000`, client at `(target):3000`.

## Development process

Shutting down the servers can be done with a Ctrl-C command from your terminal. Alternatively, you can load up Kitematic to close them as well.

If you need to exec into one of the containers, Kitematic has a GUI to do that for you. Otherwise, you will need to run `docker ps`, find the container ID, and then run `docker exec (container_name) -it bash`.

Kitematic can also be useful for looking at the logs for one specific container, since all three are tailed in the terminal.

## Endpoint testing

The following backend endpoints can be queried via Postman for testing purposes:

- Login (POST) - `(server addr)/api/login` (Expects name/password in request body)
- Current Orders (GET) - `(server addr)/api/current-orders`
- Add Order (POST) - `(server addr)/api/add-order` (Expects ordered_by, quantity, menu_item in request body)
- Delete Order (POST) - `(server addr)/api/delete-order` (Expects id in request body)
- Edit Order (POST) - `(server addr)/api/edit-order` (Expects id in request body. Will look for ordered_by, quantity, menu_item.)
- Flush Orders (DELETE) - `(server addr)/api/delete-all` (This deletes all current orders in the DB)
