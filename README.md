# Feed Reader Testing

**project 5 for the Google Udacity Fend Nanodegree**

## Description

The student must write a series of tests that run against the code found in the folders named *js, css, fonts* and the file *index.html*. **This code is for a web-based application that reads RSS feeds.**

The tests use the **Jasmine 2.1.2** library. The code relating to Jasmine is contained in the folder named jasmine and its sub-folders. Within that folder is a folder called spec; within that is the a file called feedreader.js; this is where the code for the tests is written.

As well as the Jasmine library, the code depends upon **Jquery** and the **Handlebars templating library**.

Here is the [project rubric](https://review.udacity.com/#!/rubrics/18/view)

To see the code in action, download it and open **index.html** in your browser.


## The Tests

### Suite 1 RRS Feeds
The first suite of tests is all about the RSS feeds definitions, the **allFeeds variable** in our application.

* Test 1: Make sure that the **allFeeds variable** has been defined and that it is not empty.

* Test 2: a test that loops through each feed in the **allFeeds object** and ensures it has a URL defined and that the URL is not empty.

* Test 3: a test that loops through each feed in the **allFeeds object** and ensures it has a name defined and that the name is not empty.

### Suite 2 The menu

* Test 4: a test that ensures the **menu element** is hidden by default.

* Test 5: a test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: the menu displays when clicked and it hides when clicked again.

### Suite 3 Intial Entries

* Test 6: a test that ensures that when the **loadFeed function** is called and completes its work, there is at least a single **.entry element** within the .feed container.
  The **loadFeed function** is asynchronous and requires the use of Jasmine's **beforeEach** and asynchronous **done() function**.

### Suite 4 New Feed Selection

* Test 7: a test that ensures when a new feed is loaded by the **loadFeed** function that the content actually changes.
  The **loadFeed function** is asynchronous and requires the use of Jasmine's **beforeEach** and asynchronous **done() function**.







