/* tslint:disable:no-magic-numbers comment-type */
import { css } from 'styled-components';
import { size } from '../mixins';

export const Resets = css`
    html,
    body {
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;

        height: 100%;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *:focus {
        outline: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-weight: normal;
    }

    h1 {
        font-size: ${size(20)};
    }
`;
