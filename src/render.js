const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

function generateHtml(data) {
    const manager = new Manager(data.name, data.id, data.email, data.office);
    console.log(manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber());

    const head_html = 
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>Team Profile</title>
        </head>
        <body>
        <div class="container">
        <header><h1 class="text-center p-5">My Team</h1></header>
        </div>
        `;
    const manager_html = 
            `<div class="container">
            <div class="row">
            <div class="col">
            <div class="card mb-4" style="width: 18rem;">
            <ul class="list-group">
            <li class="list-group-item active">${manager.getRole()}</li>
            <li class="list-group-item">Name: ${manager.getName()}</li>
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
            </div>
            </div>
            `;

    var dataMembers = data.addMember;
    console.log(dataMembers);

    var member_html = [];
    dataMembers.forEach(element => {
        if (element.role == "Engineer") {
            var member = new Engineer(element.name, element.id, element.email, element.github);
            member_html.push(
                `<div class="col">
                <div class="card mb-4" style="width: 18rem;">
                <ul class="list-group">
                <li class="list-group-item active">${member.getRole()}</li>
                <li class="list-group-item">Name: ${member.getName()}</li>
                <li class="list-group-item">ID: ${member.getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href = "https://github.com/${member.getGithub()}">github.com/${member.getGithub()}</a></li>
                </ul>
                </div>
                </div>
                `
                );
            } else if (element.role == "Intern") {
                var  member = new Intern(element.name, element.id, element.email, element.school);
                member_html.push(
                    `<div class="col">
                    <div class="card mb-4" style="width: 18rem;">
                    <ul class="list-group">
                    <li class="list-group-item active">${member.getRole()}</li>
                    <li class="list-group-item"> Name: ${member.getName()}</li>
                    <li class="list-group-item"> ID: ${member.getId()}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
                    <li class="list-group-item"> School: ${member.getSchool()}</li>
                    </ul>
                    </div>
                    </div>
                    `
                    );
                };
            });
    const all_member_html = member_html.join("");        
    const end_html = 
        `</div>
        </div>
        </div>
        </body>
    </html>`
    return head_html + manager_html + all_member_html + end_html;
  };
  
  // Export function that generates function
  module.exports = {
    generateHtml
  };
  