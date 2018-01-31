import React from 'react'
import Helmet from '../../../components/HelmetWrapper'
import InfoPanel from '../../../components/InfoPanel/index'
import List from '../../../components/List/index'
import InfoBlock from '../../../components/InfoBlock/index'
import CollapsiblePanel from '../../../components/CollapsiblePanel/index'
import TOC from '../../../components/TOC'
import Img from 'gatsby-image'
import FloatBlock from '../../../components/FloatBlock/index'
import ServiceStats from '../../../components/ServiceStats'
import ArticleHeaderImage from '../../../components/ArticleHeaderImage'
import Anchor from '../../../components/Anchor'

function LiftingInfiniService({ data }) {
    return (
        <div>
            <Helmet data={data} title="Удаление сосудов с помощью КТП лазера" description="" />

            <ArticleHeaderImage title="Лазерное удаление сосудов" imgSizes={data.ktpLaserServiceHeader.sizes} />

            <div className="PageContent__wrapper">
                <FloatBlock right oneThird>
                    <TOC title={'Содержание'}>
                        <a href="#intro">Введение</a>
                        <a href="#stats">Статистика и цены</a>
                        <a href="#theory">Принцип действия</a>
                        <a href="#advantages">Преимущества процедуры</a>
                        <a href="#indications">Показания к процедуре</a>
                        <a href="#contraindications">Противопоказания</a>
                        <a href="#side-effects">Побочные эффекты</a>
                        <a href="#order">Порядок выполнения процедуры</a>
                        <a href="#preparation">Как подготовиться к процедуре?</a>
                        <a href="#memo">Памятка по процедуре</a>
                    </TOC>
                </FloatBlock>

                <Anchor id="intro" />
                <p>На сегодняшний день большое количество людей обращают свое внимание на состояние кожи своего лица. К возрастным изменениям кожи на лице мы относим расширение капиллярной сетки в области носа, щек, подбородка. На фармацевтическом рынке нам предлагается большое количество кремов, гелей, мазей и сывороток, эффективность которых чрезвычайна низка!</p>
                <p>Важно понимать, что растянувшийся (парализованный) сосуд, изменяется структурно и теряет способность к сокращению и невозможно обратить эти реакции и медикаментозно, к сожалению, мы бессильны. Избавится от расширенных сосудов на лице можно только одним способом – удалить их специализированным лазером. Лазерное воздействие КТП лазера предусматривает удаление сосуда без повреждения кожного покрова.</p>

                <div className={'clearfix'}> </div>
                <Anchor id="stats" />
                <ServiceStats durationText={'от 60 мин.'} priceText={'от 15 000 руб.'} priceLink={'/prices/laser-vessels-removal'} quantityText={'1 - 3'} />
                <Anchor id="theory" />
                <CollapsiblePanel title={'Принцип действия'}>
                    <p>КТП лазер создан для лечения сосудистых дефектов кожи.</p>
                    <p>КТП лазер – это неодимовый лазер на гранате Nd:YAG, спаренный с нелинейным кристаллом титанил фосфата калия КТП, который удваивает частоту излучаемого света до получения длины волны 532 нм. , расположенной в зеленом спектре.</p>
                    <p>Действие данного лазера основано на тепловом воздействии лазерного излучения на сосуды без изменения структуры прилегающих тканей. Излучение КТП лазера проникает сквозь поверхностные слои кожи и хорошо поглощается в сосуде гемоглобином крови. В поврежденном кровеносном сосуде происходит выделение большого количества тепла, кровь в сосуде свертывается и разрушается внутренняя стенка сосуда. Далее патологический сосуд зарастает соединительной тканью, а кожа приобретает нормальный естественный цвет.</p>
                    <p>КТП самый лучший лазер на сегодняшний день для удаления патологически расширенных сосудов в области лица.</p>
                </CollapsiblePanel>

                <Anchor id="advantages" />
                <InfoPanel title={'Преимущества лазерного удаления сосудов'} shadow>
                    <List marker="plus">
                        <ul>
                            <li>Неинвазивность и безболезненность</li>
                            <li>Отсутствие рубцевания и побочных эффектов</li>
                            <li>Высокие технологические характеристики лазера</li>
                            <li>Поверхностное охлаждение кожи сапфировым стеклом полностью снимает болевые ощущения</li>
                            <li>Высокая результативность – с 1 процедуры</li>
                        </ul>
                    </List>
                </InfoPanel>

                <Anchor id="indications" />
                <InfoPanel title={'Показания к процедуре'} color={'green'} shadow>
                    <List marker={'check'}>
                        <ul>
                            <li>Телеангиоэктазии</li>
                            <li>Винные пятна</li>
                            <li>Гемангиомы</li>
                            <li>Ангиомы</li>
                            <li>Розовые угри, Розацеа</li>
                            <li>Венозные мальформации</li>
                            <li>Расширенные древовидные сосуды на лице</li>
                        </ul>
                    </List>
                </InfoPanel>

                <Anchor id="contraindications" />
                <InfoPanel title={'Противопоказания к процедуре'} color={'red'} shadow>
                    <List marker={'cross'}>
                        <ul>
                            <li>Онкологические заболевания</li>
                            <li>Острые дерматологические заболевания в области воздействия</li>
                            <li>Сахарный диабет в стадии декомпенсации</li>
                            <li>Эпилепсия</li>
                            <li>Беременность</li>
                            <li>Свежий загар</li>
                            <li>Заболевания кровеносной системы</li>
                            <li>Прием антикоагулянтов и антиагрегантов</li>
                        </ul>
                    </List>
                </InfoPanel>

                <Anchor id="side-effects" />
                <InfoPanel title="Побочные эффекты применения КТП лазера" color="orange" shadow>
                    <List marker="minus">
                        <ul>
                            <li>Ожог, который может быть вызван повышенной мощностью, остатков тональных средств на коже, сокрытия факта загара пациента, нарушение постпроцедурного ухода.</li>
                            <li>Рубцовые изменения чаще всего связаны с неправильной подготовкой к процедуре, наличием загара, нарушение постпроцедурного ухода или неправильно подобранными параметрами лечащим врачом.</li>
                            <li>Временное покраснение в месте обработки лазером, которое разрешается самостоятельно в течении 30 мин - 4 часов.</li>
                            <li>Небольшая отечность в области обработки лазером, которую можно уменьшить с помощью оксикорт спрея или лиотон геля.</li>
                            <li>Гиперпигментация (появление темных пятен), возникающая в следствие последующего загара.</li>
                            <li>Гипопигментация (появление белых пятен), возникающая вследствие сокрытия факта загара пациентом.</li>
                        </ul>
                    </List>
                </InfoPanel>

                <Anchor id="order" />
                <InfoPanel title={'Порядок проведение процедуры'} shadow>
                    <List>
                        <ol>
                            <li>Обработка кожи антисептическими растворами, умывание</li>
                            <li>Наложение специального геля определенной вязкости</li>
                            <li>Проведение процедуры</li>
                            <li>После завершения процедуры осторожно снимается гель, кожа обрабатывается регенерирующими кремами, можно приложить лед</li>
                        </ol>
                    </List>
                </InfoPanel>

                <Anchor id="preparation" />
                <InfoPanel title={'Как подготовиться к процедуре'} shadow color={'gray'}>
                    <List>
                        <ol>
                            <li>В день процедуры не наносить на кожу косметические средства (особенно с тональными эффектами)</li>
                            <li>За месяц до процедуры исключить инсоляцию (загар), воизбежание ожогов и гипопигментации.</li>
                            <li>Для мужчин рекомендуется бритье</li>
                            <li>На коже не должно быть ссадин, царапин и раздражения. Отложить на время любые косметические процедуры на данных участках.</li>
                            <li>Не рекомендуется загорать в течение месяца после процедуры. Использовать крема со степенью защиты более 50.</li>
                        </ol>
                    </List>
                </InfoPanel>

                <Anchor id="memo" />
                <InfoPanel title={'Памятка по процедуре'} color={'gray'} shadow>
                    <List>
                        <ol>
                            <li>Настоятельно не рекомендуется посещать солярий, сауны, бани как минимум 2 неделе после процедуры</li>
                            <li>Не наносить на обработанные участки кожи косметические средства в течение 2-3 дней</li>
                            <li>Наносить на обработанные области гель лиотон и оксикорт спрей, чередуя их в течении 3-4 дней.</li>
                            <li>При появлении герпетических высыпаний применять антигерпесные препараты в дозе 1 гр в день (Валвил, Валтрекс).</li>
                        </ol>
                    </List>
                </InfoPanel>
            </div>
        </div>
    )
}

export default LiftingInfiniService

export const pageQuery = graphql`
    query KTPLaserServiceQuery {
        ...Helmet
        ktpLaserServiceHeader: imageSharp(id: { regex: "/ktp-laser-service-header/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`