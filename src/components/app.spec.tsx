import * as React from 'react';
import App from './app';
import { MemoryRouter } from 'react-router-dom';
import { Routes } from './app.enum';

describe('App', () => {

    it('should render about', async () => {
        const component = (
            <div>
                <MemoryRouter initialEntries={[Routes.ABOUT]} initialIndex={0}>
                    <App/>
                </MemoryRouter>
            </div>
        );
        await expect({ component }).toMatchComponentImageAsync();
    });

    it('should render home', async () => {
        const component = (
            <div>
                <MemoryRouter initialEntries={[Routes.HOME]} initialIndex={0}>
                    <App/>
                </MemoryRouter>
            </div>
        );
        await expect({ component }).toMatchComponentImageAsync();
    });

    it('should render hero with index 1', async () => {
        const component = (
            <div>
                <MemoryRouter initialEntries={[`${Routes.HEROES}/1`]} initialIndex={0}>
                    <App/>
                </MemoryRouter>
            </div>
        );
        await expect({ component }).toMatchComponentImageAsync();
    });
});