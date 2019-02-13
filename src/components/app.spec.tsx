import * as React from 'react';
import { App } from './app';

describe('App', () => {

    it('should be correct rendered app', async () => {
        const component = <App/>;
        await expect({ component }).toMatchComponentImageAsync();
    });
});