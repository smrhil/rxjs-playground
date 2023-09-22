import { EMPTY, Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";


const failingHttpRequest$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'));
  }, 3000);
});

console.log('App started');

// when the observable generates a error notification
// catchError crée un nouveau observable avec fallback methode and it subscibes to it
// and sends the result to the output
failingHttpRequest$.pipe(
  catchError(error => of('Failing!'))
).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
});

// dans certains cas on veut juste cacher l'erreur, on peut utiliser l'observable EMPTY de rxjs 
// qui complete directement sans envoyer aucune valeur

/*failingHttpRequest$.pipe(
  catchError(error => EMPTY)
).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
});*/
