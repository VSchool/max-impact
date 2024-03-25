# MaxImpact


## Overview
Web application for managing video and PDF files. Admin users are authorized to create, read, update and delete files from admin dashboard. Member users are allowed to read only.

## Architecture
![Architecture Diagram](./docs/MaxImpact%20Project%20Architecture-1.png)

## Getting Started

> Note: You will need to create valid accounts for [Cloudinary](https://cloudinary.com/), [Atlas](https://www.mongodb.com/) and [Auth0](https://auth0.com/) to run the application

### Set up development environment
```bash
# create .env files.
# please read the .env.template files for documentation on each variable value
cat .env.template >> .env
cat client/.env.template >> client/.env

# install server dependencies
npm i

# install client dependencies
cd client && npm i
```

### Set up authentication
All users are managed by Auth0. There are two types, members and admins. This is determined by the `admin` property on the user's `user_metadata` attribute. In order to configure the application to authenticate correctly, there are a few things you need to do from the Auth0 dashboard:

##### Register New Client Application
Under Applications, select Applications and click create. Select Single Page Web Application. Under settings tab add the URL of your Vite client server (e.g. `http://localhost:5173`) to the following form fields: 
- Allowed Callback URL's
- Allowed Logout URL's
- Allowed Web Origins

At the top of settings you will find the credentials for connecting to the Auth0 Service from your application. See [`.env.template`](.env.template) and [`client/.env.template`](client/.env.template) files for reference.

##### Create API Application and define permissions

##### Create Admin and Member Roles and assign permissions

##### Create Member User and assign role

##### Create Admin User, edit user_metadata, and assign role

---

### Register Cloudinary CDN


### Create MongoDB database

### Run locally
Before you run the applications, make sure all the environment vairables have been defined and are correct or else you will likely see errors.

```bash
# run dev server (from root project folder)
npm run dev

# on a different terminal window, run web client
cd client && npm run dev
```

### Troubleshooting
