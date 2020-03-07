import { Resets } from './resets/resets.styles';
import { createGlobalStyle } from 'styled-components';
import { Global } from './common/common.styles';

export const GlobalStyles = createGlobalStyle`${Resets}${Global}`;
