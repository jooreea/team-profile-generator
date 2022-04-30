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
            <title>Document</title>
        </head>
        <body>
            <header><h1>My Team</h1></header>
        `;
    const manager_html = 
            `<ul>
                <li>${manager.getRole()}</li>
                <li>Name: ${manager.getName()}</li>
                <li>ID: ${manager.getId()}</li>
                <li>Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
            `;

    var dataMembers = data.addMember;
    console.log(dataMembers);

    var member_html = [];
    dataMembers.forEach(element => {
        if (element.role == "Engineer") {
            var member = new Engineer(element.name, element.id, element.email, element.github);
            member_html.push(
                `<ul>
                    <li>${member.getRole()}</li>
                    <li>Name: ${member.getName()}</li>
                    <li>ID: ${member.getId()}</li>
                    <li>Email: <a href = "mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
                    <li>Github: <a href = "https://github.com/${member.getGithub()}">github.com/${member.getGithub()}</a></li>
                </ul>
                `
                );
            } else if (element.role == "Intern") {
                var  member = new Intern(element.name, element.id, element.email, element.school);
                member_html.push(
                    `<ul>
                        <li>${member.getRole()}</li>
                        <li> Name: ${member.getName()}</li>
                        <li> ID: ${member.getId()}</li>
                        <li>Email: <a href = "mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
                        <li> School: ${member.getSchool()}</li>
                    </ul>
                    `
                    );
                };
            });
    const all_member_html = member_html.join("");        
    const end_html = 
        `</body>
    </html>`
    return head_html + manager_html + all_member_html + end_html;
  };
  
  // Export function that generates function
  module.exports = {
    generateHtml
  };
  