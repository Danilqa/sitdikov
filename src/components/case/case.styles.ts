import styled, { css } from 'styled-components';
import { size } from '../../styles/mixins';
import { Theme } from '../app.theme';

interface CaseContainerProps {
    isLast?: boolean;
}

export const CaseContainer = styled.div<CaseContainerProps>`
    position: relative;
    ${props => !props.isLast && sectionDivider}
`;

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

export const Title = styled.div`
    font-weight: bold;
    font-size: ${size(36)};
`;

export const SubTitle = styled.div`
    font-weight: lighter;
    font-size: ${size(14)};
`;
