import React, { PropTypes } from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import HeaderMenu from '../components/HeaderMenu'

import { rhythm } from '../utils/typography'

class _template extends React.Component {
    render() {
        return (
            <div>
                <Headroom
                    wrapperStyle={{
                        marginBottom: rhythm(1),
                    }}
                    style={{
                        background: '#252525'
                    }}
                >
                    <Container
                        style={{
                            maxWidth: 960,
                            paddingTop: 0,
                            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                        }}
                    >
                        <Link
                            to={prefixLink('/')}
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Logo
                        </Link>
                        <HeaderMenu />
                    </Container>
                </Headroom>
                <Container
                    style={{
                        maxWidth: 960,
                        padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                        paddingTop: 0,
                    }}
                >
                    {this.props.children}
                </Container>
            </div>
        )
    }
}

_template.propTypes = {
    children: PropTypes.object.isRequired
}
_template.defaultProps = {}

export default _template

