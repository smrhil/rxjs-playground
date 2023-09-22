import { debounceTime, fromEvent, map } from "rxjs";

const sliderInput = document.querySelector('input#slider');


fromEvent(sliderInput, 'input').pipe(
  debounceTime(2000),
  map((event: any) => event.target['value'])
).subscribe(event => console.log(event));