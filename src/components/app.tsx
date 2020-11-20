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
                                I like a good development culture, clear abstractions, and
                                invent something extraordinary for products.
                            </Paragraph>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Header isNotFirst>More</Header>
                            <Paragraph>
                                I grew up in Novouralsk, harsh Russia. Graduated as software engineer
                                from Saint Petersburg Aerospace Instrumentation University.
                            </Paragraph>
                            <Paragraph>
                                I change my behavior through cognitive behavioral therapy and a mentor.
                                Also, I am the creator of a podcast about healthy communication. Sometimes
                                I even think that I am a creative designer and writer (but actually I am not :D)
                            </Paragraph>
                            <Paragraph>
                                During school years bought my first iPad with money earned from creation
                                e-commerce web-sites.
                            </Paragraph>
                            <Paragraph>
                                Take a peek at my <a href='/assets/resume-2020.pdf' target='_blank'>resume</a>.
                                Say hey over <a href='mailto:hello.boriskas@gmail.com'>mail</a> or <a
                                    href='https://www.linkedin.com/in/dsitdikov/'
                                    target='_blank'
                                >LinkedIn</a>.
                            </Paragraph>
                        </HiddenSurface>
                    </Column>
                    <Column>
                        <HiddenSurface isNotHoverable>
                            <Header>Briefly about work</Header>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case title='Arrival' subtitle='Electrical vehicles, robotics, city-solutions. London'>
                                <Paragraph>
                                    <a href='https://www.linkedin.com/pulse/linkedin-top-startups-2020-10-uk-companies-watch-emily-spaven/'>
                                        Startup #1 of 2020 based according to LinkedIn.
                                    </a>
                                </Paragraph>
                                <Paragraph>
                                    Implemented project for the accounting department. It's about the
                                    digitization of supplier invoices for payment. Technically, it's a pipeline with
                                    processes like recognition in AI service, enrichment by business data from
                                    other data sources, and exporting to the payment system.
                                </Paragraph>
                                <Paragraph>
                                    Implemented Data Studio MVP. It’s about
                                    storing all business data in one place, updating and showing relations between
                                    them in the graph or in the grid.
                                </Paragraph>
                                <Paragraph>
                                    Implemented Invoice Management product prototype.
                                </Paragraph>
                                <Paragraph>
                                    Created UI components library with 100% test code coverage and auto-generated
                                    user documentation.
                                </Paragraph>
                                <Paragraph>
                                    Researched &nbsp;
                                    <a
                                        target='_blank'
                                        href='https://medium.com/eigenspace/what-instrument-should-i-select-for-prototyping-d2887d95958d'
                                    >the prototyping instruments</a>, especially — Framer X.
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
                                </Paragraph>
                                <Paragraph>
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
                                    testing utility. Started and finished project from the scratch.
                                </Paragraph>
                            </Case>
                        </HiddenSurface>
                    </Column>
                    <Column>
                        <HiddenSurface isNotHoverable>
                            <Header>Side projects</Header>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case
                                title='Standards'
                                url='https://standards.eigenspace.team/'
                                subtitle='standards.eigenspace.team'
                                isLast
                            >
                                <Paragraph>
                                    Implemented rules for code linter, contributed to team rules in project and
                                    UI browser testing library. Created a commit linter and performance testing
                                    utilities.
                                </Paragraph>
                            </Case>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case
                                title='Emma'
                                url='https://sitdikov.tech/emma'
                                subtitle='Online tutor'
                                isLast
                            >
                                <Paragraph>
                                    Just asks you random questions in English.
                                </Paragraph>
                            </Case>
                        </HiddenSurface>

                        <HiddenSurface isNotHoverable>
                            <Header isNotFirst>Hackatons</Header>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case
                                title='Digital Breakout 2019'
                                url='https://www.linkedin.com/posts/dsitdikov_it-was-the-final-of-digital-breakdown-the-activity-6586180236222709760-5nH-'
                                subtitle='3-th place | The biggest by Guinness Records'
                            >
                                <Paragraph>
                                    Implemented proof of concept project: autonomous hiring and digital profiles
                                </Paragraph>
                            </Case>
                        </HiddenSurface>
                        <HiddenSurface>
                            <Case
                                title='Hackalong'
                                url='https://devpost.com/software/gitbattle'
                                subtitle='1-st place | devpost.com'
                                isLast
                            >
                                <Paragraph>
                                    Implemented GitBattle project: contests for open source contributors
                                </Paragraph>
                            </Case>
                        </HiddenSurface>
                    </Column>
                </Wrapper>
            </React.Fragment>
        );
    }
}
