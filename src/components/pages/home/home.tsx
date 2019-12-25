import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import { Button, ButtonModeType } from '@cybernated/core-ui-kit';
import { Link } from 'react-router-dom';

export class Home extends PureComponent {

    render(): ReactNode {
        return (
            <div>
                <h1>Hello, Arrival!</h1>
                <h2>Please, select a hero:</h2>

                <Link to='/heroes/1'>
                    <Button mode={ButtonModeType.PRIMARY}>Hero 1</Button>
                </Link>

                &nbsp;

                <Link to='/heroes/2'>
                    <Button mode={ButtonModeType.PRIMARY}>Hero 2</Button>
                </Link>

                &nbsp;

                <Link to='/heroes/3'>
                    <Button mode={ButtonModeType.PRIMARY}>Hero 3</Button>
                </Link>
            </div>
        );
    }
}