// creating the manager card
const addManager = manager => {
    return `
    <div class="col-4 m-2 p-2 border border-dark card">
        <div class="card-header">
        <h2>Manager</h2>
        <h3>${manager.name}</h3>
        </div>
        <div class="card-body">
            <p>ID: ${manager.id}</p>
            <p>E-mail: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.office}</p> 
        </div>    
    </div>    
        `
}

// creating the intern card
const addIntern = intern => {
    return `
    <div class="col-4 m-2 p-2 border border-dark card">
        <div class="card-header">
        <h2>Intern</h2>
        <h3>${intern.name}</h3>
        </div>
        <div class="card-body">
            <p>ID: ${intern.id}</p>
            <p>E-mail: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p> 
        </div>    
    </div>    
        `
}

// creating the engineer card
const addEngineer = enginner => {
    return `
    <div class="col-4 m-2 p-2 border border-dark card">
        <div class="card-header">
        <h2>Engineer</h2>
        <h3>${Engineer.name}</h3>
        </div>
        <div class="card-body">
            <p>ID: ${engineer.id}</p>
            <p>E-mail: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p> 
        </div>    
    </div>    
        `
}

const generateTeamHTML = teamMemberCards => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Directory</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
        <header class="hero">
            <h1>Team Directory</h1>
        </header>
            <section class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Member Cards-->
                    ${teamMemberCards}
                </div>
            </section>
    
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>    
    </body>
    </html>
    `;
}

module.exports = templateHtml;
    