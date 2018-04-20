import React from 'react'
import Helmet from 'react-helmet'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import SliderItem from '../components/SliderItem'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Grid, GridItem } from '../components/AdvantagesGrid'
import qualityIcon from '../css/icons/icon-quality.svg'
import individualIcon from '../css/icons/icon-individual.svg'
import experienceIcon from '../css/icons/icon-experience.svg'
import pricesIcon from '../css/icons/icon-prices.svg'
import Quote from '../components/Quote'
import Testimonials from '../components/Testimonials'
import TextHeader from '../components/TextHeader'
import ServiceList from '../components/ServiceList'

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
                <TextHeader caption="О Нас" heading="Наша Миссия" />

                <p
                    style={{
                        margin: '0',
                        padding: '0 4%',
                        lineHeight: '1.5em',
                        marginBottom: '10px',
                    }}
                >
                    Медицинский центр <strong>«Знак качества»</strong>{' '}
                    предлагает квалифицированную консультацию врача. Мы
                    осуществляем индивидуальный комплексный подход к каждому
                    пациенту, что выражается в разработке плана лечения, подборе
                    и использовании комплекса процедур и препаратов, нацеленных
                    на решение конкретной проблемы, поддержке и ведении пациента
                    в дальнейшем.
                </p>

                <TextHeader caption="Как Мы Работаем" heading="Наш Подход" />

                <p
                    style={{
                        margin: '0',
                        padding: '0 4%',
                        lineHeight: '1.5em',
                    }}
                >
                    Для устранения имеющейся проблемы наши врачи используют
                    наиболее щадящие, безболезненные и эффективные методики, а
                    также стремятся предпринять превентивные меры для
                    предотвращения возникновения проблем в будущем. Безопасность
                    при проведении процедур и дальнейшем сопровождении пациентов
                    — это непременное условие качественной работы нашей клиники!
                </p>

                <TextHeader caption="Мы Гордимся" heading="Наши Преимущества" />
                <div className={'IndexPageAdvantages'}>
                    <Grid>
                        <GridItem
                            icon={individualIcon}
                            title="Индивидуальный подход"
                            description="Индивидуальное комплексное использование доказавших свою эффективность методик. Дальнейшее сопровождение и поддержка пациента."
                        />
                        <GridItem
                            icon={pricesIcon}
                            title="Демократичные цены"
                            description="Проводим гибкую ценовую политику без навязывания лишних процедур. Постоянно проводим акции на самые актуальные процедуры."
                        />
                        <GridItem
                            icon={qualityIcon}
                            title="Высококачественные препараты"
                            description="Используются только сертифицированные препараты и аппаратные комплексы от проверенных поставщиков."
                        />
                        <GridItem
                            icon={experienceIcon}
                            title="Высокая квалификация"
                            description="Наши врачи имеют сертификаты на все проводимые процедуры. Регулярно проходят курсы повышения квалификации в России и за рубежом."
                        />
                    </Grid>
                </div>
                <TextHeader caption="Мы Помогаем" heading="Наши Услуги" />
                <ServiceList
                    listItems={[
                        'Нитевой лифтинг',
                        'Биоревитализация',
                        'Контурная пластика',
                        'Фотоомоложение',
                        'Лазерное омоложение',
                        'Лазерная эпиляция',
                        'Лазерный пилинг',
                        'Лифтинг INFINI',
                        'Химические пилинги',
                        'Лечение гипергидроза',
                        'Botox, Dysport',
                        'Чистка лица',
                        'Плазмолифтинг',
                        'Увеличение губ',
                        'Коррекция морщин',
                        'Удаление сосудов',
                        'Удаление папиллом',
                        'Мезотерапия',
                        'SMAS (СМАС) лифтинг',
                    ]}
                />

                <Quote
                    text={
                        'Если некрасива девочка, то в этом виновата природа, если некрасива женщина – в этом виновата она сама.'
                    }
                    author={'Французская мудрость'}
                    noBorder
                />
                <Testimonials
                    testimonials={[
                        {
                            text:
                                'В клинику "Знак качества" обратилась по совету подруги и ни разу не пожалела. Здесь есть все, что мне нужно: современная аппаратура, качественные препараты, а главное работают настоящие профессионалы! Очень уютно и душевно!',
                            name: 'Елизавета Егорова',
                            link: 'https://vk.com/zuka_l',
                        },
                        {
                            text:
                                'Сотрудники полностью оправдывают название клиники, работу свою выполняют на высшем уровне. Знаю, о чем говорю, т.к. мне есть с чем сравнить. Меня привлекает удобное расположение, широкий выбор услуг и адекватные цены. Так держать!',
                            name: 'Вероника Сагитова',
                            link:
                                'https://www.facebook.com/profile.php?id=100001281550815',
                        },
                        {
                            text:
                                'Отличное соотношение цена-качество! У главврача клиники Аллы Александровны Легун золотые руки! Сделала у нее фулфейс-лифтинг, результат великолепный. Мне очень нравится, буду ходить сюда в дальнейшем.',
                            name: 'Алла Леонова',
                            link:
                                'https://www.facebook.com/profile.php?id=100001723262785',
                        },
                    ]}
                />
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
        indexTestimonialsBg: imageSharp(
            id: { regex: "/index-testimonials-bg/" }
        ) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
