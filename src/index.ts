import { Observable } from 'rxjs';
import { name$, storeDataOnServer, storeDataOnServerError } from './external';

name$.subscribe(value => console.log(value));

storeDataOnServer('some value').subscribe(value => console.log(value));
storeDataOnServerError('some value').subscribe({
next: value => console.log(value),
error: err => console.log('Error when saving', err.message)
});
