module.exports = {
    //questions for manager info
    manager: [ 

    {
        type: 'input',
        name: 'managerName',
        message: '',
    },
    {

    },
    {

    },
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
    ]
    
    //intern questions

    //engineer questions








}