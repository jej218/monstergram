## Monster-gram

A Version of the Pupstagram App with a twist = Instead of uploading photos, posts are random pixel images in a "Galaga-Like" style. There Is also functionality to call an API to generate random names for the pixel monster.


#### Setup your git repo

1. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
2.  Then follow the directions on github that says ```…or create a new repository on the command line```

it should look like this

```
git init
git add .
git commit -m "first commit"
git remote add origin git@git.generalassemb.ly:SEI-CC/test.git // this will be whatever your address will be
git push -u origin master
```

#### Setup the App

```npm install```

*DOTENV*

`touch .env`

add your variables

```
DATABASE_URL=mongodb://localhost:27017/testagramV2
BUCKET_NAME=catcollectorone
SECRET=mysecretforjwt
```

The app is configured, to use those respective key names for the database, jwt secret and aws bucket, of course you'll have your own values
