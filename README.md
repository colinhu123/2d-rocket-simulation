# 2D Rocket Simulation

## Category
- About the Project
- Block Diagram
- Live Demo
- Project Setup
- Expansion
- Customize configuration


## About the Project

### Functions of this Project
User can use this project to estimate the orbit of a rocket or a satllite and providing a comprehensive opertaion which can closely to reality to simulate the orbit of launch vehicle and remainings with a visualized pannel without the effect of aerodynamic, multibody question, light pressure, friction of atmosphere, irregular gravitation field resulting from uneven earth surface and so on. This project provides user with the flying orbit and allowing user to observe the angle of attack. And also, some rockets including CZ-5, one of the China's largest rocket, have been saved in the file `rocket-config.json` in file folder config already. Meanwhile, user can simulate the orbit of satllite no matter in LEO, MEO, GEO or SSO. In the project, the function of stimulating the remaining of rockets is provided and the process of simulation can stop automatically by detecting the collision between the Earth and rockets.

Moreover, this repository specially choose to decide the run loop times for each frames, eliminating some errors which may appear randomly.

<img src="resources/shot.png" alt ='shot' width='400'/>

The blue sphere represents the Earth and the cone represents the rocket. The red point at the end of cone means that the rocket is thrusting. White line means the orbit of the rocket.

### Programming Language and Frame
This project uses JavaScript and the library vue as frame.

<img src="resources/JavaScript-1.jpeg" alt="drawing" width="200"/>
<br>
<img src="resources/Vue.jpeg" alt="drawing" width="200"/>

### Core Algorithm
The project mainly use four stage Runge-Kutta method to solve the differential equations by the following codes.


<img src="resources/equation2.png" alt="drawing" width="300"/>
<br>
<img src="resources/runge kutta.png" alt="drawing" width="300"/>
<br>



### structure of the project
This project mainly have two parts: several class designed for visualize and solving the differential equations and the basic structure of vue library. There is several classes including `Engine`, `ActiveAgent`, `PasiveAgent`, `rocekt` and so on. These classes allow the project to detect wheter the simulation progress is over and also allow users to change the initial condition of spacecraft and set more complex actions like designing a multistage rocket and have functions to seperate different stages which will keep simulate the orbit of remainings.

## Block Diagram
![alt text](resources/block-diagram.png)

## Live Demo
[Live Demo](https://colinhu123.github.io/2d-rocket-simulation/)

## Project setup

### 1. Step 1 Install npm
```
npm install
```

### 2. Compiles and hot-reloads for development
```
npm run serve
```

### 3. Compiles and minifies for production
```
npm run build
```

## Expansion
### set condition fastly
Usesrs can set their sattlites' initial condition in the pannels on the right and look up for informations about orbit on the other sheet of the pannel.

### Add some users own contents
This project provide users some ways to expand project or save some of the designs they made. Users can add their own designs in ```rocket-config.json```, setting up a new object containing all information.  

### Lints and fixes files
Save the file and it may return some errors about typing problems. Users can just run the code below
```
npm run lint
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

