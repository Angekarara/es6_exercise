User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js
dearangeage of12your teachermuhizisubject ofMathneeds to see you

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js
dear ange age of 12 your teacher muhizisubject ofMathneeds to see you

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js
dear ange age of12 your teachermuhizi subject ofMath needs to see you

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js ^C

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js
dear ange age of 12 your teachermuhizi subject of Math needs to see you

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js
dear ange age of 12 your teacher muhizi subject of Math needs to see you

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js
Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js
dearange age of 12 your teacher muhizi subject of Math needs to see you

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6
$ node exercise1.js
dear ange age of 12 your teacher muhizi subject of Math needs to see you

using template literals
User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6 (main)
$ node exercise1.js
ange your age is 12 and your teacher is muhizi the subject is Math

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6 (main)
$ git add .

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6 (main)
$ git commit -m "using template literals"
User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6 (main)
$ node exercise6.js 
0
1
2
3
4
5
6
7
8
9

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6 (main)
$ node exercise6.js 
4
1
2
3
9
5
6
7
8
9

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6 (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        exercise4.js
        exercise5.js
        exercise6.js

nothing added to commit but untracked files present (use "git add" to track)

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6 (main)
$ git add .

User@DESKTOP-18JCNLB MINGW64 ~/Desktop/ES6 (main)
$ git commit -m "exercise6"
[main 8e42f0d] exercise6
 3 files changed, 25 insertions(+)
 create mode 100644 exercise4.js
 create mode 100644 exercise5.js
 create mode 100644 exercise6.js

 
in this2.js the value of this inside addScoop() refers to dessert. Since an arrow function is passed to setTimeout(), it's using its surrounding context to determine what this refers to inside itself. So since this outside of the arrow function refers to dessert, the value of this inside the arrow function will also refer to dessert.

in this3.js i changed the addScoop() method to an arrow function and it didn't work becausearrow functions inherit their this value from their surrounding context. Outside of the addScoop() method, the value of this is the global object. So if addScoop() is an arrow function, the value of this inside addScoop() is the global object. Which then makes the value of this in the function passed to setTimeout() also set to the global object!