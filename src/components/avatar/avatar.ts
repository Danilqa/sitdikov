import styled from 'styled-components';
import { size } from '../../styles/mixins';

export const Avatar = styled.div`
    width: ${size(120)};
    height: ${size(120)};
    background-image: url('/assets/avatar.jpg');
    background-size: cover;
    border-radius: 50%;
`;
