import styled from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';

export const CaseContainer = styled.div`
    position: relative;
    
    &:not(:last-of-type) {
        margin-bottom: ${size(Theme.sizeRatio * 10)};
        
        &:before {
            content: ' ';
            position: absolute;
            width: ${size(50)};
            height: ${size(2)};
            bottom: ${size(-25)};
            background-color: ${Theme.color.primary};
        }
    }
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: ${size(36)};
`;

export const SubTitle = styled.div`
    font-weight: lighter;
    font-size: ${size(14)};
`;
