# react-prop-matrix

> Render something using every possible combination of props

## Install

```sh
yarn add react-prop-matrix
```

## Example

```js
import PropsMatrix from 'react-props-matrix';

let options = {
  background: ['red', 'green', 'blue'],
  children: ['Hello', 'World'],
};

<Matrix options={options}>
  {props => <Button {...props}>}
</Matrix>
```

Will generate:

```js
<React.Fragment>
  <Button background="red" children="Hello"/>
  <Button background="green" children="Hello"/>
  <Button background="blue" children="Hello"/>

  <Button background="red" children="World"/>
  <Button background="green" children="World"/>
  <Button background="blue" children="World"/>
</React.Fragment>
```

##### With Filters

```js
import PropsMatrix from 'react-props-matrix';

let options = {
  background: ['red', 'green', 'blue'],
  children: ['Hello', 'World'],
};

let filters = {
  background: ['red', 'green'],
  children: ['Hello'],
};

<Matrix options={options}>
  {props => <Button {...props}>}
</Matrix>
```

Will generate:

```js
<React.Fragment>
  <Button background="red" children="Hello"/>
  <Button background="green" children="Hello"/>
</React.Fragment>
```

## API

### `<PropsMatrix/>`

#### `props.options`

An object of props containing arrays with possible values.

```js
<PropsMatrix
  options={{
    background: ['red', 'blue', 'green'],
    children: ['Hello', 'World'],
  }}/>
```

#### `props.filters`

Optionally filter the generated matrix to only include items that have matching
props. An empty array will match all items.

```js
<PropsMatrix
  filters={{
    background: ['red', 'blue'],
    children: ['Hello'],
  }}/>
```

#### `props.children`

A function that gets called for each item in the generated matrix and returns
React elements.

```js
<PropsMatrix
  children={props => (
    <Component {...props}/>
  )}/>
```

> **Note:** If you want to pass an array as a prop, you still need to nest it
> inside an options array. `{ items: [[1, 2], [3, 4]] }`