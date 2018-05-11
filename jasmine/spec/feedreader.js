/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
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
         * empty.
         */
        // allFeeds is an array of objects that contains the name
        // and URL for the side menu
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
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

        /* A test that loops through each feed
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

    /* A new test suite named "The menu" */
    describe('The menu', function() {

        // A test that ensures the menu element is
        // hidden by default. The menu is hidden when the body element
        // has class 'menu-hidden'.

        it('has menu element hidden by default', function() {
            // the HTML body element contains the class that toggles
            // between 'menu-hidden' and ''
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('toggles the menu display when clicked', function() {
            // '.menu-icon-link' is the class of the menu icon
            const menu = document.querySelector('.menu-icon-link');
            // the body has a class of 'menu-hidden' by default
            menu.click();
            // when the menu icon is clicked, the menu of links should appear
            // because the class 'menu-hidden' has been removed from
            // the body element.
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // click the menu icon again
            menu.click();
            // the menu of links should now be hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* A test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test requires
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

    /* A test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */

        let articleText;
        beforeEach(function(done) {
            loadFeed(3, done); // Linear Digressions
            // Get the current '.entry' for later comparison
            articleText = document.querySelector('.entry').textContent; // Udacity Blog entry
        });

        beforeEach(function(done) {
            loadFeed(1, done); // CSS Tricks
        })

        it('should have new content when new feed is loaded', function(done) {
            const articleText2 = document.querySelector('.entry').textContent;
            // The two texts should not be the same
            expect(articleText2).not.toEqual(articleText);
            done();
        });
    });

}());