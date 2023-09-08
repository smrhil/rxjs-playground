import { Observable, observable } from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(() => {
        subscriber.next('Charlie');
        subscriber.complete();
    }, 2000);

    return () => {
        console.log('Teardown');
    }
});
console.log('Before subscribe');
observable$.subscribe(
    {
        next: value => console.log(value),
        complete: () => console.log('Observable completed')   
    });
console.log('After subscribe');