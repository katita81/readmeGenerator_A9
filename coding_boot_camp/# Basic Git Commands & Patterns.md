# Basic Git Commands & Patterns

## Beginning

`git clone <repo>`
To get a the local copy of a folder(repo). ex:

`git clone https://github.com/katita81/forking-tutorial.git`

## working alone

assuming you've made changes that you'd like to save

`git status`

show you all of the files you modififed and created. in red.

`git add .`

get you changes ready to be shipped (staging)

`git status`

now you should see your changes in green

`git commit -m "commit message"`

this locks your changes in. (sealing the box and labeling it)

`git push origin <branch-name>`

this sends you changes to the internet to update the local version (ship the changes)


## working in group

when you are about the start working

`git pull` make sure you have the latests changes from you team.

`git checkout -b <branch-name>` creates your own version of the code so you can work independetly.

make changes you want then 
follow all the steps from the working alone section

go to your repo - create a pull request
assuming no conflicts have the team review your code. compete your PR, then clicke the button to merge your branch to main/master/develop




