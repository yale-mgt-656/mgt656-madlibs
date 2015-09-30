# Madlibs project
For this activity, you will use what you've learned about git to work collaboratively as a classroom to fill out a couple Madlibs. The class should be divided into groups responsible for Madlibs stories, nouns, verbs, adjectives, and adverbs. 

## How to do this activity

1. Form a group of around size N.
2. We will tell your group whether you guys are a story, verb, noun, adjective, or adverb group. And we will also give your group a number!
3. Make a Github account if you haven't already got one for the group. 
  
![Signing up for Github](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/signup.png)

4. Fork the repository on Github
  * Find the Madlibs code here: [https://github.com/yale-mgt-656/mgt656-madlibs](https://github.com/yale-mgt-656/mgt656-madlibs)
5. Edit the file you want on Github. You have to create a new file.
  * Click on the plus sign to make a new file. Make sure you are in the right folder first. 

![Making a new file](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/new.png)
  
  * If you want edit an already existing file, click the pencil logo near the top of the page. Here's an example of me trying to edit the file `./lib/misc.js` (you shouldn't be editing this file). 

![Making a new file](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/edit.png)

6. Commit your code with a nice and useful comment.

![Making a new file](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/commit.png)

  After clicking commit, your code should have successfully saved! 

## After you are done with all your changes...

8. Create a pull request.

  Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary. 

  Click on the logo at right to get started.
  ![Starting the pull request](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/pull.png)

  Then, once you get to another page, click the blue link.
  ![Continuing the pull request](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/pull2.png)

  If you need extra help, check this out [https://help.github.com/articles/using-pull-requests/](https://help.github.com/articles/using-pull-requests/) or just come see a TA.

9. The instructor will merge in everybody's work. Bother Kyle or the TAs if nothing's working.

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

