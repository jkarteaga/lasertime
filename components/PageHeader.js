import React from 'react'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import ScrollProgress from './ScrollProgress'
import HeaderMenu from './HeaderMenu'
import PhoneList from './PhoneList'
import Logo from './SiteLogo'
import Title from './SiteTitle'
import SocialList from './SocialList'


class PageHeader extends React.Component {

    state = {
        timer: null,
    }

    componentDidMount() {
        window.addEventListener('scroll', this._onScroll)
    }


    _onScroll = () => {
        // console.log('---', document.body.scrollTop)
        let timer = this.state.timer;
        if (timer) {
            clearTimeout(timer)
            this.setState({
                timer: null
            })
            // console.log('---', 'clear')
        }

        const id = setTimeout(() => {
            // console.log('---', 'timer')
            if (document.body.scrollTop > 49) {
                this._pageHeaderElement.classList.add('PageHeader--fixed')
            } else {
                this._pageHeaderElement.classList.remove('PageHeader--fixed')
            }
        }, 10)

        this.setState({
            timer: id
        })

    }


    render() {
        const { leftMenuItems, rightMenuItems, fixedPhone, mobilePhone } = config
        return (
            <header className="PageHeader">
                <div className="PageHeader__wrapper" ref={(ref) => { this._pageHeaderElement = ref }}>
                    <div className="PageHeader__items">

                        <div className="PageHeader__item">
                            <PhoneList items={[fixedPhone, mobilePhone]} />
                            <HeaderMenu position="left" items={leftMenuItems} />
                        </div>

                        <div className="PageHeader__item">
                            <Link to={prefixLink('/')}>
                                <Title />
                                <Logo />
                            </Link>
                        </div>

                        <div className="PageHeader__item">
                            <SocialList />
                            <HeaderMenu position="right" items={rightMenuItems} />
                        </div>
                    </div>
                    <ScrollProgress backgroundColor="#EDD483" />
                </div>
            </header>
        )
    }
}

PageHeader.propTypes = {}
PageHeader.defaultProps = {}

export default PageHeader
