import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import { GlobalStyles } from '../styles/global.styles';
import { Column } from './column/column';
import { Header } from './header/header';
import { Paragraph } from './paragraph/paragraph';
import { Case } from './case/case';
import { HiddenSurface } from './hidden-surface/hidden-surface';
import { Avatar } from './avatar/avatar';
import { Wrapper } from './wrapper/wrapper';

export class App extends PureComponent {

    render(): ReactNode {
        return (
            <React.Fragment>
                <GlobalStyles/>
                <Wrapper>
                    <Column>
                        <HiddenSurface>
                            <Header>Daniil Sitdikov</Header>
                            <Avatar/>
                            <Paragraph>
                                Product software engineer. Mostly experienced in front-end.
                                I like a good development culture, clear abstractions and invent
                                something awesome for products.
                            </Paragraph>
                        </HiddenSurface>
                    </Column>
                    <Column>
                        <HiddenSurface isNotHoverable>
                            <Header>Briefly about work</Header>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case title='Arrival' subtitle='Electrical vehicles. London'>
                                <Paragraph>
                                    Interacted with stakeholders, worked on MVP — Data Studio project. It’s about
                                    storing all business data in one place, updating and showing relations between
                                    them in the graph and in the table.
                                </Paragraph>
                                <Paragraph>
                                    Created UI components library with 100% test code coverage with user
                                    documentation.
                                </Paragraph>
                            </Case>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case title='Experiment X' subtitle='Rapid assay reader. London, project work'>
                                <Paragraph>
                                    Implemented not-recognized text hightlighting feature on photos for mobile
                                    application based on React Native.
                                </Paragraph>
                            </Case>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case title='VeeRoute' subtitle='Fleet management, sheduling and routing. Saint-Petersburg'>
                                <Paragraph>
                                    Created panel for logistician’s of Kazakhstan’s mail and UI components for it.
                                    Participated in migrating main project from AngularJS to Angular 6.
                                </Paragraph>
                            </Case>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case
                                title='Yota'
                                subtitle='Cell phone provider. Saint-Petersburg, summer internship'
                                isLast
                            >
                                <Paragraph>
                                    Created interactive reports with gallery and diffs comparison for screenshoot
                                    testing utility.
                                </Paragraph>
                            </Case>
                        </HiddenSurface>
                    </Column>
                    <Column>
                        <HiddenSurface>
                            <Header>More</Header>
                            <Paragraph>
                                I like frivolous storytelling on Instagram, discover new places and
                                people. Sometimes I even think that I am a creative designer and
                                writer (but actually I am not).
                            </Paragraph>
                            <Paragraph>
                                I grew up in Novouralsk, harsh Russia. Graduated as software engineer
                                from Saint Petersburg Aerospace Instrumentation University.
                            </Paragraph>
                            <Paragraph>
                                During school years bought my first iPad with money earned from creation
                                e-commerce web-sites.
                            </Paragraph>
                            <Paragraph>
                                Take a peek at my <a href='/assets/resume-2020.pdf' target='_blank'>resume</a>.
                                Say hey over <a href='mailto:hello.boriskas@gmail.com'>mail</a> or <a href='https://www.linkedin.com/in/dsitdikov/' target='_blank'>LinkedIn</a>.
                            </Paragraph>
                        </HiddenSurface>

                        <HiddenSurface isNotHoverable>
                            <Header isNotFirst>Side projects</Header>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case
                                title='Standards'
                                url='https://standards.eigenspace.team/'
                                subtitle='standards.eigenspace.team'
                                isLast
                            >
                                <Paragraph>
                                    Implemented rules for code linter, contributed to team rules in project,
                                    created a commit linter utility.
                                </Paragraph>
                            </Case>
                        </HiddenSurface>
                    </Column>
                </Wrapper>
            </React.Fragment>
        );
    }
}
