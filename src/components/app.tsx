import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import { Button, ButtonModeType, Init, theme } from 'core-ui-kit';

export class App extends PureComponent {

    render(): ReactNode {
        return (
            <Init>
                <Button mode={ButtonModeType.PRIMARY} theme={theme}>Hello, Arrival!</Button>
            </Init>
        );
    }
}