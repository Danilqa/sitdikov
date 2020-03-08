import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { HiddenSurfaceContainer } from './hidden-surface.styles';
import { HiddenSurfaceService } from './hidden-surface.service';

interface Props {
    isNotHoverable?: boolean;
}

interface State {
    shown: boolean;
}

export class HiddenSurface extends PureComponent<Props, State> {
    state: State = { shown: true };

    constructor(props: Props) {
        super(props);

        this.onMouseEntered = this.onMouseEntered.bind(this);
        this.onMouseLeaved = this.onMouseLeaved.bind(this);
    }

    componentDidMount(): void {
        HiddenSurfaceService.subscribe(this);
    }

    render(): ReactNode {
        return (
            <HiddenSurfaceContainer
                shown={this.state.shown}
                onMouseEnter={this.onMouseEntered}
                onMouseLeave={this.onMouseLeaved}
            >
                {this.props.children}
            </HiddenSurfaceContainer>
        );
    }

    show(): void {
        this.setState({ shown: true });
    }

    hide(): void {
        this.setState({ shown: false });
    }

    // noinspection JSMethodCanBeStatic
    private onMouseEntered(): void {
        if (this.props.isNotHoverable) {
            return;
        }

        HiddenSurfaceService.hideAll({ except: this });
    }

    // noinspection JSMethodCanBeStatic
    private onMouseLeaved(): void {
        HiddenSurfaceService.showAll();
    }
}
