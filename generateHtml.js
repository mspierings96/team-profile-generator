var cards = [];

function makeHTML(team) {
  // make html hereee

  for (let i = 0; i < team.length; i++) {
    console.log(team[i]);
    if (team[i].title === "Manager") {
      managerCard(team[i]);
    }
    if (team[i].title === "Engineer") {
      engineerCard(team[i]);
    }

    if (team[i].title === "Intern") {
      internCard(team[i]);
    }
  }

  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
    </head>
    <body>
        ${cards.join("")}
    </body>
    </html>`;

  return html;
}

function managerCard(manager) {
  var card = `
    <div>
        <h1>Name: ${manager.name}</h1>
            <h2>Title: ${manager.title}</h2>
            <h3>ID: ${manager.id}</h3>
            <h3>Email: ${manager.email}</h3>
            <h3>Office #: ${manager.officeNumber}</h3>

    </div>
    `;
  cards.push(card);
}

function internCard(intern) {
  var card = `
    <div>
        <h1>Name: ${intern.name}</h1>
        <h2>Title: ${intern.title}</h2>
        <h3>ID: ${intern.id}</h3>
        <h3>Email: ${intern.email}</h3>
        <h3>School: ${intern.school}</h3>
    </div>
    `;
  cards.push(card);
}

function engineerCard(engineer) {
  var card = `
    <div>
        <h1>Name: ${engineer.name}</h1>
        <h2>Title: ${engineer.title}</h2>
        <h3>ID: ${engineer.id}</h3>
        <h3>Email: ${engineer.email}</h3>
        <h3>Github: ${engineer.github}</h3>
    </div>
    `;
  cards.push(card);
}

module.exports = makeHTML;
