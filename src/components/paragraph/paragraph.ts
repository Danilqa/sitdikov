import styled from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';

export const Paragraph = styled.p`
    margin-bottom: ${size(Theme.sizeRatio * 4)};
    
    &:not(:last-of-type) {
        margin-bottom: 0;
    }
`;
