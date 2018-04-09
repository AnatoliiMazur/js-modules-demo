import { debounce, throttle } from 'lodash';
import $ from 'jquery';
import { greeting, alertHello } from './hello';

console.log(greeting);
// alertHello();

let input = document.querySelector('input');
input.addEventListener('input', debounce(onInput, 1000));

function onInput() {
  console.log('input');
}

document
  .querySelector('div')
  .addEventListener('mousemove', throttle(onMove, 1000));

function onMove() {
  console.log('move');
}