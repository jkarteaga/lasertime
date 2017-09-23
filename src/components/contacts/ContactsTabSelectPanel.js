import React from 'react'
import PropTypes from 'prop-types'

class ContactsTabSelectPanel extends React.Component {

    state = {
        isOpened: false
    }

    setGroupOpen = () => {
        this.setState({
            isOpened: true
        })
    }

    setGroupClose = () => {
        this.setState({
            isOpened: false
        })
    }

    render() {
        const { activeMode, changeMode } = this.props
        const { isOpened } = this.state

        const groupItems = ['пешком по карте', 'пешком по фото', 'пешком по видео']
        const groupModes = ['svgmap', 'photo', 'video']

        let groupSelectItem1 = groupItems[0]
        let groupSelectItem2 = groupItems[1]
        let groupSelectItem3 = groupItems[2]
        let onClickMode1 = 'svgmap'
        let onClickMode2 = 'photo'
        let onClickMode3 = 'video'
        const activeClassName = 'ContactsTabSelectPanel__option--active'

        switch (activeMode) {
            case 'photo':
                groupSelectItem1 = groupItems[1]
                groupSelectItem2 = groupItems[0]
                groupSelectItem3 = groupItems[2]
                onClickMode1 = 'photo'
                onClickMode2 = 'svgmap'
                onClickMode3 = 'video'
                break
            case 'video':
                groupSelectItem1 = groupItems[2]
                groupSelectItem2 = groupItems[0]
                groupSelectItem3 = groupItems[1]
                onClickMode1 = 'video'
                onClickMode2 = 'svgmap'
                onClickMode3 = 'photo'
        }


        return (
            <ul className="ContactsTabSelectPanel">

                <li
                    className={`ContactsTabSelectPanel__option ${~groupModes.indexOf(activeMode) ? activeClassName : ''}`}
                    onClick={() => changeMode(onClickMode1)}
                    onMouseEnter={this.setGroupOpen}
                    onMouseLeave={this.setGroupClose}
                    onMouseUp={this.setGroupClose}
                >
                    <span>{groupSelectItem1}</span>
                    <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#ccc">
                        <polygon points="12 26 19 20 32 33 45 19 52 26 32 47" />
                    </svg>

                    <ul className={`ContactsTabSelectPanelGroup ${isOpened ? 'ContactsTabSelectPanelGroup--opened' : ''}`}>
                        <li
                            className="ContactsTabSelectPanelGroup__option"
                            onClick={(e) => {
                                e.stopPropagation()
                                changeMode(onClickMode2)
                            }}
                            onMouseUp={this.setGroupClose}
                        >
                            <span>{groupSelectItem2}</span>
                        </li>
                        <li
                            className="ContactsTabSelectPanelGroup__option"
                            onClick={(e) => {
                                e.stopPropagation()
                                changeMode(onClickMode3)
                            }}
                            onMouseUp={this.setGroupClose}
                        >
                            <span>{groupSelectItem3}</span>
                        </li>
                    </ul>

                </li>
                <li
                    className={`ContactsTabSelectPanel__option ${activeMode === 'gmap' ? activeClassName : ''}`}
                    onClick={() => changeMode('gmap')}
                >
                    на машине
                </li>
                <li
                    className={`ContactsTabSelectPanel__option ${activeMode === 'taxi' ? activeClassName : ''}`}
                    onClick={() => changeMode('taxi')}
                >
                    на такси
                </li>
            </ul>
        )
    }
}

ContactsTabSelectPanel.propTypes = {
    activeMode: PropTypes.string.isRequired,
    changeMode: PropTypes.func.isRequired
}
ContactsTabSelectPanel.defaultProps = {}

export default ContactsTabSelectPanel
