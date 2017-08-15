Contributions are always welcome!

First off, setup:

1. Fork the repo
2. Clone it - git clone https://github.com/{your-username-here}/react-ui-toggler
3. Enter it - cd react-ui-toggler
4. Install the dependencies - npm install
5. Run the development server - npm start

Folder Structure
app - It contains source of our component
docs - It contains documentation 
test - It contains tests or the specification for our componet.  If we add a new feature, we also want to add tests that make sure the feature works as it should and doesn't break anything.

The docs/ directory contains what is shown at https://msrikanth508.github.io/react-ui-toggler/ and should only be changed when publishing a new version.

So, in a simple list:

1. Change some stuff in app/
2. Check  http://localhost:{port} to see if it works as it should
3. Run npm test to make sure we didn't break anything
4. Add new tests to test/
5. Run npm test again, to make sure our new tests work
6. Run npm run lint and fix all style errors (if there are any, if not, cudos)
7. One last npm test again, because we edited stuff. (You can probably just skip the two previous ones. Should've read ahead ;))
8. Add the relevant files - git commit app/ test/
9. Commit with nice message.
10. Push to your fork - git push origin
11. Open a pull request

Done :), Thank you!