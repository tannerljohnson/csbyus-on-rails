# CSbyUs site

React-Rails framework. Check out the tech spec [here](https://docs.google.com/document/d/13hSr1wCbxlcXqTAHig5SyGlGl-fy0TIPMvnF2_gAM-M/edit?usp=sharing).

## Getting started with this repo
We're going to start by cloning the repository, setting up rails, and creating our first react component.

For starters, go ahead and clone this repository into a new directory called `csbyus/practice/`:
```
cd csbyus/practice/
git clone https://github.com/tannerljohnson/csbyus-on-rails.git
```

Now, point your current directory to this new directory:

```
cd csbyus-on-rails
```

Okay, we're in! This repo currently has a rough outline for our application. Most of the interesting information lives in the `app` directory. 

Before moving on, let's make sure we have `ruby` and `rails` (>= 5.0) installed on our machine. Check with these commands:
```
ruby -v
rails -v
```
If you need to install or update rails, type this into your console:
```
gem install rails
```

Now, let's install this repository's dependencies:
```
bundle install
```
If you at any point get a `yarn` warning, go ahead and follow the output's directions. Usually, you just need to update:
```
yarn install
```
Moving on:
```
rails webpacker:install
rails webpacker:install:react
rails generate react:install
```
For fun, go ahead and start the server to see the site skeleton!
```
rails s
```
and navigate to `localhost:3000` on your browser. 

You just made a `GET` request that is registered as a route in our rails `routes.rb` file. Since we called root, we asked the `Welcome` controller to execute its `index` method, which simply returns the welcome index view. That file is located in `app/views/welcome/index.html.erb`. Rails is smart and knows how to find this based on commonly used naming conventions (we'll cover more of this later). As you can see, this view simply contains an html-like element, which is our react component of interest:
```
<%= react_component 'Index' %>
```
You can kill the server now (`Ctrl-C`).


### Keep Gemfile clean
Since we are using different Gemfiles locally and remotely, it might be helpful to tell git you want to start ignoring changes to Gem-related files. To do so, run:
```
git update-index --assume-unchanged path/to/file
```
When you make changes to Gemfile want to start keeping track again
```
git update-index --no-assume-unchanged path/to/file
```

### Generate a React component
Since we installed nice Rails-React tools at the beginning, we can use simple commands to start building React components. Try it out!

Build a component called `AboutMe`:
```
rails g react:component AboutMe name:string funFact:string
```
You just created a new React component in `app/javascript/components/`. Go there and check it out. 
Play around with it and make it look pretty. 

Now, change `app/views/welcome/index.html.erb` so it renders this component.
Tip: here's how you pass props into a react component in a rails view. 
```
<%= react_component("HelloWorld", { greeting: "Hello from react-rails." }) %>
```
Pls don't commit anything yet or worry about adding a git remote to this repository yet -- we'll get there :) 

## Up and running with Git

1. Clone this repo into an appropriate directory.
```
$> mkdir csbyus
$> cd csbyus
$> git clone https://github.com/tannerljohnson/csbyus-on-rails.git 
$> cd csbyus-on-rails
```

2. Configure some stuff. 
```
$> git config --local user.name "YOUR_FIRSTNAME YOUR_LASTNAME"
$> git config --local user.email "your-email@whatever.yo"
$> git config --local push.default simple
```

3. Add our remote. 
```
$> git remote add origin https://github.com/tannerljohnson/csbyus-on-rails.git
```

To integrate code from our repo (relevant when changes have been pushed by someone), use this command:
```
$> git pull
```

All sub-team development work will happen on a different branch. Read more about branching [here](https://git-scm.com/docs/git-init).

*Never* `commit` and `push` to `master`. 
*Always* `commit` and `push` to a separate branch, and then `merge` with master. 

To create a new branch off `master` or to switch back to a branch that already exists, use this command:
```
$> git checkout -b <your-branch-name>
```

To `commit` and `push` to a branch called `development`, do the following (step one verified you're on this branch):
```
$> git branch
>>> *development
$> git add .
$> git commit -m "this should be a detailed commit message the describes changes made"
$> git push
```

To check the status of unstaged/staged (what happens in the `add .` step) files, as well as commited files, use 
```
$> git status
```

*Do not, under any circumstances, perform a hard reset or a force push on your repo*

## Install Material-UI with yarn
`material-ui` website gives instructions on how to install with `npm`. However, our project is using `yarn` as the package manager. Here is how you should install `material-ui` with `yarn`:

```
$ cd /path_to_project_folder
$ yarn add @material-ui/core
```

If you need to use material-ui icon, also add
```
$ yarn add @material-ui/icons
```

At last, run
```
$ yarn install
```
## sqlite3 error
Check issue #27 for sqlite3 error
