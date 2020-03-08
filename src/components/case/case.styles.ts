import styled, { css } from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';
import * as React from 'react';

interface CaseContainerProps {
    isLast?: boolean;
    isLink?: boolean;
}

export const CaseContainer = React.memo(styled.a<CaseContainerProps>`
    display: block;
    position: relative;
    ${props => !props.isLast && sectionDivider};
    text-decoration: none;
`);

const sectionDivider = css`
    margin-bottom: ${size(Theme.sizeRatio * 10)};

    &:before {
        content: ' ';
        position: absolute;
        width: ${size(50)};
        height: ${size(2)};
        bottom: ${size(-25)};
        background-color: ${Theme.color.primary};
    }
`;

export const Title = React.memo(styled.div`
    font-weight: bold;
    font-size: ${size(36)};
`);

export const SubTitle = React.memo(styled.div`
    font-weight: lighter;
    font-size: ${size(14)};
`);
