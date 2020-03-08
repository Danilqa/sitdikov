import styled from 'styled-components';
import * as React from 'react';

interface Props {
    shown: boolean;
}

export const HiddenSurfaceContainer = React.memo(styled.div<Props>`
    transition: 0.3s linear opacity;
    opacity: ${props => (props.shown ? 1 : 0.07)};
`);
