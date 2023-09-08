import { Observable } from 'rxjs';

const interval$ = new Observable<number>(subscriber => {
    let counter = 1;
    const setIntervalId = setInterval(() => {
        console.log('Emitted', counter)
        subscriber.next(counter++);
    }, 2000);

    return () => {
        clearInterval(setIntervalId);
    }
});

const subscription = interval$.subscribe(value => console.log(value));
setTimeout(() => {
    console.log('unsubscribe');
    subscription.unsubscribe();
}, 7000);


