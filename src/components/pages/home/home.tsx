import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { Button, ButtonModeType, theme } from '@arrival/core-ui-kit';
import { Link } from 'react-router-dom';

export class Home extends PureComponent {

    render(): ReactNode {
        return (
            <div>
                <h1>Hello, Arrival!</h1>
                <h2>Please, select a hero:</h2>

                <Link to='/heroes/1'>
                    <Button mode={ButtonModeType.PRIMARY} theme={theme}>Hero 1</Button>
                </Link>

                &nbsp;

                <Link to='/heroes/2'>
                    <Button mode={ButtonModeType.PRIMARY} theme={theme}>Hero 2</Button>
                </Link>

                &nbsp;

                <Link to='/heroes/3'>
                    <Button mode={ButtonModeType.PRIMARY} theme={theme}>Hero 3</Button>
                </Link>
            </div>
        );
    }
}