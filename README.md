# PROJECT 4 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Brooklyn Restauranteur Review** is a full-stack app that uses Ruby on Rails and React to create a  space where restaurant owners can view and review other restaurants. Admin of the site can edit and delete restaurants._


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

**The Brooklyn Restaurateur Review** 
### Server (Back End)
- Have a RESTful JSON API.
- Build a Ruby on Rails server, exposing    RESTful JSON endpoints.
- Build a database with at least 3 tables:
    1 user table
    2 other tables, of your choosing
    There must be at least 1 association between your tables. (1:m or m:m)
- Utilize Rails to define models for interacting with the database.
- Implement Authentication using JWT.
- Implement working generic controller actions for full-CRUD (index, show, create, update, delete) between the 2 non-user tables AND partial-CRUD (create, at least) for the user table.

### Client (Front End)
- Have a working, interactive React app, built using npx create-react-app.
- Have at least 8 separate, rendered components in an organized and            understandable React file structure.
- Utilize functional and class React components appropriately.
- Utilize state and props in your components efficiently.
- Use only React for DOM Manipulation.
- Consume data from your Ruby on Rails API, and render that data in your components.
- Utilize React Router, for client-side routing.
- Utilize Authentication, permitting the user to:
- Register, login, and send authenticated requests.
- Perform index or show actions, whether or not they are logged in.^
- Perform create, update, and delete actions when logged in.
^ Unless it makes sense for that information to be restricted to particular users.

### Styling
- Be styled with CSS (or SCSS, if you'd prefer).
- Use flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

<br>

### Goals
- _Get to MVP by Friday_
- _To have a working project_
- _ write clean code_
- _not to struggle for too long before asking for help._

<br>

### Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _To build out and crate a front end._ |
|   React Router   | _to create routes._ |
|   Ruby on Rails   | _to create server on Rails._ |

<br>

### Client (Front End)

#### Wireframes

- Desktop Landing

![Dummy Link](https://vectr.com/claireb328/b20npH9Jvg.svg?width=2560&height=1600&select=a7c1Yulu)

- Tablet

![Dummy Link](https://vectr.com/claireb328/aMi7hop4t.svg?width=1536&height=2048&select=fKsAH9Mz3)

- Iphone

![Dummy Link](https://vectr.com/claireb328/d1xa06OVdQ.svg?width=750&height=1334&select=d1xa06OVdQpage0)



#### Component Tree

https://app.lucidchart.com/documents/edit/cfa8bcc7-79ef-44c0-8bdf-ed2522658c7a/0_0

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
    |__ shared/
      |__ Header.jsx
      |__ Footer.jsx
    |__ Restaurants/
      |__ Main.jsx
      |__ Restaurants.jsx
      |__ ShowRestaurant.jsx
    |__ User/
      |__ SignIn.jsx
      |__ Register.jsx
      |__ CreateReview.jsx
      |__ ShowReview.jsx
      |__ DeleteRestaurant.jsx
      |__ EditRestaurant.jsx

|__ services/

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Main | class |   y   |   y   | _The navigation will provide a route to each of the pages._       |
|   Restaurants    |   class    |   y   |   n   | _The Restaurants will render the images, names and neighborhood of each restaurant using cards in flexbox._      |
| ShowRestaurant | functional |   n   |   y   | _The individual restaurant card will render the post info via props._                 |
| CreateReview    | functional |   y |   n   | _The user will be able to create a review for a restaurant._ |
|  ShowReview  | functional |   n   |   n   | _The review user submitted will render to page_ |
|  EditRestaurant    | functional |   n   |   n   | _The Site Admin will be able to edit restaurants listed._ |
|  DeleteRestaurant    | functional |   n   |   n   | _The site admin will be able to delete restaurants listed._ |
|    Login    | class |   y   |   n   | _The registered Users can login._ |
|    Register    | class |   y   |   n   | _Where new user creates their account._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |


#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Back End    |    H     |     8 hrs      |     n/a      |    TBD    |
| Front End    |  H      |     8 hrs      |     n/a      |    TBD    |
| CRUD  |    L     |     8 hrs      |     n/a     |    TBD    |
| Styling |    H     |     6 hrs      |     n/a     |     TBD     |
| TOTAL               |          |     30 hrs      |    n/a     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

https://app.lucidchart.com/documents/edit/d9cb4ea4-cd35-436c-b251-cffd34e1bb0d/_Gx6M3cUx0fI?beaconFlowId=283F8C4CA710E19A

<br>

***

## Post-MVP

- Create a larger library of restaurants


***

## Code Showcase