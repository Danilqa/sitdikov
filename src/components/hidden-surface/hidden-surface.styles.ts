import styled from 'styled-components';

interface Props {
    shown: boolean;
}

export const HiddenSurfaceContainer = styled.div<Props>`
    transition: .3s linear opacity;
    opacity: ${props => props.shown ? 1 : .07};
`;
