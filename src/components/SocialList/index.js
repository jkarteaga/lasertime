import React, { PropTypes } from 'react'

function Social(props) {
    return (
        <div className="SocialList">
            <a
                className="SocialList__link SocialList__link--fb"
                href="https://www.facebook.com/Lasertime"
            >
                <svg viewBox="0 0 64 64">
                    <circle
                        className="icon-fb"
                        r="32"
                        cx="50%"
                        cy="50%"
                        fill="#5D77AD"
                    />
                    <path
                        fill="#FFF"
                        d="M34.22 21.3c0-1.47.98-1.8 1.66-1.8h4.22v-6.45l-5.8-.02c-6.45 0-7.92 4.8-7.92 7.87v3.4h-3.73v7.52h3.76v18.8h7.54V31.8h5.58l.7-7.52H34.2v-3z"
                    />
                </svg>
            </a>

            <a
                className="SocialList__link SocialList__link--vk"
                href="http://vk.com/laser_msk"
            >
                <svg viewBox="0 0 64 64">
                    <circle
                        className="icon-vk"
                        r="32"
                        cx="50%"
                        cy="50%"
                        fill="#4B6C91"
                    />
                    <path
                        fill="#FFF"
                        d="M50.53 23.03c-.52-.44-2.52-.42-4.5-.4-2.03 0-4.04 0-4.5.2-.43.16-1.4 2.5-2.66 4.9-1.43 2.73-3.2 5.35-4.3 5.33-1.44-.02-1.1-4.5-1.02-7.78.05-2.18-.3-2.86-.62-3.07-.77-.5-2.86-1-2.86-1s-6.27-.5-7.17 2.25c1.2.16 3.25-.23 2.46 8.2-.04.4-.96 3.86-3.9-.83-.7-1.15-3.52-8.15-4.5-8.18-3.24-.1-6.43-.22-7.56.4-1.04.6 1.4 5.43 5.52 11.88 3.37 5.28 6.94 9.4 13.1 10.44 1.15.12 4.18.25 5.12-.2.65-.32-.14-4.9 2.04-5.32 1-.2 4.72 4.75 6.14 5.32.86.34 2.76.47 4.7.4 2.1-.06 4.48.2 4.7-1.22.53-3.16-6.33-7.26-6.53-9.22-.17-1.4 2.5-3.97 3.86-5.93 1.7-2.4 3.5-5.27 2.46-6.15"
                    />
                </svg>
            </a>

            <a
                className="SocialList__link SocialList__link--inst"
                href="https://www.instagram.com/allalegun"
            >
                <svg viewBox="0 0 64 64">
                    <circle
                        className="icon-inst"
                        r="32"
                        cx="50%"
                        cy="50%"
                        fill="#4B6C91"
                    />
                    <path
                        fill="#FFF"
                        d="M51.1 41.68c0 5.35-4.33 9.7-9.67 9.7H22.4c-5.34 0-9.68-4.35-9.68-9.7V22.66c0-5.34 4.34-9.7 9.68-9.7h19.03c5.34 0 9.68 4.36 9.68 9.7v19.02z"
                    />
                    <path
                        className="icon-inst"
                        fill="#4B6C91"
                        d="M41.43 17.15H22.4c-3.04 0-5.5 2.47-5.5 5.5V41.7c0 3.04 2.46 5.5 5.5 5.5h19.03c3.03 0 5.5-2.46 5.5-5.5V22.66c0-3.04-2.47-5.5-5.5-5.5z"
                    />
                    <path
                        fill="#FFF"
                        d="M31.9 42.06c-5.44 0-9.88-4.44-9.88-9.9 0-5.44 4.44-9.88 9.9-9.88 5.45 0 9.88 4.44 9.88 9.9 0 5.44-4.44 9.88-9.9 9.88z"
                    />
                    <path
                        className="icon-inst"
                        fill="#4B6C91"
                        d="M31.9 26.46c-3.13 0-5.7 2.56-5.7 5.7 0 3.16 2.57 5.72 5.7 5.72 3.16 0 5.72-2.56 5.72-5.7 0-3.15-2.56-5.72-5.7-5.72z"
                    />
                    <path
                        fill="#FFF"
                        d="M42.12 24.33c-1.3 0-2.34-1.05-2.34-2.34 0-1.3 1.05-2.37 2.34-2.37 1.3 0 2.34 1.05 2.34 2.34 0 1.28-1.05 2.33-2.34 2.33z"
                    />
                </svg>
            </a>
        </div>
    )
}

Social.propTypes = {}
Social.defaultProps = {}

export default Social
