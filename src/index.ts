import { Observable, observable } from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    setTimeout(() => subscriber.next('Sidi'), 2000) ;
    setTimeout(() => subscriber.next('Meima'), 4000) ;
});

const subscription = observable$.subscribe(value => console.log(value));

setTimeout(() => {
    console.log('Unsubscribe')
    subscription.unsubscribe()
}, 3000)