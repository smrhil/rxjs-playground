import { EMPTY, fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, concatMap, map } from "rxjs/operators";

const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

// par défaut concatMap renvoie la notification d'erreur à la sortie
// pour éviter ça on peut utiliser catchError sur l'inner observable
fromEvent(fetchButton, 'click').pipe(
  map(() => endpointInput.value),
  concatMap(value =>
    ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
      catchError(error => of(`Could not fetch data: ${error}`))
    )
  )
).subscribe({
  next: value => console.log(value),
  error: err => console.log('Error:', err),
  complete: () => console.log('Completed')
});
