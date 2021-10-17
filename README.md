# htv-5

## To run app:
1. `cd app`
2. `npm start`

## To view components in storybook UI
1. `cd app`
2. `npm run storybook`

![unknown](https://user-images.githubusercontent.com/56213581/137636585-b6453b2c-139c-4a59-95b8-ea89c95b8b15.png)

## Inspiration
We were inspired by learning visualization tools related to ML and wanted to create our own.

## What it does
Flowboat is a web application that allows anyone to experience Machine Learning algorithms without having to code! Using flowboat, users can drag-and-drop input data, functions, and visualization outputs to see what ML is really like beyond lines of code.

From the node pocket, users can choose from an abundance of nodes to add to their flow. Nodes interact through their connectors. As you add more nodes, you can see how your initial data transforms through your flow, into something quite beautiful.

## How we built it
We use React.js as a Front-end framework and built our editor on the top of React Flow (https://reactflow.dev/). We implemented material components from the MUI React library. As a front-end development tool we used Storybook, so that we can easily preview each of our components. Python and Flask as the Back-end was utilized for building machine learning models and transferring data between nodes.

## Challenges we ran into
We had difficulty linking the apps backend and were unable to implement all the features we planned at the start of the hackathon but we are still proud of what we accomplished.

## Accomplishments that we're proud of
We created a intuitive and easy to understand UI that allows people with no machine learning background to understand how linear regression models work. The app also allows the users to play around with their own datasets and gives them creative freedom.

## What we learned
We worked with many new libraries during this project and even used frameworks we haven't used before like Flask. We gained valuable experience working the MUI React library to create clean front-end components.

## Whats next for flowboat
We wish to complete the features we have yet to do (such as the share feature) and perhaps add more types of machine learning models in the future. Implementing hotkeys to add nodes would also create a more efficient user experience.
