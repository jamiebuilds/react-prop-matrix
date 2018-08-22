'use strict';
const React = require("react");
const memoizeOne = require("memoize-one");

let toMatrix = memoizeOne((options, filters) => {
  let matrix = [{}];
  let names = Object.keys(options);

  for (let name of names) {
    let values = options[name];
    let nextMatrix = [];

    for (let value of values) {
      if (
        filters &&
        Array.isArray(filters[name]) &&
        filters[name].length &&
        !filters[name].includes(value)
      ) {
        continue;
      }

      for (let item of matrix) {
        nextMatrix.push(Object.assign({}, item, { [name]: value }));
      }
    }

    matrix = nextMatrix;
  }

  return matrix;
});

function PropMatrix(props) {
  let matrix = toMatrix(props.options, props.filters);

  return React.createElement(
    React.Fragment,
    null,
    ...matrix.map(item => props.children(item))
  );
}

module.exports = PropMatrix;
