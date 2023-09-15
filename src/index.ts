import { from } from "rxjs";

// permet de créer a cold observable avec les valeurs du tableau en paramètre
from(['Alice', 'Ben', 'Charlie']).subscribe({
      next: value => console.log(value),
      complete: () => console.log('Completed')
})

// convert a promise to Observable
// a utiliser si on a une API qui retourne des promises et on veut le convertir en Obserable
// pour utiliser les fonctionnalités de rxjs

const somePromise = new Promise((resolve, reject) => {
      // resolve('Resolved!');
      reject('Rejected!');
    });
    
    const observableFromPromise$ = from(somePromise);
    
    observableFromPromise$.subscribe({
      next: value => console.log(value),
      error: err => console.log('Error:', err),
      complete: () => console.log('Completed')
    });
    
