import React from 'react';

const Hello = () => {

    // return React.createElement('div', null,'h1', '<h1> Hello </h1>')

    return React.createElement('div', null,React.createElement('h1',null,'hello akash'))

}

export default Hello;