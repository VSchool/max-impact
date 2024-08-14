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

### Set Up Authentication
All users are managed by Auth0. In order to configure the application to authenticate correctly, you will need to create an Auth0 account. In addition, there are a few things you need to do from the Auth0 dashboard:

##### Register New Web Client Application
In order for Auth0 to know which application users are logging into (and where to redirect back to), we need to create and register the web client application from the Auth0 dashboard.

Under Applications, select Applications and click create. Select Single Page Web Application. Under settings tab add the URL of your Vite client root routes (e.g. `http://localhost:5173`) to the following form fields: 
- Allowed Callback URL's
    - For this one, you need to add both `http://localhost:5173` and `http://localhost:5173/admin` separated by a comma.
- Allowed Logout URL's
- Allowed Web Origins

At the top of settings you will find the credentials for connecting to the Auth0 Service from your frontend web application. See [`client/.env.template`](client/.env.template) file for reference.

When running the web app locally you should be able to log in and sign up users successfully from the landing page.

##### Create API Application
In order for the server to authenticate requests, we need to create and configure an Auth0 API which will allow requests to made to our server `api/` endpoints

Under Applications Menu, select APIs and click Create API. Give it a name and use the server endpoint as your identifier (e.g. `http://localhost:8080`). Your identifier will be used for the `VITE_AUTH0_AUDIENCE` and `AUTH0_AUDIENCE` environment variables. Under Quickstart --> Node.js you will see the `AUTH0_ISSUER_BASE_URL` value needed to configure your Auth0 server connection.


##### Define and Apply Permissions
You can define the permissions that apply to this API under the Permissions tab. For this project, you'll need to create `create:files`, `read:files`, `update:files`, and `delete:files`.

##### Create Admin and Member Roles and Assign Permissions
To enforce the permissions defined above, under User Management --> Roles you must create a User Role and apply the relevant permissions for the selected API. Create two, one called Member, and another called Admin. Member roles should only be assigned `read:files` permissions, while Admin roles should be given all possible permissions.

##### Create Users and Assign Role
Under User Management --> Users, create two users and assign one of them the member role, and the other an admin role. Once the admin user is created, under details add a metadata field like this (this is what tells the client app to determine what type of user is logged in):
```json
{
    "admin": true
}
```
##### Create Auth0 Action for Admin Metadata:
Under Auth0 --> Actions --> Library, go to Custom, and select "Create Action".  In the code editor paste the following code:

```
exports.onExecutePostLogin = async (event, api) => {

  // Check if the user has roles defined in the app metadata
  if (event.user && event.user.user_metadata) {
    api.idToken.setCustomClaim(`http://localhost:5173/user_metadata`, event.user.user_metadata);
  }
};
```
In the above example the http://localhost:5173 portion of the template literal is your namespace.  This will need to be adjusted in a production environment.

Save the draft, and click deploy.

Go to Actions --> Flows, and select Login.  In the "Add Action" panel, select "Custom", and drag over the new action you just created, in between Start and Complete.

##### Enforce permissions on server requests
To authorize requests to your server, you can use the `allow()` middleware function which will prevent users without the specified permissions to access the endpoint.
```js
// example
server.get('/authorized-to-read', allow(['read:resource'], (req, res) => {res.status(200).send('resources sent!')}) )
``` 

---

### Register Cloudinary CDN

Once you create an account you can easily retrieve the SDK environment variables from the console.

### Create MongoDB Database
From the main dashboard in Atlas, create a new project and follow the steps to create a new database. Select the database from the side menu and click Connect. Select the first option (NodeJs Driver). The connection string looks something like this:
```bash
mongodb+srv://<user>:<password>@<database>.mongodb.net/<name>
```

### Run Locally
Before you run the applications, make sure all the environment variables have been defined and are correct or else you will likely see errors.

```bash
# run dev server (from root project folder)
npm run dev

# on a different terminal window, run web client
cd client && npm run dev
```

### Troubleshooting

### Stripe Payment
Make sure to add the following values to the .env file to make sure we have callback URIs for the Stripe API
```
STRIPE_SUCCESS_URI='http://localhost:5173/payment-confirmation?status=success'
STRIPE_FAILURE_URI='http://localhost:5173/payment-confirmation?status=failure'
```

#### General Stripe Payment Flow:
The user goes to the subscription page which details the subscription and offers a checkout button.  The checkout button directs the user to the stripe/create-checkout-session route which will then use the stripe api to redirect the user to Stripe's secure checkout form.  Once complete the user will be redirected back to the app.