import React             from 'react';
import { render }        from 'react-dom';
import ready             from 'document-ready-promise';
import { BrowserRouter } from 'react-router-dom';
import createStore       from './containers/layout';

ready().then(async () => {

    const media     = await fetch('/media.json').then(response => response.json());
    const mountNode = document.querySelector('section.app');
    mountNode && render(createStore({ media }, app => <BrowserRouter>{app}</BrowserRouter>), mountNode);

});
