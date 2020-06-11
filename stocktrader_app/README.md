## VueJS - The Complete Guide Project 2

### The Stocktrader Project

---

##### Project Overview

The Stocktrader Project is the second and final project of the Udemy VueJS 2 - The Complete Guide (incl Vue Router and Vuex), Maximilian Schwarzmüller. The purpose of the project is to consolidate as much of the course as possible. 

The Stocktrader Project allows a user to buy stocks at a certain price for that day using their available funds. The user selects a quantity of the stocks and clicks the buy button. When they buy a stock it is added to their portfolio. The available stocks are displayed on the stocks page. 

The Stocks page renders the stocks using a slide transition and is a grid of cards displaying the stock name and price for that day. There is also an input box where a user selects the quantity of stock they want to buy, and a buy button. 

The header is inserted at the root component so displays on all pages. The header has a brand and two links to the pages within the site. On the right there is an End Day option, a Save & Load dropdown and the available funds the user has to spend. 

The Portfolio page renders the stocks that the user has bought. If the user has no stocks the page will be blank, and if the user has bought stocks, it will appear as a card with the price and quantity owned. On this page will be a sell button and the user can select a quantity to sell. The stocks will sell at the price for that day so they may have a higher amount in their available funds or a lower amount. The available funds will update as the user buys and sells. 

When a user selects the End Day option, the stock prices are randomised and new prices will show. There is also a backend with this site so the user can save their stocks for that day and when the page refreshes and the data loads, it will show the stocks they saved and the same funds they had available before they refreshed. 

---

##### Techonologies

- HTML
- CSS
- Bootstrap
- VueJS
- Vuex
- Vue Resource
- Vue Router
- Transitions / Animations
- Backend (Firebase)

---

##### Functionality

There are three pages associated to the site, the Homepage, Portfolio page and Stocks page. The Header is also a component of the site. 

The components folder contains a Home and a header component. There are also two folders, one for the Portfolio Page and One for the Stocks page. Vue Router is installed as a dependency to navigate between the components. The routes.js file contains the router configuration, which is imported to the main.js file. 

The Header component contains the <router-link> tags to each of the relevant components. Both the folders have a file for an individual stock and another for the collection of stocks. For example, in the Stocks folder, this will render all the stocks available to buy so the individual stock is styled using the stock.vue file, and when the array of stocks is looped through and rendered to the page, the grid is dealt with using the Stocks.vue component. So the stock.vue file is therefore, imported to the Stocks.vue file and then the collated stocks are passed to the root component (App.vue).

In the Portfolio folder, this is an new array of stocks that the user has bought. The individual stock the user has bought is styled using the Stock.vue file and the collated stocks are styled using the Portfolio.vue file. 

State is managed using Vuex, so Vuex was installed and a Store folder created which contains the config files. State is configured in the Stocks.js and Portfolio.js modules. Examples of State management utilised in this project are buying stock, selling stock, randomising stock with the End Day button, saving data and loading data with the dropdowns. The state, mutations and actions are all managed in a centralised store.  

To connect to the backend, vue-resource was used to initiate GET or POST requests. The backend is a Firebase database which saves the stocks data and the user can load it after the page is refreshed. 

---

##### Preview

Please see below for a preview of how the project looks:

![Preview](https://raw.githubusercontent.com/CameronPaton/Images-Portfolio/master/Stocks_vue-1.png)

![Preview](https://raw.githubusercontent.com/CameronPaton/Images-Portfolio/master/Stocks_vue-2.png)

![Preview](https://raw.githubusercontent.com/CameronPaton/Images-Portfolio/master/Stocks_vue-3.png)


