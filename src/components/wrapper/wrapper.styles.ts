import styled from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';
import * as React from 'react';

interface Props {
    isContentShown: boolean;
}

const mobilePadding = size(Theme.wrapper.padding / 2);

export const WrapperContainer = React.memo(styled.div<Props>`
    display: flex;
    flex-wrap: wrap;
    max-width: ${size(Theme.wrapper.width)};
    margin: 0 auto;
    padding: ${size(Theme.wrapper.padding)} ${size(Theme.wrapper.padding)} 0 ${size(Theme.wrapper.padding)};
    opacity: 0;
    transition: all 1s ease-in-out;
    ${props => props.isContentShown && 'opacity: 1'};

    @media screen and (max-width: ${size(Theme.breakpoints.mobile)}) {
        padding: ${mobilePadding} ${mobilePadding} 0 ${mobilePadding};
    }
`);
