import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { CaseContainer, SubTitle, Title } from './case.styles';

interface Props {
    title: string;
    subtitle: string;
    isLast?: boolean;
}

export class Case extends PureComponent<Props> {

    render(): ReactNode {
        const { title, subtitle, children, isLast } = this.props;

        return (
            <CaseContainer isLast={isLast}>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                {children}
            </CaseContainer>
        );
    }
}
