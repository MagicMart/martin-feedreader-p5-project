/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    'use strict';
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        // allFeeds is an array of objects that contains the name
        // and URL for the side menu
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL and it is not empty', function() {
            allFeeds.forEach(function(element, index) {
                const url = allFeeds[index].url;
                expect(url).toBeDefined();
                expect(url).not.toBe('');

            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name and it is not empty', function() {
            allFeeds.forEach(function(element, index) {
                const name = allFeeds[index].name;
                expect(name).toBeDefined();
                expect(name).not.toBe('');

            });
        });


    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('has menu element hidden by default', function() {
            // the HTML body element contains the class that toggles
            // between 'menu-hidden' and ''
            const menu = document.body.getAttribute('class');
            expect(menu).toContain('menu-hidden');
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('toggles the menu display when clicked', function() {
            // '.menu-icon-link' is the class of the menu
            const menu = document.querySelector('.menu-icon-link');
            const body = document.querySelector('body');
            // the body has a class of 'menu-hidden' by default
            menu.click();
            // when the menu icon is clicked, the menu of links should appear
            expect(body.classList).not.toContain('menu-hidden');
            // click the menu icon again
            menu.click();
            // the menu of links should now be hidden
            expect(body.classList).toContain('menu-hidden');
        });


    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            // Make sure test does not run until the loadFeed function has completed
            loadFeed(0, done);
        });

        it('should have at least one .entry element', function(done) {
            // Check that there is a element with class of entry
            const article = document.querySelector('.entry');
            expect(article).not.toBe(null);
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let articleText;
        beforeEach(function(done) {
            // Get the current '.entry' for later comparison
            articleText = document.querySelector('.entry').textContent; // Udacity Blog entry
            loadFeed(1, done);

        });

        it('should have new content when new feed is loaded', function(done) {
            const articleText2 = document.querySelector('.entry').textContent; // Css Tricks entry
            // The two texts should not be the same
            expect(articleText2).not.toEqual(articleText);
            done();
        });
    });

}());