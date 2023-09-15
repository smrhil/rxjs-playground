

import { forkJoin } from "rxjs";
// Mike is from New Delhi and likes to eat pasta.

import { AjaxResponse, ajax } from "rxjs/ajax";

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation');

const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

//randomName$.subscribe((ajaxResponse: any) => console.log(ajaxResponse.response.name));
//randomNation$.subscribe((ajaxResponse: any) => console.log(ajaxResponse.response.capital));
//randomFood$.subscribe((ajaxResponse: any) => console.log(ajaxResponse.response.dish));

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]: any[]) => console.log(`${nameAjax.response.name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`)
);
