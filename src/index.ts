import { filter, map, of, tap } from "rxjs";


of(1, 7, 6, 2, 5).pipe(
  filter(value => value > 5),
  tap({
    next: value => console.log('Spy: ', value)
  }),
  map(value => value * 2)
).subscribe(value => console.log('Output:' , value));