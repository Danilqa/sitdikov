import styled from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';

export const Column = styled.div`
    width: ${size(Theme.column.width)};
    height: 100%;
    flex-grow: 1;
    flex-shrink: 0;
    
    &:not(:last-of-type) {
        margin-right: ${size(Theme.column.margin)};
    }
    
    @media screen and (max-width: ${size(Theme.breakpoints.mobile)})  {
        width: 100%;
        
        &:not(:last-of-type) {
            margin-bottom: ${size(40)};
        }
    }
`;
