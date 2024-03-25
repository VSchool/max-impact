# MaxImpact


### Overview
Web application for managing video and PDF files. Admin users are authorized to create, read, update and delete files from admin dashboard. Member users are allowed to read only.

### Architecture
![Architecture Diagram](./docs/MaxImpact%20Project%20Architecture-1.png)

### Getting Started

> Note: You will need to create valid accounts for [Cloudinary](https://cloudinary.com/), [Atlas](https://www.mongodb.com/) and [Auth0](https://auth0.com/) to run the application

#### Set up development environment
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
```bash
# run dev server (from root project folder)
npm run dev
```
```bash
# run web client    
cd client && npm run dev
```

#### Set up authentication
All app users are managed by Auth0. There are two types, members and admins. 