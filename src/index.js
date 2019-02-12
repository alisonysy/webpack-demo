import _ from 'lodash';
import style from '../src/style.scss';

var component =() => {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

{let a=1;
console.log(a);}