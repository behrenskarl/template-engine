module.exports = {
    //questions for manager info
    manager: [ 

    {
        type: 'input',
        name: 'managerName',
        message: 'What is the Managers name?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the Managers email?',
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is the Managers ID number?',
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is the Managers Office Number?',
    }
    ],

    //what team member do you want to add? intern/engineer/done
    employeeChoice: [
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'What type of member would you like to add to the team?',
            choices: [
                'Engineer',
                'Intern',
                'Done',
            ]
        },
    ],
    
    //intern questions
    intern: [
        {
            type: 'input',
            name: 'internName',
            message: 'What is the Interns name?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the Interns Email?',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the Interns ID Number?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern attend?'
        }
    ],

    //engineer questions

    engineer: [
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the Engineers Email?',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the Engineers ID Number?',
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'What is the Engineers GitHub username?'
        }
    ]






}