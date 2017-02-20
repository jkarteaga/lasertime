import React, { PropTypes } from 'react'
import { Container } from 'react-responsive-grid'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/style'
import PageHeader from '../components/PageHeader'
import { rhythm } from '../utils/typography'

function Template({ children }) {
    return (
        <div>
            <Headroom
                wrapperStyle={{
                    marginBottom: rhythm(1),
                }}
                style={{
                    background: '#999'
                }}
            >
                <Container
                    style={{
                        maxWidth: 960,
                        paddingTop: 0,
                        padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                    }}
                >

                    <PageHeader />
                </Container>
            </Headroom>
            <Container
                style={{
                    maxWidth: 960,
                    padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                    paddingTop: 0,
                }}
            >
                {children}
            </Container>
        </div>
    )
}

Template.propTypes = {
    children: PropTypes.object.isRequired  // eslint-disable-line react/forbid-prop-types
}

export default Template
