import styled from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';

export const Header = styled.h1`
    font-size: ${size(20)};
    margin-bottom: ${size(Theme.sizeRatio * 8)};
    font-weight: bold;
    
    @media screen and (max-width: ${size(Theme.breakpoints.mobile)})  {
        margin-bottom: ${size(Theme.sizeRatio * 4)};
    }
    
    &:not(:first-of-type) {
        margin-top: ${size(Theme.sizeRatio * 8)};
    }
`;
