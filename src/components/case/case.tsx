import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { CaseContainer, SubTitle, Title } from './case.styles';

interface Props {
    title: string;
    subtitle: string;
    isLast?: boolean;
    url?: string;
}

export class Case extends PureComponent<Props> {

    render(): ReactNode {
        const { title, subtitle, children, url, isLast } = this.props;

        const isLink = Boolean(url);
        return (
            <CaseContainer
                isLast={isLast}
                isLink={isLink}
                href={url}
                target='_blank'
            >
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                {children}
            </CaseContainer>
        );
    }
}
