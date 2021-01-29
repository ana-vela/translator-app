# About This Project

This is a translation app built with React and React-Bootstrap

During the planning process, we created [two user profiles](https://github.com/ana-vela/translator-app/blob/master/documentation/USEREXPERIENCE.md) to help guide us build the app.

There are six language translation options: English-French, French-English, English-German, German-English, English-Italian, and Italian-English.

Take a look at the live site here: [translr](https://translr.netlify.app)

## API

This app uses the Collins Dictionary API, which provides six different bilingual dictionary options. Once the user has entered a search query, made a dictionary selection, and clicked “Search”, the app returns an HTML string of the translation.

## State Management

Since this is a small project, we used the Context API to manage state.

## Design / React Bootstrap

To keep elements consistent, we used React Bootstrap with some custom CSS.

## Web Accessibility

We utilized Lighthouse and Axe as tools to help identify and fix any accessibility issues.
