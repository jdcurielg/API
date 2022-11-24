# API 

NOTE: The installation was tested using 
node      v16.16.0 
npm       8.19.1
express   4.18.2
mongoose  6.7.2
nodemon   2.0.20

## INSTALLING THE CODE

The following are detailed instructions for installing the code 

0) Ensure you have node installed.

   At a command prompt, type `node -v` to ensure you have version `14.15.0` or higher before proceeding.

1) Download or clone the code from this repository.

   If you download as a zip file, be sure to unzip it.

2) Navigate to the API 

   There should be a package.json file in this folder.

3) In a command window (or the Command prompt in VS Code), type `npm install`.

   This creates a node_modules folder and installs all packages from the package.json file into that folder. You may see a few warnings during this process, but you should not see any errors.

4) Add in your MongoDB database:

   A database with the name "db"
   
5) In the same command window (or the Command property in VS Code), type `npm start`.

   The application should then compile and start.

### API Structure

assets/gateways.json      – Contains the JSON file for testing with postman

db/db.js                  - Contains the connection to the database via mongoose.

helpers/helpers.js        - Contains additional functions

models/gateway.model.js   - Contains a schema for the objects(gateways)

router/gaterouter.js      - Contains the router API

