'use strict';

const test = require('ava');
const React = require('react');
const ReactTestRenderer = require('react-test-renderer');
const PropMatrix = require('./');

const h = React.createElement;

function render(el) {
  return ReactTestRenderer.create(el).toJSON();
}

test('<PropMatrix/>', t => {
  let options = {
    background: ['red', 'green', 'blue'],
    children: ['Hello', 'World'],
  };

  let tree = render(
    h(PropMatrix, { options }, props => (
      h('button', props)
    )),
  );

  t.deepEqual(tree, [
    h('button', { background: 'red' }, 'Hello'),
    h('button', { background: 'green' }, 'Hello'),
    h('button', { background: 'blue' }, 'Hello'),
    h('button', { background: 'red' }, 'World'),
    h('button', { background: 'green' }, 'World'),
    h('button', { background: 'blue' }, 'World'),
  ]);
});

test('<PropMatrix/>', t => {
  let options = {
    background: ['red', 'green', 'blue'],
    children: ['Hello', 'World'],
  };

  let filters = {
    background: ['red', 'green'],
    children: ['Hello'],
  };

  let tree = render(
    h(PropMatrix, { options, filters }, props => (
      h('button', props)
    )),
  );

  t.deepEqual(tree, [
    h('button', { background: 'red' }, 'Hello'),
    h('button', { background: 'green' }, 'Hello'),
  ]);
});
