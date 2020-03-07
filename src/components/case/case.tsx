import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { CaseContainer, SubTitle, Title } from './case.styles';

interface Props {
    title: string;
    subtitle: string;
}

export class Case extends PureComponent<Props> {

    render(): ReactNode {
        const { title, subtitle, children } = this.props;

        return (
            <CaseContainer>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                {children}
            </CaseContainer>
        );
    }
}
