const render = require('./src/render');
const inquirer = require('inquirer');
const fs = require('fs');

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}.html`, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee id number?',
        name: 'id',
        validate(input) {
            if (isNaN(input)) {
                throw Error('Please enter a number.');
            }
            return true;
          },
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate(input) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
              return true;
            }
            throw Error('Please provide a valid email.');
          },
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office',
        validate(input) {
            if (isNaN(input)) {
                throw Error('Please enter a number.');
            }
            return true;
          },
    },
    {
        type: 'recursive',
        message: 'Would you like to add a team member?',
        name: 'addMember',
        prompts: [
            {
                type: 'list',
                message: 'What is the role of the team member?',
                name: 'role',
                choices: [
                    "Engineer",
                    "Intern",
                ],
            },
            {       
                type: "input",
                message: "What is the name of the team member?",
                name: 'name',
            },
            {
                type: "input",
                message: "What is the employee id of the team member?",
                name: 'id',
                validate(input) {
                    if (isNaN(input)) {
                        throw Error('Please enter a number.');
                    }
                    return true;
                  },
            },
            {
                type: "input",
                message: "What is the email address of the team member?",
                name: 'email',
                validate(input) {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                      return true;
                    }
                    throw Error('Please provide a valid email.');
                  },
            },
            {
                type: "input",
                message: "What is the github username of the engineer?",
                name: 'github',
                when(answers) {
                    return answers.role === "Engineer"
                },
            },
            {
                type: "input",
                message: "What school does the intern go to?",
                name: 'school',
                when(answers) {
                    return answers.role === "Intern"
                },
            },
        ]
    },    
])
.then((data) => {
    console.log(data);
    const html = render.generateHtml(data);
    console.log(html);
    writeToFile("index", html);
});

