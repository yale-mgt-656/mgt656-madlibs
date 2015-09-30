# Madlibs project
For this activity, you will use what you've learned about git to work collaboratively as a classroom to fill out a couple Madlibs. The class should be divided into groups responsible for Madlibs stories, nouns, verbs, adjectives, and adverbs. 

## How To Setup This Activity

**1) Form a group of around size 10 with your neighbors.**

**2) We will tell your group whether you guys are a story, verb, noun, adjective, or adverb group. And we will also give your group a number!**

  The type of group and your group number is really important! When you follow the rest of the instructions, make sure you remember these 2 things.

**3) Make a Github account if you haven't already got one for the group.**
  
![Signing up for Github](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/signup.png)

**4) Fork the repository on Github.** 

Forking means to make a copy of the code but attach it to your own Github repository so that you can make changes.
  * Find the Madlibs code here: [https://github.com/yale-mgt-656/mgt656-madlibs](https://github.com/yale-mgt-656/mgt656-madlibs)

  If you need more information, check out [https://help.github.com/articles/fork-a-repo/](https://help.github.com/articles/fork-a-repo/)

**5) Edit the file you want on Github.** 

You have to create a new file.
  * Click on the plus sign to make a new file. Make sure you are in the right folder first.

![Making a new file](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/new.png)
  
  * If you want edit an already existing file, click the pencil logo near the top of the page. Here's an example of me trying to edit the file `/lib/misc.js` (you shouldn't be editing this file). 

![Making a new file](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/edit.png)

**6) Commit your code with a nice and useful comment.**

![Making a new file](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/commit.png)

  After clicking commit, your code should have successfully saved! Once you've done this, all of the changes you've made become visible to anyone else with the same repository. That way, many groups can work on the code-base at the same time! Really cool. 

  Watch out though! If you accidentally edit and commit changes to another file (one that you were not supposed to), and another group also changes the same file, there may result in a **Merge Conflict. Come see Kyle or the TA's for help!**).

## After You Are Done With Your Changes

**7) Create a pull request.**

  Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary. 

  Click on the logo at right to get started.
  ![Starting the pull request](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/pull.png)

  Then, once you get to another page, click the blue link.
  ![Continuing the pull request](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/pull2.png)

  Finally, click the create button to checkout the commit. 
  ![Finishing the pull request](https://github.com/yale-mgt-656/mgt656-madlibs/blob/master/images/pull3.png)

  If you need extra help, check this out [https://help.github.com/articles/using-pull-requests/](https://help.github.com/articles/using-pull-requests/) or just come see a TA.

**8) The instructor will merge in everybody's work.** 

Bother Kyle or the TAs if nothing's working.

## What To Do In This Activity

* The Story-groups should all have a number. Each group should create a new html file called `mystory-i.html` where **i** is your number to make a story. Stories should be put into the stories folder `/stories`. An example of a story is already in the folder (see `/stories/layout.html` or `/stories/layout2.html`) **Don't change these example files!**

  Stories are written in HTML! We are not going to be styling it, so forget about the CSS. Remember the general structure of HTML code: (No need to include the DOCTYPE stuff here).

    ```html
    <html>
      <body>
        Insert Code Here.
      </body>
    </html>
    ```
  You may notice that there are weird `{{...}}` everywhere in the example HTML codes. This stuff is super important! It tells our little node app that we need a(n) adjective/verb/adverb/noun at a certain place. When you write your own stories, make sure to do the same! For example, to denote an adjective, used `{{adjectives.get()}}`. The others follow the same style! 

* The adjective, noun, and verb groups should work on their files. Each group here will have a number as well! Adjective, noun, and verb file should be put in their respective folders. For example, verbs should be put in `/pos/verbs/verbs-i.js` where **i** is a placeholder for your group number.

  Examples of verbs, adjectives, etc files are found in the corresponding `starter.js` file in the folder in `/pos`. **Don't change these example files!.** Instead, make a new file.

    ```javascript
    module.exports.adjectives = [
      Insert Words Here.
    ];
    ```
  Notice that there is a very specific structure when listing the words in this file. Our node app waits to grab the array of words that is exported from this file. Therefore, don't forget the `module.exports.adjectives = ...`!

## Have Fun and Ask Questions!

## How to install (Not Necessary)

Everything should be able to be done on the Github webpage (https://github.com/yale-mgt-656/mgt656-madlibs). But if for some reason, you need to install the repo, here are the instructions. 

    git clone https://github.com/yale-mgt-656/mgt656-madlibs.git
    
Install the dependencies. If you get errors, make sure you set environment variables for PORT and IP.
    
    export PORT='3000'
    export IP='localhost'
    npm install
    
Run the code. Install nodemon if you don't have it!

    npm install nodemon
    nodemon ./server.js

