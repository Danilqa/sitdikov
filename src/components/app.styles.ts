import styled from 'styled-components';
import { size } from '../styles/mixins';
import { Theme } from './app.theme';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: ${size(Theme.wrapper.width)};
    margin: 0 auto;
    padding: ${size(Theme.wrapper.padding)} ${size(Theme.wrapper.padding)} 0 ${size(Theme.wrapper.padding)};
`;
