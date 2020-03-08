import styled from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';
import * as React from 'react';

export const Paragraph = React.memo(styled.p`
    margin-bottom: ${size(Theme.sizeRatio * 4)};
    
    &:not(:last-of-type) {
        margin-bottom: 0;
    }
`);
