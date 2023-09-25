# RxJS playground

1. Run `npm install`. This will install all needed dependencies.
2. Run `npm start`. This will run the dev server.
3. Open your browser and navigate to the provided URL (default: `http://localhost:8080/`).
4. Open the Console/DevTools in your browser to see the `console.log`s.
5. Keep modifying the `src/index.html` and `src/index.ts` files to adjust the code you want to run. **Saving these files will automatically reload the page.**
6. Enjoy!


# Quelques notes:

1. Subject: 
est un Observable et Observer en même temps.
il est comme un hot observable
il implémente les méthodes next, error ans complete
la source de données est le Subject lui même
il permet de faire du multicatsting

2. BehaviorSubject: 
comme un subject mais il stock la dernière notification qu'il emet à chaque nouveau subscriber