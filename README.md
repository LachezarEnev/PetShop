# pet-shop
PetShop is a specialized web store where every registered user can publish an announcement for pets (for sale or for adoption).
The app uses for front-end Vue.js, back-end serverless platform Kinvey.

The app has three main component folders.
	1.	Shared – contains Header, Footer and Not-found components.
	2.	Auth – contains Login and Register components.
	3.	Pet - contains the main functionality of the app.  
		•	Adopt component – shows the pets for adoption.
		•	Buy component – shows the pets for sale.
		•	Category component – shows the pets by category.
		•	Create component – responsible for creating new pet notice.
		•	Details component – shows the details of the pet notice.
		•	Edit component – responsible for editing the pet notice.
		•	My component – shows all pet notices of the logged in user.
		•	Search component – shows the searched pets by the user.
		•	NoResult component – this view is displayed when the search returns no pets. 
		
The app navigation is handled by Lazy Loading Routes. The Router contains three main routes.
	1.	App-routes -  navigating to the home page and not-found page.
	2.	Auth-routes – navigating to login and register pages.
	3.	Pet-routes – navigating to adopt, buy, create, edit, my, category, search, details and no-result pages. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
