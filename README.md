## Introduction
This project is for my DGM3790 course at UVU. The main idea for this React app was to show interesting facts about different places around the world. 


## Features
- Imports a ton of information about different countries using a Netlify function to provide the country data
- Dynamically creates information cards usning a combination of custom components and components from @material-ui/core ([functions/countries.js](https://github.com/AmmonRoberts/DGM-3790-final-project/blob/main/netlify/functions/countries.js) and [CountryCards.js](https://github.com/AmmonRoberts/DGM-3790-final-project/blob/main/src/components/CountryCards.js))
- Countries can be added as favorites, which can be viewed on the /favorites route ([Favorites.js](https://github.com/AmmonRoberts/DGM-3790-final-project/blob/main/src/pages/Favorites.js))
- Country cards can also be filtered by region
- Country cards also be clicked on, showing a modal wiht more details, including a cute little verison of the country's flag ([CountryData.js](https://github.com/AmmonRoberts/DGM-3790-final-project/blob/main/src/components/CountryData.js) and [MyCountryModal.js](https://github.com/AmmonRoberts/DGM-3790-final-project/blob/main/src/components/MyCountryModal.js))
- Uses a context to share country data as well as favorites across components ([CountryContext.js](https://github.com/AmmonRoberts/DGM-3790-final-project/blob/main/src/contexts/CountryContext.js))
- Inlcudes login and signup forms with some nice validation ([Login.js](https://github.com/AmmonRoberts/DGM-3790-final-project/blob/main/src/pages/Login.js) and [Signup.js](https://github.com/AmmonRoberts/DGM-3790-final-project/blob/main/src/pages/Signup.js)), along with Netlify Identity to manage users and stuff
- Transitions between pages, as well as a nice fade-in for country card modals
