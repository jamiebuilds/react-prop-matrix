'use strict';
const React = require("react");

function PropMatrix(props) {
  let matrix = [{}];
  let names = Object.keys(props.options);

  for (let name of names) {
    let values = props.options[name];
    let nextMatrix = [];

    for (let value of values) {
      if (
        props.filters &&
        Array.isArray(props.filters[name]) &&
        props.filters[name].length &&
        !props.filters[name].includes(value)
      ) {
        continue;
      }

      for (let item of matrix) {
        nextMatrix.push(Object.assign({}, item, { [name]: value }));
      }
    }

    matrix = nextMatrix;
  }

  return React.createElement(
    React.Fragment,
    null,
    ...matrix.map(item => props.children(item))
  );
}

module.exports = PropMatrix;
