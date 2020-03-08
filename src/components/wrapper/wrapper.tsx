import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { WrapperContainer } from './wrapper.styles';

export class Wrapper extends PureComponent {
    private static PRE_SHOWN_DELAY = 200;

    state = { isContentShown: false };

    componentDidMount(): void {
        setTimeout(() => this.setState({ isContentShown: true }), Wrapper.PRE_SHOWN_DELAY);
    }

    render(): ReactNode {
        const { isContentShown } = this.state;
        const { children } = this.props;

        return (
            <WrapperContainer isContentShown={isContentShown}>
                {children}
            </WrapperContainer>
        );
    }
}
