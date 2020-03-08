import { css } from 'styled-components';
import { Theme } from '../../components/app.theme';

export const Global = css`
    html {
        font-family: 'Poppins', sans-serif;
    }
    
    ::selection {
        color: ${Theme.color.secondary};
        background: ${Theme.color.primary};
    }
`;
