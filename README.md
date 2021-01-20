# React Course

## Table of contents

- [What is a framework?](#what-is-a-framework?)
- [React.js](#React.js)
- [JSX](#jsx)
- [Props](#Props)
- [Class Component](#Class-Component)
- [State](#State)
- [Component Lifecycle](#Component-Lifecycle)
- [Redux](#Redux)
- [React Contex](#React-Contex)
- [React Hooks](#React-Hooks)
- [REST](#REST)
- [React Testing](#React-Testing)
- [Cookies vs Tokens](#Cookies-vs-Tokens)
- [Projects](#projects)

# What is a framework?

So we get Javascript libraries and frameworks and a Javascript library in the end is a third-party package, doesn't have to be, you could also write it yourself and and just share it across multiple projects but in the end it's a package which you bring into your project that adds certain functionalities. So libraries typically are focused on one or a few core tasks and they help you with that.

![Screen](/screens/1.png)

Now frameworks on the other hand also are third-party packages, they also add functionalities but typically they add more functionalities, also from different areas and they typically also give you certain rules or certain structure on how you should build your Javascript driven application and therefore they force you into a certain rule set but at the same time by doing that, they often make it easier for you to build an application and make it easier for you to focus on your core business logic and spend less time on all the nitty-gritty details.

So they typically provide a complete structure for building Javascript applications
and the big examples we got there, not the only ones but the big examples we got are Angular, Vue.js and React.js,(React.js is kind of an edge case, it's actually a library but a pretty big one with a bunch of different features built in and it spawned a huge ecosystem that effectively together forms a framework you could say.)

![Screen](/screens/2.png)

# React.js

![Screen](/screens/3.png)

React is js library. React’s ultimate purpose is to show content (HTML) to users and handle user interaction.
React is split into to separate libraries.
“React” knows what a component is and how to make components work together.
“ReactDOM” knows how to take a component and make it show up in the DOM.

![Screen](/screens/4.png)

# JSX

![Screen](/screens/5.png)

# Props

![Screen](/screens/6.png)

# Class Component

![Screen](/screens/7.png)

# State

![Screen](/screens/8.png)

# Component Lifecycle

![Screen](/screens/9.png)
![Screen](/screens/25.png)

## Mounting

1. Constructor
   > The first thing that gets called is your component constructor, if your component is a class component.

Most Common Use Case For Constructor:

Setting up state, creating refs and method binding.

2. getDerivedStateFromProps

> When mounting, getDerivedStateFromProps is the last method called before rendering. You can use it to set state according to the initial props.

Most Common Use Case For getDerivedStateFromProps (during mount):

Returning a state object based on the initial props.

3. render

> It returns the JSX of your actual component.

Most Common Use Case For Render:

Returning component JSX.

4. componentDidMount

> After we’ve rendered our component for the first time, this method is called.

Most Common Use Case for componentDidMount:

Starting AJAX calls to load in data for your component.

## Updating

1. getDerivedStateFromProps

> If you need to update your state based on a prop changing, you can do it here by returning a new state object.

Most Common Use Case:

Updating state based on props, when the props themselves aren’t enough.

2. shouldComponentUpdate

> We have new props. Typical React dogma says that when a component receives new props, or new state, it should update.

Most Common Use Case:

Controlling exactly when your component will re-render.

3. render

Same as before!

4. getSnapshotBeforeUpdate

> it’s called between render and the updated component actually being propagated to the DOM. It exists as a last-chance-look at your component with its previous props and state.

Most Common Use Case:

Taking a look at some attribute of the current DOM, and passing that value on to componentDidUpdate.

5. componentDidUpdate

> Now, our changes have been committed to the DOM.
> In componentDidUpdate, we have access to three things: the previous props, the previous state, and whatever value we returned from getSnapshotBeforeUpdate.

Most Common Use Case for componentDidUpdate:

Reacting to committed changes to the DOM.

## Unmounting

1. componentWillUnmount

> Basically, clean up anything to do that solely involves the component in question — when it’s gone, it should be completely gone.

Most Common Use Case for componentWillUnmount:

Cleaning up any leftover debris from your component.

## Errors

1. getDerivedStateFromError

> Something broke. Not in your component itself, but one of its descendants.

Most Common Use Case for getDerivedStateFromError:

Updating state to display an error screen.

2. componentDidCatch

> it is triggered when an error occurs in a child component. The difference is rather than updating state in response to an error, we can now perform any side effects, like logging the error

Most Common Use Case for componentDidCatch:

Catching and logging errors.

# Redux

![Screen](/screens/10.png)
![Screen](/screens/11.png)

Middleware
![Screen](/screens/12.png)
![Screen](/screens/13.png)
![Screen](/screens/14.png)

![Screen](/screens/15.png)
![Screen](/screens/16.png)
![Screen](/screens/17.png)

# React Contex

![Screen](/screens/18.png)
![Screen](/screens/19.png)

# React Hooks

![Screen](/screens/20.png)
![Screen](/screens/21.png)

https://medium.com/swlh/the-ugly-side-of-hooks

# REST

REST Convention - standardized system for designing API’s

![Screen](/screens/22.png)

# React Testing

![Screen](/screens/23.png)

Source: https://blog.logrocket.com/comparing-react-testing-libraries

# Cookies vs Tokens

![Screen](/screens/24.png)

# Projects

### Streams

App which handle with:

- react router
- authentication in react using `google OAuth`
- redux form
- CRUD operations in react/redux using `json-server`
- error handling
- react portals

Enable debug session in redux-devtools

```
http://localhost:3000/?debug_session=debbuging
```
