import _ from 'lodash';
import './style.css';
import Eggie from './eggie.jpg'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
