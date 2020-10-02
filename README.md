# Tempo

Team Green

A beautiful app to encourage studying.

# Firebase

Added Firebase project called Tempo for this app.

> #### Firebase Project: **https://console.firebase.google.com/u/1/project/tempo-873ec/overview**

&nbsp;

> #### Hosted URL: **https://tempo-873ec.web.app/**

&nbsp; 

## Setup

When first pulling the firebase repo, run:

> `yarn install`

This will ensure all necessary packages are installed in your local repo. 

> **Note** 
> 
> Firebase has been setup to deploy to a folder called **web-build**. This can be changed in the **firebase.json** by editing **`"public": ...`**

&nbsp; 

## Usage 

You simply need to import the **firebase** object in the file. The firebase object is in ***config/firebase.js***

> `import { firebase } from 'config/firebase';`

You can now use all the firebase functions from that object, i.e. for **Real Time Database**:

> `const db = firebase.database().ref(); `

&nbsp; 

## Deploy to Hosting
Added scripts to the package.json to simplify deployment:

### Build and Deploy
> `yarn run deploy`

This will run `yarn run build` and then `firebase deploy`.

### Build Only
> `yarn run build`

This will run `expo build:web`. You can then run `firebase deploy` to deploy the project. 

&nbsp; 

## Test Data
The Real Time Database currently has some test data for users. 

To make it easier to see what the data is, there is a json copy of it in ***test_data/users.json***.
