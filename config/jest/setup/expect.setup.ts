import {
    toMatchComponentImageAsyncReact as toMatchComponentImageAsync, ReactMatcherConfig
} from '@eigenspace/jest-screenshot-testing';
import * as serializer from 'jest-styled-components/serializer';
import { environment } from '../../../src/environments/environment';
import { GlobalStyles } from '@cybernated/core-ui-kit';

const expect = require('expect');

ReactMatcherConfig.screenshoterUrl = environment.apiUrls.screenshoterUrl;
ReactMatcherConfig.serializer = serializer.styleSheetSerializer;
ReactMatcherConfig.globalStyles = GlobalStyles.globalStyle;

expect.extend({ toMatchComponentImageAsync });
