## **Git and GitHub**





**Git Configuration   // creating new git account global/specific**



1\. git config --global user.name "Mohd-Amer-2957"                    // I used same name, email as in Github

2\. git config --global user.email "mohdamer2957@gmail.com"

3\. git config --list                                          // show your account



4\. git clone link\_from\_github-repo  // to clone repo in local system

5\. git status                       // status of code

5\. ls                               // list the all files

6\. ls -a (or) ls -Force             // list the all files including hidden one











###### **git status   (in four stages)**



**1.untracked :**  new files that git doesn't yet track

**2.modified  :**  Done some changes in existing file

**3.unmodified:**  Unchanged

**4.staged    :**  File is ready to be committed





1. **git add file\_name**               : adds new or changed files in working directory to the git **staging** area.    (to add all files at a time: **git add .)**

2\. **git commit -m "some message"**    : confirming the changes to be proceeded. (Legal authority to changes)

3\. **git push origin main**            : push the local code to Original GitHub Code.  (local to remote)

4\. **git restore file\_name           :** to restore the old file from GitHub.

**5. git restore --staged file\_name**  : to unstage a file

