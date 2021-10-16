/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'Git is a version control system that is used to interact with Git Hub.'
// console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'The master version of a file is located on Git Hub. Coders work separately on their local machines, and after making changes to the code, they can push the new code to the master repository on Git Hub. On Git Hub, those changes are tracked. If needed, you can view a long history of changes made to that master repository on Git Hub (known as snapshots). It allows collaboration similar to Google Docs, but instead of being updated automatically, updates must be pushed manually'
// console.log(gitHubDefinition)

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description : 'this initializes a local repository in the current folder',
    code : 'git init'
};
// console.log(init.description)
// console.log(init.code)


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {
    description : 'this copies a repository from GitHub and puts it on your machine',
    code : 'git clone REPOSITORY_URL'
};
// console.log(clone.description)
// console.log(clone.code)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {
    description : 'tells you about the repository',
    code : 'git status'
};
// console.log(status.description)
// console.log(status.code)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {
    description : 'this adds files to be tracked, tracks changes to files',
    code : 'git add'
};
// console.log(add.description)
// console.log(add.code)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description : 'creates a snapshot of the files I am tracking; multiple commits create a change history',
    code : 'git commit'
};
// console.log(commit.description)
// console.log(commit.code)


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {
    description : 'pushes changes made on the local machine to the master repository on GitHub',
    code : 'git push'
};
// console.log(push.description)
// console.log(push.code)