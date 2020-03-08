import styled, { css } from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';
import * as React from 'react';

interface Props {
    isNotFirst?: boolean;
}

export const Header = React.memo(styled.h1<Props>`
    font-size: ${size(20)};
    margin-bottom: ${size(Theme.sizeRatio * 8)};
    font-weight: bold;
    
    @media screen and (max-width: ${size(Theme.breakpoints.mobile)})  {
        margin-bottom: ${size(Theme.sizeRatio * 4)};
    }
    
    ${props => props.isNotFirst && isNotFirstStyles}
`);

const isNotFirstStyles = css`
    margin-top: ${size(Theme.sizeRatio * 12)};
`;
