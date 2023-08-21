This is a quick mockup of the existing 4in1 Driving App on the app store in React Native using Expo.

It implements:

- Demo homepage
- Mock Goals Page (accessible from the bottom navigation bar)
- Quiz environment w/ some mock questions from a bank stored in the app
- Chat interface (an extension of the existing app)

It has a navigation service that allows for programmatic navigation of the app from nearly anywhere in the code.
This allows for navigation without having to worry too much about your app's build context.

The app should be refactored in the future, mainly with the UI components and so it supports android devices better. However, this wasn't the primary aim of this app.
Additionally, it was developed in a short timeframe so coding best practices aren't adhered to strictly.