import styled from 'styled-components';
import { size } from '../styles/mixins';
import { Theme } from './app.theme';

const mobilePadding = size(Theme.wrapper.padding / 2);

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: ${size(Theme.wrapper.width)};
    margin: 0 auto;
    padding: ${size(Theme.wrapper.padding)} ${size(Theme.wrapper.padding)} 0 ${size(Theme.wrapper.padding)};

    @media screen and (max-width: ${size(Theme.breakpoints.mobile)}) {
        padding: ${mobilePadding} ${mobilePadding} 0 ${mobilePadding};
    }
`;
