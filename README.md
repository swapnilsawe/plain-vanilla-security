# plain-vanilla-security
Create a Directory 
C:\github\gitPersonal> md plain-vanilla-security
Then create react app
C:\github\gitPersonal>npx create-react-app plain-vanilla-security
C:\github\gitPersonal>cd plain-vanilla-security
Now download okta Auth JS
npm install @okta/okta-auth-js --save
Now install okta-react react-router-dom
npm install @okta/okta-react react-router-dom --save

I created a new developer.okta.com application and created a new Application from dashboard –
AppName: My SPA
Base URL: http://localhost:3000
Login Redirect URL: http://localhost:3000/implicit/callback
LogOut URL : http://localhost:3000
Grant Type: Authorization Code

Client ID: 0oa4pXXXXXXXCeNVe4x6
Issuer URL: https://dev-NNNNNNN.okta.com/oauth2/default
Org URL:https://dev-NNNNNNN.okta.com
