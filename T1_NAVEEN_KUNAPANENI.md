# Tutorial - 3

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 10 JUNE 2023
* *Last Modification Date*: 10 JUN 2023
* *Git URL*: <>
* * Github URL*: <>
* *Deployed URL*: <>

## Authors

* [Naveen Kunapaneni](nv676973@dal.ca)


### Process

In this tutorial i have created an registration page. User register by filling the input deatils firstname, lastname, email id, password. Each field has validations as suggested in the tutroial handout 

First name: only alphabets
Last name: only alphabets
Email Id: Valid Email format (eg: naveen_K@gmail.com)
Password: Minimun 8 - maximum 16 Alphanumeric characters, atleast one speical character

Once the user enters all field and the password matches then the user will be redirected to profilepage where the user deatils are displayed.

Created starter react app using
* npx create-react-app my-app
* cd my-app

Install dependencies
* npm install

Start the application 
* npm start

I have pushed the code to both gitlab and github.

## Deployment

I have done the deployment using netlify, linked my github account to netlify and then selected the repository to host. Then click hosted the starter application using the "deploy site" button.

## Built With

* [React](http://www.dropwizard.io/1.0.2/docs/) - Frontend framework
* [Netlify](https://www.netlify.org/) - Cloud platform used for application Deployement
* [GitHub](https://github.com/) - The version control tool
* [Visual Studio Code](https://code.visualstudio.com) - The source code editor used
* [Material UI](https://mui.com/) - Design system used to build high quality digital experience.

## Sources Used

Mugdha Agharkar, “Deploying React apps to Netlify” Brightspace. [Online]. Available: https://dal.brightspace.com/d2l/le/content/274269/viewContent/3608648/View. [Accessed: 24-May-2023].


harikatalari08, “Build a Basic React App” GeeksForGeeks. [Online]. Available: https://www.geeksforgeeks.org/build-a-basic-react-app-that-display-hello-world/. [Accessed: 24-May-2023].

“Regex Expression for Gmail,” Regexr.com. [Online]. Available: https://regexr.com/3e48o. [Accessed: 11-Jun-2023].

R. Shah’s, “Javascript regular expression password validation having special characters,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters. [Accessed: 11-Jun-2023].

M. Durrant, “React doesn’t render autocomplete off,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/37503656/react-doesnt-render-autocomplete-off. [Accessed: 11-Jun-2023].

A. Kinagi, “Disable Unnecessary escape character: \/ no-useless-escape,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/47277133/disable-unnecessary-escape-character-no-useless-escape. [Accessed: 11-Jun-2023].



### File Name - Register.js

*Line 59 

```
const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,16}$/;

```

The code above was created by adapting the code in [Rujoota Shah](https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters) as shown below: 

```
var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

```

- <!---How---> The code in [Rujoota Shah](https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters) was implemented by Rujoota Shah
- <!---Why---> [Rujoota Shah](https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters) Code was used because it uses a regex expession tovalidate password string
- <!---How---> [Rujoota Shah](https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters) Code was modified such that it accepts minimum 8 charactes and maximum is 16, atleast one special character in the password



## Acknowledgments

* [Registration-page-image](https://www.freepik.com/free-photo/individuality-concept-among-paper-planes_19116923.htm#query=landing%20approach&position=43&from_view=keyword&track=ais)
