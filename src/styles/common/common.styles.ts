import { css } from 'styled-components';
import { Theme } from '../../components/app.theme';

export const Global = css`
    html {
        font-family: 'Poppins', sans-serif;
        font-size: ${Theme.base.fontSize}px;
        line-height: 1.3;
    }

    body {
        font-size: 1rem;
    }

    ::selection {
        color: ${Theme.color.secondary};
        background: ${Theme.color.primary};
    }

    a {
        color: ${Theme.color.primary};
        text-decoration: underline;
    }
`;
