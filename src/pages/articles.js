import React from 'react'
import ArticlePreview from '../components/ArticlePreview'
import Helmet from '../components/HelmetWrapper'
import ArticleHeaderImage from '../components/ArticleHeaderImage'

function ArticleList({ data }) {
    return (
        <div>
            <Helmet data={data} title="Статьи" description="" />
            <ArticleHeaderImage
                title={'Статьи'}
                imgSizes={data.articlesHeader.sizes}
                alignRight
                noEffects
            />

            <div className="PageContent__wrapper">
                <ArticlePreview
                    title={'Всё, что нужно знать о чистке лица'}
                    path={'/articles/face-cleansing-interview/'}
                    imageRes={data.faceCleansingInterview.resolutions}
                    description={''}
                    type={'interview'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о лазерной эпиляции'}
                    path={'/articles/laser-epilation-interview/'}
                    imageRes={data.laserEpilationInterview.resolutions}
                    description={''}
                    type={'interview'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о PRP плазмолифтинге'}
                    path={'/articles/plazmolifting-interview/'}
                    imageRes={data.plazmoliftingInterview.resolutions}
                    description={''}
                    type={'interview'}
                />
                <ArticlePreview
                    title={'Всё, что нужно знать о фракционном DOT омоложении'}
                    path={'/articles/dot-rejuvenation-interview/'}
                    imageRes={data.dotRejuvenationInterview.resolutions}
                    description={''}
                    type={'interview'}
                />

                <ArticlePreview
                    title={'Глубокий 3D лифтинг на аппарате INFINI'}
                    path={'/3d-lifting-infini-moscow/'}
                    imageRes={data.liftingInfiniArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={
                        'Биоревитализация – недорогая и очень эффективная процедура'
                    }
                    path={'/biorevitalization-moscow/'}
                    imageRes={data.biorevitalizationArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Безыгольная биоревитализация'}
                    path={'/biorevitalization-vitalaser-moscow/'}
                    imageRes={
                        data.biorevitalizationVitalaserArticle.resolutions
                    }
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={
                        'Контурная пластика – современный метод борьбы с морщинами'
                    }
                    path={'/contour-correction-moscow/'}
                    imageRes={data.contourCorrectionArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={
                        'Итальянские нити Dermafil Happy Lift – революция в лифтинге'
                    }
                    path={'/dermafil-happy-lift-threads/'}
                    imageRes={data.dermafilHappyLiftThreadsArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Чистка лица в Москве - вся правда о процедуре!'}
                    path={'/facial-cleansing-moscow/'}
                    imageRes={data.facialCleansingArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Филлеры на основе гиалуроновой кислоты'}
                    path={'/hyaluronic-fillers-moscow/'}
                    imageRes={data.hyaluronicFillersArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Гипергидроз (Москва) - излечим!'}
                    path={'/hyperhidrosis-moscow/'}
                    imageRes={data.hyperhidrosisArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={
                        'Лазерная эпиляция в Москве недорого: мифы и реальность!'
                    }
                    path={'/laser-epilation-moscow/'}
                    imageRes={data.laserEpilationArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Лазерное удаление пигментных пятен'}
                    path={'/laser-pigment-spot-removal-moscow/'}
                    imageRes={data.laserPigmentSpotRemovalArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Преимущества фракционного омоложения'}
                    path={'/laser-rejuvenation-advantages-moscow/'}
                    imageRes={
                        data.laserRejuvenationAdvantagesArticle.resolutions
                    }
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Фракционное лазерное омоложение'}
                    path={'/laser-rejuvenation-moscow/'}
                    imageRes={data.laserRejuvenationArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Увеличение губ в Москве'}
                    path={'/lip-augmentation-moscow/'}
                    imageRes={data.lipAugmentationArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Тянем - потянем и вытянем лицо мезонитями'}
                    path={'/meso-threads-moscow/'}
                    imageRes={data.mesoThreadsArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Мезотерапия: молодость и свежесть'}
                    path={'/mesotherapy-moscow/'}
                    imageRes={data.mesotherapyArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Фотоомоложение - современные технологии красоты'}
                    path={'/photo-rejuvenation-moscow/'}
                    imageRes={data.photoRejuvenationArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Плазмолифтинг лица в Москве'}
                    path={'/plazmolifting-moscow/'}
                    imageRes={data.plazmoliftingArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Ритидэктомия - фейслифтинг, подтяжка лица и шеи'}
                    path={'/ritidectomy-facelifting-moscow/'}
                    imageRes={data.ritidectomyFaceliftingArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Нити Silhouette Lift Soft'}
                    path={'/silhouette-lift-soft-threads/'}
                    imageRes={data.silhouetteLiftSoftThreadsArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Нити Spring Thread'}
                    path={'/spring-thread/'}
                    imageRes={data.springThreadArticle.resolutions}
                    description={''}
                    type={'article'}
                />
                <ArticlePreview
                    title={'Ультразвуковой пилинг'}
                    path={'/supersonic-peeling-moscow/'}
                    imageRes={data.supersonicPeelingArticle.resolutions}
                    description={''}
                    type={'article'}
                />
            </div>
        </div>
    )
}

export default ArticleList

export const pageQuery = graphql`
    query Articles {
        ...Helmet
        articlesHeader: imageSharp(id: { regex: "/articles-header/" }) {
            sizes(maxWidth: 960, quality: 60) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        # Preview images
        faceCleansingInterview: imageSharp(
            id: { regex: "/face-cleansing-interview/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }
        laserEpilationInterview: imageSharp(
            id: { regex: "/laser-epilation-interview/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }
        plazmoliftingInterview: imageSharp(
            id: { regex: "/plazmolifting-interview/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }
        dotRejuvenationInterview: imageSharp(
            id: { regex: "/dot-rejuvenation-interview/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        liftingInfiniArticle: imageSharp(
            id: { regex: "/3d-lifting-infini-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        biorevitalizationArticle: imageSharp(
            id: { regex: "/biorevitalization-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        biorevitalizationVitalaserArticle: imageSharp(
            id: { regex: "/biorevitalization-vitalaser-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        contourCorrectionArticle: imageSharp(
            id: { regex: "/contour-correction-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        dermafilHappyLiftThreadsArticle: imageSharp(
            id: { regex: "/dermafil-happy-lift-threads-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        facialCleansingArticle: imageSharp(
            id: { regex: "/facial-cleansing-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        hyaluronicFillersArticle: imageSharp(
            id: { regex: "/hyaluronic-fillers-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        hyperhidrosisArticle: imageSharp(
            id: { regex: "/hyperhidrosis-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        laserEpilationArticle: imageSharp(
            id: { regex: "/laser-epilation-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        laserPigmentSpotRemovalArticle: imageSharp(
            id: { regex: "/laser-pigment-spot-removal-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        laserRejuvenationAdvantagesArticle: imageSharp(
            id: { regex: "/laser-rejuvenation-advantages-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        laserRejuvenationArticle: imageSharp(
            id: { regex: "/dot-rejuvenation-interview/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        lipAugmentationArticle: imageSharp(
            id: { regex: "/lip-augmentation-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        mesoThreadsArticle: imageSharp(
            id: { regex: "/meso-threads-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        mesotherapyArticle: imageSharp(id: { regex: "/mesotherapy-article/" }) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        photoRejuvenationArticle: imageSharp(
            id: { regex: "/photo-rejuvenation-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        plazmoliftingArticle: imageSharp(
            id: { regex: "/plazmolifting-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        ritidectomyFaceliftingArticle: imageSharp(
            id: { regex: "/ritidectomy-facelifting-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        silhouetteLiftSoftThreadsArticle: imageSharp(
            id: { regex: "/silhouette-lift-soft-threads-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        springThreadArticle: imageSharp(
            id: { regex: "/spring-thread-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }

        supersonicPeelingArticle: imageSharp(
            id: { regex: "/supersonic-peeling-article/" }
        ) {
            resolutions(width: 180, height: 180) {
                ...GatsbyImageSharpResolutions_noBase64
            }
        }
    }
`
