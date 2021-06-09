const headerData = ['$Git Cmd Name', '$Git Command', '$Git Command Description'];
const gitName = [
                  'git config','git init','git clone', 'git add', 'git commit', 
                  'git diff','git reset', 'git status', 'git rm', 'git log', 
                  'git show', 'git tag', 'git branch', 'git checkout', 'git merge',
                  'git remote', 'git push', 'git pull', 'git stash'
                ];
const gitCMD = ['git config –global user.name “[name]”',
                 'git init [repository name]',
                 'git clone [url]',
                 'git add [file]',
                 'git commit -m “[ Type in the commit message]”',
                 'git diff',
                 'git reset [file]',
                 'git status',
                 'git rm [file]',
                 'git log',
                 'git show [commit]',
                 'git tag [commitID]',
                 'git branch',
                 'git checkout [branch name]',
                 'git merge [branch name]',
                 'git remote add [variable name] [Remote Server Link]',
                 'git push [variable name] master',
                 'git pull [Repository Link]',
                 'git stash save /git stash pop / git stash list /  git stash drop'
                ];
const gitDesc = [
                'This command sets the author name and email address respectively to be used with your commits.',
                'This command is used to start a new repository.',
                'This command is used to obtain a repository from an existing URL.',
                'This command adds a file to the staging area.',
                'This command records or snapshots the file permanently in the version history.',
                'This command shows the file differences which are not yet staged.',
                'This command unstages the file, but it preserves the file contents.',
                'This command lists all the files that have to be committed.',
                'This command deletes the file from your working directory and stages the deletion.',
                'This command is used to list the version history for the current branch.',
                'This command shows the metadata and content changes of the specified commit.',
                'This command is used to give tags to the specified commit.',
                'This command lists all the local branches in the current repository.',
                'This command is used to switch from one branch to another.',
                'This command merges the specified branch’s history into the current branch.',
                'This command is used to connect your local repository to the remote server.',
                'This command sends the committed changes of master branch to your remote repository.',
                'This command fetches and merges changes on the remote server to your working directory.',
                `This command temporarily stores all the modified tracked files.
                    Restores the most recently stashed files.
                    Lists all stashed changesets. 
                    And discards the most recently stashed changeset`
                ];
const dataArr = [gitName,gitCMD, gitDesc];

function tableCreate() {
    //body reference 
    const body = document.getElementsByTagName("body")[0];
  
    // create elements <table> and a <tbody>
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // Headers creation
        // table row creation
        let rowHeader = document.createElement("tr");
        for (let i = 0; i < headerData.length; i++) {
          // create element <th> and text node 
          //Make text node the contents of <th> element
          // put <th> at end of the table row
          let headerCell = document.createElement("th");
          let headerCellText = document.createTextNode(`${headerData[i]}`);
          //console.log(headerData[i]);
    
          headerCell.appendChild(headerCellText);
          rowHeader.appendChild(headerCell);
        }
    
        //row added to end of table body
        tblBody.appendChild(rowHeader);
   

// cells creation
for (var j = 0; j < gitName.length; j++) {
    let row = document.createElement("tr");

    for(let i = 0; i< dataArr.length; i++){
        let cell = document.createElement("td");
        let cellText = document.createTextNode(dataArr[i][j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblBody.appendChild(row);
}

  
    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to 
    //tbl.setAttribute("border", "2");
  }
  tableCreate();

