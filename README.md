# CSbyUs site

React-Rails framework. Check out the tech spec [here](https://docs.google.com/document/d/13hSr1wCbxlcXqTAHig5SyGlGl-fy0TIPMvnF2_gAM-M/edit?usp=sharing).

## Getting started with this repo
We're going to start by cloning the repository, setting up rails, and creating our first react component.

For starters, go ahead and clone this repository into a new directory called `csbyus/practice/`:

`cd csbyus/practice/`

`git clone https://github.com/tannerljohnson/csbyus-on-rails.git`

Now, point your current directory to this new directory:

`cd csbyus-on-rails`

Okay, we're in! This repo currently has a rough outline for our application. Most of the interesting information lives in the `app` directory. 

Before moving on, let's make sure we have `ruby` and `rails` (>= 5.0) installed on our machine. Check with these commands:

`ruby -v`

`rails -v`

If you need to install or update rails, type this into your console:

`gem install rails`

Now, let's install this repository's dependencies:

`bundle install`

If you at any point get a `yarn` warning, go ahead and follow the output's directions. Usually, you just need to update:

`yarn install`

Moving on:

`rails webpacker:install`

`rails webpacker:install:react`

`rails generate react:install`

For fun, go ahead and start the server to see the site skeleton!

`rails s`

and navigate to `localhost:3000` on your browser. 

You just made a `GET` request that is registered as a route in our rails `routes.rb` file. Since we called root, we asked the `Welcome` controller to execute its `index` method, which simply returns the welcome index view. That file is located in `app/views/welcome/index.html.erb`. Rails is smart and knows how to find this based on commonly used naming conventions (we'll cover more of this later). As you can see, this view simply contains an html-like element, which is our react component of interest:

`<%= react_component 'Index' %>`

You can kill the server now (Ctrl-C).

### Generate a React component
Since we installed nice Rails-React tools at the beginning, we can use simple commands to start building React components. Try it out!

Build a component called `AboutMe`:

`rails g react:component AboutMe name:string funFact:string`

You just created a new React component in `app/javascript/components/`. Go there and check it out. 
Play around with it and make it look pretty. 

Now, change `app/views/welcome/index.html.erb` so it renders this component.
Tip: here's how you pass props into a react component in a rails view. 

`<%= react_component("HelloWorld", { greeting: "Hello from react-rails." }) %>`

Pls don't commit anything yet or worry about adding a git remote to this repository yet -- we'll get there :) 
