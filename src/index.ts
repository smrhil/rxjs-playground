import { Observable, concatMap, of } from "rxjs";


const source$ = new Observable(subscriber => {
  setTimeout(() => subscriber.next('A'), 2000);
  setTimeout(() => subscriber.next('A'), 5000);
});

// pour chaque valeur de l'observable source
// concatMap crée une nouvelle inner subscription to the observable created by the fallback function 
// of(1, 2) et renvoie le résultat à la sortie
// les notification complete de l'inner subscription ne sont pas envoyées à la sortie
source$.pipe(
  concatMap(value => of(1, 2))
).subscribe(value => console.log(value));