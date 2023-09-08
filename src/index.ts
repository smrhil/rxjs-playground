import { Observable, observable } from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice')

});
console.log('Before subscribe');
observable$.subscribe(value => console.log(value));
console.log('After subscribe');