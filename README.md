
  # Gol
youtube Demo - <a href="https://youtu.be/XU11FVOkBlo">
  
Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view project in browser
  
Install Firebase CLI: You need to have Node.js and npm installed on your machine. Then, you can install Firebase CLI using npm:
<code> npm install -g firebase-tools </code>

Login to Firebase: Use the following command to log in to your Firebase account:
<code> firebase login </code>

Initialize your project: Navigate to your project’s root directory in your terminal and run:
<code> firebase init </code>

This will start a wizard to help you set up your project. When asked, choose ‘Hosting’, then select the Firebase project you want to connect to.

Deploy your website: Firebase will create a public directory in your project root. Place your website files in this directory. Then, you can deploy your website using:
<code> firebase deploy </code>
