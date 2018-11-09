# react-input-debouncer 
[![Build Status](https://travis-ci.org/prawn-cake/react-input-debouncer.svg?branch=master)](https://travis-ci.org/prawn-cake/react-input-debouncer)

## Why ?
Are you familiar with a problem of poor performance 
when filtering list of items by the input text?

A typical solution is to debounce an input change for some milliseconds. 
And many libraries exist to solve it, including famous [lodash debounce](https://lodash.com/docs/4.17.10#debounce).

Few issues with them: 

* lodash is massive and you need to do [tiresome tricks](https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js) to make it work with React.
* Many of those libraries are wrappers around lodash.
* The libraries provide wrapped input components (force me to use something like `<DebouncedInput ... />`), which is totally redundant.

This library simply provides react specific `debounce` function to use along with regular html input element.


## Install

    npm install --save @prawn-cake/react-input-debouncer
    
    # OR
    yarn add @prawn-cake/react-input-debouncer
    

## Usage

Here I use `useState` hook, one of latest and greatest [react hooks](https://reactjs.org/docs/hooks-intro.html) features.
    
    import React from 'react';
    import { useState } from 'react'
    import debounce from '@prawn-cake/react-input-debouncer'
    
    function MyComponent({ props }) {
        [value, setValue] = useState(''); 
        return (
            <React.Fragment>
                ...
                <label>{value}</label>
                <input 
                    type="text"
                    onChange={debounce(e => setValue(e.target.value), 100)}
                />
            </React.Fragment>
        )
    }
    
`MyComponent` renders a fragment with a label and a text input elements. 
Text input is debounced for 100ms.
