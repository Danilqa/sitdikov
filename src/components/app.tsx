import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import { GlobalStyles } from '../styles/global.styles';
import { Wrapper } from './app.styles';
import { Column } from './column/column';
import { Header } from './header/header';
import { Paragraph } from './paragraph/paragraph';
import { Case } from './case/case';

export class App extends PureComponent {

    render(): ReactNode {
        return (
            <React.Fragment>
                <GlobalStyles/>
                <Wrapper>
                    <Column>
                        <Header>Daniil Sitdikov</Header>
                        <Paragraph>
                            Product software engineer. Mostly experienced in front-end.
                            I like a good development culture, clear abstractions and invent
                            something awesome for products.
                        </Paragraph>
                    </Column>
                    <Column>
                        <Header>Experience</Header>
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
                        <Case title='Experiment X' subtitle='Rapid assay reader. London, project work'>
                            <Paragraph>
                                Implemented not-recognized text hightlighting feature on photos for mobile
                                application based on React Native.
                            </Paragraph>
                        </Case>
                        <Case title='VeeRoute' subtitle='Fleet management, sheduling and routing. Saint-Petersburg'>
                            <Paragraph>
                                Created panel for logistician’s of Kazakhstan’s mail and UI components for it.
                                Participated in migrating main project from AngularJS to Angular 6.
                            </Paragraph>
                        </Case>
                        <Case title='Yota' subtitle='Cell phone provider. Saint-Petersburg, summer internship'>
                            <Paragraph>
                                Created interactive reports with gallery and diffs comparison for screenshoot
                                testing utility.
                            </Paragraph>
                        </Case>
                    </Column>
                    <Column>
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
                            Take a peek at my resume. Say hey over mail or LinkedIn.
                        </Paragraph>

                        <Header>Side projects</Header>
                        <Case title='Standards' subtitle='standards.eigenspace.team'>
                            <Paragraph>
                                Implemented rules for code linter, contributed to team rules in project,
                                created a commit linter utility.
                            </Paragraph>
                        </Case>
                    </Column>
                </Wrapper>
            </React.Fragment>
        );
    }
}
