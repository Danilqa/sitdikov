import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, ButtonModeType, theme } from '@arrival/core-ui-kit';
import { Link } from 'react-router-dom';

interface HeroRouteProps {
    id: string;
}

export class Hero extends PureComponent<RouteComponentProps<HeroRouteProps>> {

    render(): ReactNode {
        return (
            <div>
                <h1>Hero {this.props.match.params.id}</h1>
                <Link to='/'>
                    <Button mode={ButtonModeType.PRIMARY} theme={theme}>Go back</Button>
                </Link>
            </div>
        );
    }
}