# Madlibs project
For this activity, you will use what you've learned about git to work collaboratively as a classroom to fill out a couple Madlibs. The class should be divided into groups responsible for Madlibs stories, nouns, verbs, adjectives, and adverbs. 

## How to do this activity

1. Form a group. 
2. We will tell your group whether you guys are a story, verb, noun, adjective, or adverb group. And we will also give your group a number!
2. Make a Github account if you haven't for the group. 


3. Fork the repository on Github

  * Find the Madlibs code here: [https://github.com/yale-mgt-656/mgt656-madlibs](https://github.com/yale-mgt-656/mgt656-madlibs)

4. Edit the file you want on Github. You have to create a new file.
5. Commit your code with a nice and useful comment.
6. Push to Github.
After you are done...
7. Create a pull request.
8. The instructor will merge in everybody's work.

Groups should work on the following:

* The Story-groups should all have a number. Each group should create a new html file called `layout(i).html` where (i) is your number to make a story. Stories should be put into the stories folder `./stories`.

* The adjective, noun, and verb groups should work on their files. Each group here will have a number as well! Adjective, noun, and verb file should be put in their respective folders. For example, verbs should be put in `./pos/verbs/verbs(i).js` where (i) is a placeholder for your group number.

## How to install

Everything should be able to be done on the Github webpage (https://github.com/yale-mgt-656/mgt656-madlibs). But if for some reason, you need to install the repo, here are the instructions. 

    git clone git@github.com:johnqyalie/mgt656-madlibs.git
    
Install the dependencies. If you get errors, make sure you set environment variables for PORT and IP.
    
    export PORT='3000'
    export IP='localhost'
    npm install
    
Run the code. Install nodemon if you don't have it!

    npm install nodemon
    nodemon ./server.js

