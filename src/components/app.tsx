import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import {
    Container,
    Init,
    Navbar,
    NavbarItemType,
    NavbarMenu,
    theme
} from '@arrival/core-ui-kit';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Hero } from './pages/hero/hero';

enum Routes {
    HOME = '/',
    ABOUT = '/about'
}

class AppComponent extends PureComponent<RouteComponentProps> {

    constructor(props: RouteComponentProps) {
        super(props);

        this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
    }

    render(): ReactNode {
        const items: NavbarItemType[] = [
            {
                title: 'Home',
                link: Routes.HOME,
                defaultSelected: this.props.location.pathname === Routes.HOME
            },
            {
                title: 'About',
                link: Routes.ABOUT,
                defaultSelected: this.props.location.pathname === Routes.ABOUT
            }
        ];

        return (
            <Init>
                <Navbar title='Web App Starter' theme={theme}>
                    <NavbarMenu theme={theme} items={items} onSelectItem={this.onMenuItemSelected}/>
                </Navbar>
                <Container theme={theme}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/heroes/:id' component={Hero}/>
                    </Switch>
                </Container>
            </Init>
        );
    }

    private onMenuItemSelected(item: NavbarItemType): void {
        this.props.history.push(item.link);
    }
}

export default withRouter(AppComponent);