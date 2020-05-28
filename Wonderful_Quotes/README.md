## VueJS - The Complete Guide Project 1

### Wonderful Quotes Project

---

##### Project Overview

The Wonderful Quotes project is the first project of the Udemy Vue JS 2 - The Complete Guide (incl. Vue Router and Vuex), by Maximilian Schwarzmüller. The purpose of the project is to bring together the lessons on components and is the first project of the course that uses the Vue CLI. 

This is a Single Page Application that has four component parts, the header is the first component which is a progress bar that displays how many quotes have been added with a maximum number of quotes, an input box to add new quotes, and a grid which displays the newly added quotes. There is also an information box which informs the user how to delete quotes. 

When the user enters a quote it displays in the grid and the width of the progress bar gets larger with the number of quotes increasing by 1. When a user clicks on a quote it is deleted from the grid and the progress bar width reduces by 1. When the user reaches the maximum number of quotes then an alert appears to say the user must delete a quote first. 

---

##### Techonologies

* HTML
* CSS
* Bootstrap
* VueJS

---

##### Functionality

The main.js is the file which renders the content of the root file (App.vue) in the browser, so there is very little in this file since it just imports the App.vue file and renders.

The main content is in the App.vue file which has the standard Vue structure of template, script and style. In the template there is a div of container which means components can slot into this position as rows. There are four components in total, but three are imported to this file in the script tags. These components are then created in the App.vue instance which allows them to be added into the template page template. 

The app.vue instance contains the data function which returns a quotes property that is an array with one default quote, and a maximum number of quotes which is 10. The methods from this file are the functionality to add a new quote and delete a quote. These methods use the this keyword to access the data quotes array to push new quotes to it, and delete quotes from it. The newQuote method contains an if statement which alerts when the user reaches >= the maximim number of quotes which is 10. 

There are four component files: Header.vue; NewQuote.vue, QuoteGrid.vue and Quotes.vue. Header.vue makes use of props to get the number of quotes in the array and the maximum quotes. This will be useful for when the component is imported to the App.vue file which contains the array and maxQuotes properties. The progress bar is configured by binding a style attribute with a width. The width takes in the values of the quoteCount and maxQuotes and multiplies by 100 and concatenates the % to get a percetage value of 100% width. The props are then bound to the App.vue file header component in the template which get the values from the data array and maxquotes array in the App.vue instance. 

The newQuote.vue component contains the form that the user will see to enter a new quote. This is contained in a row which will then slot into the App.vue container when exported. Two way data-binding is utilised in this file to pass the value input by the user in the text area to an empty string in the newQuote.vue data instance where it will be contained until it is imported to the App.vue file. The createNew method is executed when the form button is clicked but prevented in the component until it is exported to the app.vue file where the data is stored. The createNew method emits from the child component to the parent the value from the two way data binding using this.quote which is equal to whatever the user input. 

When the newQuote is imported to the App.vue file the component is added to the instance and we listen for quoteAdded which is being emitted from the component. When this is heard, we execute the newQuote method which adds to the data array. 

The QuoteGrid.vue component and the Quotes.vue component are linked. Quotes.vue sets the styling which is scoped and the appearance of the quote using Bootstrap panels. A <slot> is added to the template which will take in the logic from QuoteGrid.vue when exported. In QuoteGrid.vue, Quotes.vue is imported and a new component created in the instance which takes the import and is added to the QuoteGrid.vue template. A prop is created in the instance which is an array item that will loop through the quotes array and take the index of it. The deleteQuote method is also used in this component because when the user clicks on a quote in the grid it is deleted, so the index from the v-for loop is take as an argument and emitted to the parent component App.vue. 

In App.vue QuoteGrid.vue is imported and a component created in the instance and added to the template. We listen for the prop quotes by binding it to the component as an attribute which is then passed to the quotes data array, and also listen for the quoteDeleted being emitted from the child component and index of the quote. 

---

##### Preview

Please see below for a preview of how the project looks:

![Preview](https://uc0e87841e9bac6ad3fc07d94082.previews.dropboxusercontent.com/p/thumb/AAxgPXuRy6VYvWHEWYYNfCaNwJcFrEzNJutUqcsoxv8ayap_FwXy_Q18xoWTK8Grn12vO9RWARKTz4tI-X1uLMUURVlsUcGdT1muUIAvDn7HJnuL3fk7A5iuyZwQJEkGAT9sOgkd38tjngXWTlMxrYxQwj278Vag9KC2VWz3l2I4L3Hz4kKRGS-5MjKDZfXoigI7VR0r-I8QVBVes5YyWpY6_fcPErJS-P9YzGtEn5-9m63R0X1g4XuvjrZI5ux1z_36g6p_sXAfodTqIOFEUC4kcVGseJUvLpzYbgBk0z0FlLPiW9vypgh34pqMQLDXp1MQ46kTA-5fqudI89qHbvGB2aKoeZlX2xNqmiY0MaJxdpkAKkMjFaiE-HIh_Lz5GtW10w3YLG_juq7tUKs0UKClfqbBkoIEPMW0uzyRSvrsfcsjicCLbQP2T3CaOFQoy169jaXJXv-W4eeS1pFdim5TR1geGv-UO2uNt8Y64R_KrQ/p.png?fv_content=true&size_mode=5)

---

##### Live Application

To try out the functionality of the app please click [here](https://im5xo.csb.app/)