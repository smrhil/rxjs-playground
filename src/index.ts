import { Subject, fromEvent, map, pipe } from "rxjs";

const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

// Subject est un Observable et Observer en même temps
// il est comme un hot observable
// il implémente les méthodes next, error ans complete
// la source de données est le Subject lui même
// il permet de faire du multicatsting

const value$ = new Subject<string>();

fromEvent(emitButton, 'click').pipe(
  map(() => inputElement.value)
).subscribe(value$);

fromEvent(subscribeButton, 'click').subscribe(
  () => {
    console.log('New subscription');
    value$.subscribe(value => console.log(value));
  }
);
