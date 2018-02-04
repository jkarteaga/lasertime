import React from 'react'
import Helmet from 'react-helmet'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import SliderItem from '../components/SliderItem'
import 'pure-react-carousel/dist/react-carousel.es.css'

class IndexPage extends React.Component {
    state = {
        isSpinning: false,
    }

    render() {
        const { data } = this.props
        // setTimeout(() => {
        //     this.setState({ isSpinning: false })
        // }, 1000)
        return (
            <div>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>
                    <meta
                        name="description"
                        content={data.site.siteMetadata.description}
                    />
                    <meta
                        name="keywords"
                        content={data.site.siteMetadata.keywords}
                    />
                </Helmet>
                <CarouselProvider
                    className={'Slider'}
                    naturalSlideWidth={96}
                    naturalSlideHeight={40}
                    hasMasterSpinner={this.state.isSpinning}
                    totalSlides={4}
                >
                    <Slider>
                        <Slide index={0}>
                            <SliderItem
                                imageSizes={data.indexSlideBeauty.sizes}
                                title={'КРАСОТА'}
                                align="right"
                                color="#924d45"
                            />
                        </Slide>
                        <Slide index={1}>
                            <SliderItem
                                imageSizes={data.indexSlideYouth.sizes}
                                title={'МОЛОДОСТЬ'}
                                align="left"
                                color="#fff"
                            />
                        </Slide>

                        <Slide index={2}>
                            <SliderItem
                                imageSizes={data.indexSlideQuality.sizes}
                                title={'КАЧЕСТВО'}
                                align="right"
                                color="#f7dfd5"
                            />
                        </Slide>
                        <Slide index={3}>
                            <SliderItem
                                imageSizes={data.indexSlideFreshness.sizes}
                                title={'СВЕЖЕСТЬ'}
                                align="left"
                                color="#7ba310"
                            />
                        </Slide>
                    </Slider>
                    <DotGroup className={'SliderDotGroup'} />
                </CarouselProvider>
                <p>
                    Медицинский центр «Знак качества» - команда молодых,
                    энергичных и увлеченных своим делом
                    специалистов-профессионалов в области лазерной и
                    инъекционной косметологии.
                </p>
                <p>
                    Центр открыт в 2013 году, однако в кратчайшие сроки завоевал
                    заслуженную популярность, благодаря использованию новейшего
                    оборудования, высокому профессионализму врачей и доступным
                    ценам.
                </p>
            </div>
        )
    }
}

export default IndexPage

export const pageQuery = graphql`
    query IndexPage {
        site {
            siteMetadata {
                title
                description
                keywords
            }
        }
        indexSlideBeauty: imageSharp(id: { regex: "/index-slide-beauty/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        indexSlideYouth: imageSharp(id: { regex: "/index-slide-youth/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }

        indexSlideQuality: imageSharp(id: { regex: "/index-slide-quality/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        indexSlideFreshness: imageSharp(
            id: { regex: "/index-slide-freshness/" }
        ) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
