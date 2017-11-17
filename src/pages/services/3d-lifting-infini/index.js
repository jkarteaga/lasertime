import React from 'react'
import Helmet from '../../../components/HelmetWrapper'
import InfoPanel from '../../../components/InfoPanel/index'
import List from '../../../components/List/index'
import InfoBlock from '../../../components/InfoBlock/index'
import CollapsiblePanel from '../../../components/CollapsiblePanel/index'
import PullQuote from '../../../components/PullQuote/index'
import TOC from '../../../components/TOC'
import Img from 'gatsby-image'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import FloatBlock from '../../../components/FloatBlock/index'
import ServiceStats from '../../../components/ServiceStats'
import ArticleHeaderImage from '../../../components/ArticleHeaderImage'

function LiftingInfiniService({ data }) {
    configureAnchors({ offset: -70, scrollDuration: 500 })

    return (
        <div>
            <Helmet data={data} title="3D лифтинг INFINI" description="" />

            <ArticleHeaderImage
                title="3D лифтинг INFINI®"
                imgSizes={data.laserEpilationServiceHeader.sizes}
            />

            <div className="PageContent__wrapper">
                <FloatBlock right oneThird>
                    <TOC title={'Содержание'}>
                        <a href="#intro">Введение</a>
                        <a href="#stats">Статистика и цены</a>
                        <a href="#theory">Принцип действия лазера</a>
                        <a href="#advantages">Преимущества лазерной эпиляции</a>
                        <a href="#indications">Показания к процедуре</a>
                        <a href="#contraindications">Противопоказания</a>
                        <a href="#order">Порядок выполнения процедуры</a>
                        <a href="#side-effects">Побочные эффекты</a>
                        <a href="#preparation">
                            Как подготовиться к процедуре?
                        </a>
                        <a href="#memo">Памятка по процедуре</a>
                        <a href="#photo">Результат до/после</a>
                    </TOC>
                </FloatBlock>

                <ScrollableAnchor id={'intro'}>
                    <div />
                </ScrollableAnchor>
                <p>
                    Что такое RF-терапия - ток очень высокой частоты
                    воздействует на ткань через электроды, которые контактируют
                    с кожей. Ток, проходящий через живые ткани оказывает на них
                    тепловое воздействие. Таким образом, RF терапия позволяет
                    оказывать контролируемое тепловое воздействие на заданном
                    участке кожи.
                </p>
                <p>
                    Первая в мире RF система INFINI сочетает в себе преимущество
                    двух технологий: фракционной радиочастотной микроиглы(MFR) и
                    поверхностной радиочастоты (SFR).
                </p>
                <p>Принцип работы:</p>
                <p>
                    Микроиглы толщиной 200мкм, имеющие золотое покрытие и
                    силиконовую изоляцию, проникают вовнутрь тканей на заданную
                    глубину и воздействуют RF излучением в области кончиков игл.
                    Такого рода воздействия вызывают реконструкцию кожных
                    структур: коллагена, эластина и дермального матрикса.
                </p>
                <p>
                    Процедура ИНФИНИ, объединившая достоинства двух НОВЕЙШИХ
                    технологий: фракционного и радиочастотного
                    омоложения. Аппарат Infini (США) - воздействует на глубинные
                    слои кожи, но при этом совершенно не травмирует эпидермис,
                    но стимулирует и нормализует все метаболические процессы в
                    нем.
                </p>

                <FloatBlock left>
                    <PullQuote>
                        Результат после ИНФИНИ очень яркий и сопоставим с
                        фракционным лазерным омоложением, но с минимальным
                        периодом реабилитации.
                    </PullQuote>
                </FloatBlock>
                <FloatBlock right>
                    <List title="Эффекты после процедуры" marker="check">
                        <ul>
                            <li>Многоуровневая объемная подтяжка кожи</li>
                            <li>Сужение пор</li>
                            <li>Улучшение цвета обрабатываемых тканей</li>
                            <li>Улучшение рельефа тканей</li>
                            <li>Уменьшение глубины морщин</li>
                            <li>Увеличение плотности кожи</li>
                            <li>Улучшение тургора и тонуса тканей</li>
                            <li>Разглаживание рубцов</li>
                        </ul>
                    </List>
                </FloatBlock>
                <div className="clearfix" />

                <ScrollableAnchor id={'stats'}>
                    <div />
                </ScrollableAnchor>
                <ServiceStats
                    durationText={'от 60 до 120 мин.'}
                    priceText={'от 10 000 до 30 000 руб.'}
                    priceLink={'/prices/infini-lifting'}
                    quantityText={'2 - 6 (1 раз в 3-4 недели)'}
                />

                <ScrollableAnchor id={'theory'}>
                    <div />
                </ScrollableAnchor>
                <CollapsiblePanel title={'Принцип работы 3D омоложения'}>
                    <p>
                        Технология порядного ввода игл: автоматический ввод
                        микроигл осуществляется порядно, что позволяет снизить
                        болевые ощущения и кровоточивость.
                    </p>
                    <p>
                        Теория трехмерного фракционного омоложения:
                        Многоуровневое радиочастотное воздействие на разные слои
                        кожи с последовательным погружением микроигл на разную
                        глубину оказывает тройной клинический эффект(3ех рядовое
                        прохождение с разными мощностными характеристиками).
                    </p>
                    <h3>
                        ЧТО ПРЕДСТАВЛЯЕТ СОБОЙ ФРАКЦИОННОЕ RF ОМОЛОЖЕНИЕ КОЖИ
                    </h3>
                    <p>
                        Данная процедура проходит с применением микроигл.
                        Микроиглы излучают RF энергию в течение разного времени
                        и на разной глубине дермы, что вызывает подтяжку кожи за
                        счет стимуляции неоколлагенагенеза и ремоделирования
                        дермы. Стало возможным избирательное воздействие на
                        глубокие слои дермы – это основной метод для процедур
                        омоложения(подтяжки кожи),сглаживанию морщин и
                        восстановления эластичности кожи.
                    </p>
                    <p>
                        ОДНОРАЗОВАЯ ИНДИВИДУАЛЬНАЯ Насадка для аппарата
                        представляет собой 49 изолированных силиконом микроигл с
                        золотым напылением диаметром 0,2 мм. Они поэтапно
                        проникают в кожу на глубину от 0,5 до 3,5 мм( что в
                        несколько раза глубже, чем при фракционном лазерном
                        омоложении СО2). Кожа получает сигнал активировать
                        факторы роста, запустить механизмы восстановления кожи.
                        При этом эпидермис почти не повреждается: тысячи
                        крошечных проколов заживают уже через несколько минут,
                        но стимулируется процессы кератинизации и выравнивается
                        цвет и рельеф кожных покровов.
                    </p>
                </CollapsiblePanel>

                <ScrollableAnchor id={'indications'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel
                    title={'Показания к процедуре'}
                    color={'green'}
                    shadow
                >
                    <List marker={'check'}>
                        <ul>
                            <li>Хроно и фотостарение кожи</li>
                            <li>Изменение рельефа и цвета кожи</li>
                            <li>Снижение упругости, тургора, тонуса кожи</li>
                            <li>
                                Морщины: носогубные складки, мимические морщины
                                на лбу, морщины вокруг глаз, ухудшение состояния
                                кожи под глазами, увядание кожи.
                            </li>
                            <li>
                                Опущение тканей (птоз), изменяющее архитектонику
                                лица
                            </li>
                            <li>
                                Сморщенная, морщинистая, обвисшая или дряблая
                                кожа
                            </li>
                            <li>Постакне - шрамы после угрей</li>
                            <li>
                                Обвисшая кожа, излишки кожи после родов и
                                похудения, растяжки после родов и похудения
                            </li>
                            <li>Расширенные поры, повышенное саловыделение</li>
                            <li>Гипердридроз - повышенное потоотделение</li>
                        </ul>
                    </List>
                </InfoPanel>

                <ScrollableAnchor id={'contraindications'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel
                    title={'Противопоказания к процедуре Infini®'}
                    color={'red'}
                    shadow
                >
                    <List marker={'cross'} title="Строгие противопоказания">
                        <ul>
                            <li>Острые воспалительные заболевания кожи</li>
                            <li>Геморрагическая болезнь</li>
                            <li>
                                Осложнения при диабете или другие осложнения
                                тяжелых хронических заболеваний
                            </li>
                            <li>
                                Тенденция к образованию келоидов и
                                гипертрофических рубцов
                            </li>
                            <li>Наличие у пациента кардиостимулятора</li>
                            <li>
                                Наличие у пациента вживленного дефибриллятора
                            </li>
                        </ul>
                    </List>
                    <List
                        marker={'cross'}
                        titleH2="Требуется консультация врача"
                    >
                        <ul>
                            <li>Беременность</li>
                            <li>Бесконтрольная гипертония</li>
                            <li>
                                Родимые пятна в области обработки, склонные к
                                образованию злокачественных опухолей или с иными
                                патологиями (невусы).
                            </li>
                        </ul>
                    </List>
                    <List
                        marker={'cross'}
                        titleH3="Требуется письменное согласие пациента"
                    >
                        <ul>
                            <li>
                                Наличие каких-либо конструкций в зоне обработки:
                                металлических штифтов, имплантатов или
                                протезов(пациент может ощущать покалывание в
                                этих местах).
                            </li>
                            <li>
                                Аллергия на препараты предназначенные для после
                                процедурного ухода.
                            </li>
                            <li>
                                Аллергия кожи на металлы (МИКРОИГЛЫ ПОКРЫТЫ
                                ЗОЛОТОМ).
                            </li>
                        </ul>
                    </List>
                </InfoPanel>

                <ScrollableAnchor id={'preparation'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel
                    title={'Как подготовиться к процедуре лазерной эпиляции?'}
                    shadow
                >
                    <List>
                        <ol>
                            <li>Очищение обрабатываемой поверхности/области</li>
                            <li>Нанесение анестетика</li>
                            <li>Удаление анестетика через 40 мин</li>
                            <li>
                                Обработка стерильными растворами/кожными
                                антисептиками
                            </li>
                            <li>
                                Начало процедуры: врач подбирает параметры
                                индивидуально для каждого пациента (уровень
                                мощности, длительность воздействия, глубина
                                проникновения)
                            </li>
                            <li>
                                Индивидуально подбираем количество проходов: от
                                1 до 3
                            </li>
                        </ol>
                    </List>
                </InfoPanel>

                <InfoPanel
                    title="Нормальные реакции кожи на INFINI®"
                    color="green"
                    shadow
                >
                    <List marker="check">
                        <ul>
                            <li>
                                Эритема – является нормальной реакцией кожи
                                после терапии с использованием аппарата ИНФИНИ и
                                обычно проходит за 1-2 дня. Эритему можно
                                уменьшить с помощью охлаждения после процедуры.
                            </li>
                            <li>
                                Отек – может наблюдаться временный отек тканей в
                                месте лечения. Уменьшение отека происходит за
                                1-2 дня.
                            </li>
                            <li>
                                Жжение и стянутость кожи – в области лечения
                                могут ощущаться. Нанесение охлаждающих масок и
                                ранозаживляющих, увлажняющих средств сведут эти
                                неприятные ощущения на нет.
                            </li>
                            <li>
                                Тонкая корочка – у некоторых пациентов
                                наблюдаются образование еле заметных микрочешуек
                                на поверхности кожи, которые будут
                                отшелушиваться с поверхности кожи в течение
                                недели.
                            </li>
                            <li>
                                Капиллярное кровотечение – при введение микроигл
                                во внутрь кожи это возможно, но кровь достаточно
                                быстро коагулируется без дополнительных
                                вмешательств.
                            </li>
                            <li>
                                Шелушение омертвевшей кожи – при проведении
                                данной процедуры мы стимулируем процессы
                                кератинизации(отшелушивания), после чего
                                омертвевшая кожа отшелушивается в течение 3-5
                                дней при нормальном течении реабилитационного
                                периода!
                            </li>
                        </ul>
                    </List>
                </InfoPanel>

                <ScrollableAnchor id={'order'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel title={'Порядок процедуры'} shadow color={'gray'}>
                    <List>
                        <ol>
                            <li>
                                После охлаждения лица специальной маской(после
                                лазерных процедур) на кожу наносятся крем с
                                антибиотиком и возможно увлажняющий спрей(на
                                основе гиалуроновой кислоты)
                            </li>
                            <li>
                                Через сутки после процедуры возможно умывание
                                под проточной водой
                            </li>
                            <li>
                                Предоставляется памятка пациенту для после
                                процедурного ухода.
                            </li>
                        </ol>
                    </List>
                </InfoPanel>

                <ScrollableAnchor id={'memo'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel title={'Памятка по процедуре'} color={'gray'} shadow>
                    <List>
                        <ol>
                            <li>
                                Не принимайте горячий душ и не посещайте сауну в
                                течение суток после процедуры. Допускается
                                бережное умывание.
                            </li>
                            <li>
                                В течение 1 – 3 часов после процедуры может
                                ощущаться жжение. Чтобы снять неприятные
                                ощущения , применяйте контактное охлаждение
                                льдом. Убедитесь, что лед обернут сухой и
                                стерильной марлей, чтобы избежать намокания
                                кожи. Используйте охлажденные тканевые
                                маски(можно выкупить в медицинском центре), либо
                                использовать специальные силиконовые маски для
                                охлаждения кожи лица( продаются в интернете).
                            </li>
                            <li>
                                Капиллярное кровотечение в течение суток после
                                процедуры является нормальной реакцией кожи.
                                Чтобы остановить его, осторожно прижмите к месту
                                капиллярного кровотечения сухую марлевую
                                повязку.
                            </li>
                            <li>
                                В день процедуры нельзя на обработанную область
                                наносить макияж, бриться и принимать душ.
                                Применение ранозаживляющего крема с
                                антибиотиками утром и вечером поможет сократить
                                реабилитационный период и быстро избавить от
                                отека и эритемы.
                            </li>
                            <li>
                                На 2-3 день кожа может немного потемнеть из-за
                                образовавшейся на ее поверхности корочки. Это
                                нормальный процесс и беспокоится не следует.
                            </li>
                            <li>
                                Омертвевшая кожа(места входа иглы-столбик
                                коагуляции) должна отслаиваться сама собой, не
                                растирайте, не удаляйте ее с помощью скрабов и
                                эксфолиантов.
                            </li>
                            <li>
                                В течение 2 недель не используйте
                                спиртсодержащую косметику. Регулярно используйте
                                увлажняющие средства.
                            </li>
                            <li>
                                В течении 2-3 дней, а в некоторых случаях 4 дней
                                воздержитесь от интенсивных физических нагрузок,
                                чрезмерного употребления алкоголя и посещения
                                сауны(игнорируя данные рекомендации вы
                                пролонгируете процесс заживления тканей)
                            </li>
                            <li>
                                Регулярно нужно использовать крем с
                                фотозащитными свойствами – SPF не менее 50. Не
                                забывайте, когда кожа восстанавливается после
                                любой процедуры она требует к себе более
                                бережного отношения!
                            </li>
                        </ol>
                    </List>
                </InfoPanel>
            </div>
        </div>
    )
}

export default LiftingInfiniService

export const pageQuery = graphql`
    query LiftingInfiniServiceQuery {
        ...Helmet
        laserEpilationProcess: imageSharp(
            id: { regex: "/laser-epilation-process/" }
        ) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        laserEpilationServiceHeader: imageSharp(
            id: { regex: "/laser-epilation-header/" }
        ) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
