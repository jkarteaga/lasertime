import React from 'react'
import Helmet from '../../../components/HelmetWrapper'
import InfoPanel from '../../../components/InfoPanel/index'
import List from '../../../components/List/index'
import InfoBlock from '../../../components/InfoBlock/index'
import CollapsiblePanel from '../../../components/CollapsiblePanel/index'
import TOC from '../../../components/TOC'
import Img from 'gatsby-image'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import FloatBlock from '../../../components/FloatBlock/index'
import ServiceStats from '../../../components/ServiceStats'
import ArticleHeaderImage from '../../../components/ArticleHeaderImage'

function LaserRejuvenationService({ data }) {
    configureAnchors({ offset: -70, scrollDuration: 500 })

    return (
        <div>
            <Helmet data={data} title="Лазерное DOT омоложение" description="" />
            <ArticleHeaderImage title="Лазерное омоложение" imgSizes={data.laserRejuvenationServiceHeader.sizes} />

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
                        <a href="#preparation">Как подготовиться к процедуре?</a>
                        <a href="#memo">Памятка по процедуре</a>
                        <a href="#photo">Результат до/после</a>
                    </TOC>
                </FloatBlock>

                <ScrollableAnchor id={'intro'}>
                    <div />
                </ScrollableAnchor>
                <p>DOT-технология или фракционный фототермолиз – это лазерная процедура, которая возвращает коже молодость, свежесть и здоровье, устраняет пигментацию, выравнивает текстуру и цвет кожи, делает кожу более плотной и упругой.</p>
                <p>Это новейшая методика фракционного лазерного омоложения кожи, позволяющая сократить время восстановления кожи после процедуры ПО СРАВНЕНИЮ С ДРУГИМИ агрессивными ЛАЗЕРНЫМИ МЕТОДИКАМИ. Компания DEKA разработала фракционный лазер SmartXide DOT 10600 нм. Эта лазерная системы признана «Золотым стандартом» для устранения эстетических проблем, вызванных процессами старения кожи.</p>
                <p>Процесс регенерации тканей после аблативного фракционного фототермолиза проходит намного быстрее, чем после традиционных шлифовок лазером. ЧЕРЕЗ НЕСКОЛЬКО ДНЕЙ после процедуры пациент сможет вернуться к обычному образу жизни. Обработанная кожа полностью восстановится через 2–14 дней. Эффекты от ДОТ-терапии (омоложение и повышение упругости кожи) проявляются уже после первой процедуры.</p>
                <p>Фракционный аблативный фототермолиз - это методика контролируемого, щадящего и безопасного воздействия на кожу, позволяющая устранить различные косметические дефекты с помощью СО2 лазера.</p>

                <ScrollableAnchor id={'stats'}>
                    <div />
                </ScrollableAnchor>
                <ServiceStats durationText={'от 60 до 120 мин.'} priceText={'от 10 000 до 30 000 руб.'} priceLink={'/prices/infini-lifting'} quantityText={'1 - 4 (1 раз в полтора месяца)'} />

                <ScrollableAnchor id={'theory'}>
                    <div />
                </ScrollableAnchor>
                <CollapsiblePanel title={'Принцип работы'}>
                    <p>Энергия СО2 лазера создает узкие контролируемые колонки теплового повреждения МТЗ (микротермальные зоны), которые проникают в дерму, коагулируя ткани, и запускают процессы синтеза новых структур дермы: неоколлагеногенез (образование нового коллагена, что улучшает эластичность кожи), неоангиогенез (образование новых сосудов, что улучшает питание кожи), синтез гликозаминогликанов (выработка гиалуроновой кислоты, что улучшает тургор). Ткань между микротермальными зонами не затрагивается, в результате чего процесс регенерации клеток и восстановления кожного покрова проходит намного быстрее.</p>

                    <p>ТЕХНОЛОГИЯ ПОЗВОЛЯЕТ Регулировать плотность энергии, контролировать длительность импульса, не терять мощность при проникновении лазерного луча в биологические ткани. Сканер позволяет регулировать расстояние между микротермальными зонами и плотность нанесения степени поражения ткани, тем самым воздействуя на качество процедуры и период реабилитации. Режимы сканирования DOT позволяют менять площадь обработки, обрабатывать кожу равномерно не оставляя пропусков.</p>
                    <Img sizes={data.laserRejuvenationProcess.sizes} title="" alt="" />
                </CollapsiblePanel>

                <ScrollableAnchor id={'indications'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel title={'Показания к процедуре'} color={'green'} shadow>
                    <List marker={'check'}>
                        <InfoBlock color="green">
                            <p>ФРАКЦИОННОЕ ЛАЗЕРНОЕ ОМОЛОЖЕНИЕ избавит вас от рубцов, сосудистых звёздочек, сузит поры, избавит кожу лица от пигментации, разгладит дряблую кожу, сделает её более эластичной и упругой, так как под воздействием лазера в клетках кожи синтезируется эластин и коллаген и гликозаминогликаны, разгладит морщины, не оставит и следа от «гусиных лапок», улучшит цвет лица, сделает контур лица более чётким.</p>
                        </InfoBlock>

                        <ul>
                            <li>Хронологическое (время) и фотостарение (влияние солнечных лучей) кожи</li>
                            <li>Изменение цвета и рельефа кожи</li>
                            <li>Снижение тургора, тонуса кожи</li>
                            <li>Морщины: носогубные складки, мимические морщины на лбу, сетчатые морщины вокруг глаз, ухудшение состояния кожи под глазами (излишки кожи), увядание кожи.</li>
                            <li>Опущение тканей (птоз), изменяющее архитектонику лица</li>
                            <li>Сморщенная, морщинистая, обвисшая и дряблая кожа</li>
                            <li>Постакне, рубцы, стрии, растяжки</li>
                            <li>Обвисшая кожа, излишки кожи после родов и похудения, растяжки после родов и похудения</li>
                            <li>Расширенные поры, повышенное саловыделение</li>
                        </ul>
                    </List>
                </InfoPanel>

                <ScrollableAnchor id={'advantages'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel title="Преимущества DOT технологии" color="green" shadow>
                    <List marker="plus">
                        DOT технология «золотой стандарт» для решения проблем с пигментацией, атоничной кожей, морщинами, шрамами, рубцами от акне, растяжек и стрий
                        <ul>
                            <li>минимальное повреждение поверхности кожи</li>
                            <li>минимальное время проведения процедуры</li>
                            <li>требует апликационную анестезию (нанесения анастезирующего крема)</li>
                            <li>не предполагает использование расходных материалов (кроме лампы)</li>
                            <li>фракционное омоложение можно проводить на всех фототипах кожи</li>
                            <li>оказывает контролируемое, щадящее и безопасное воздействие на кожу</li>
                            <li>
                                Лазерный фототермолиз является <b>эффективной</b> процедурой <b>при минимальном повреждении</b>
                            </li>
                            <li>процедура дает стойкий и длительный результат омоложения</li>
                            <li>
                                фракционный CO<sub>2</sub> лазер не нарушает защитные функции кожи
                            </li>
                            <li>короткий период реабилитации до 7 дней</li>
                        </ul>
                    </List>
                </InfoPanel>

                <ScrollableAnchor id={'contraindications'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel title={'Противопоказания к процедуре'} color={'red'} shadow>
                    <List marker={'cross'} title="Строгие противопоказания">
                        <ul>
                            <li>Острые воспалительные заболевания кожи</li>
                            <li>Геморрагическая болезнь и другие болезни крови</li>
                            <li>Осложнения при диабете или другие осложнения тяжелых хронических заболеваний</li>
                            <li>Тенденция к образованию келоидов и гипертрофических рубцов</li>
                            <li>Наличие у пациента кардиостимулятора (уточнить у лечащего врача)</li>
                            <li>Иммунодефицитные состояния</li>
                            <li>Наличие у пациента вживленного дефибриллятора (уточнить у лечащего врача)</li>
                            <li>Онкология</li>
                        </ul>
                    </List>
                    <List marker={'cross'} titleH2="Требуется консультация врача">
                        <ul>
                            <li>Беременность, лактация</li>
                            <li>Бесконтрольная гипертония, стенокардия покоя</li>
                            <li>Родимые пятна в области обработки, склонные к образованию злокачественных опухолей или с иными патологиями(невусы).</li>
                            <li>Прием гормональной терапии</li>
                            <li> аутоиммунные заболевания</li>
                        </ul>
                    </List>
                    <List marker={'cross'} titleH3="Требуется письменное согласие пациента">
                        <ul>
                            <li>Наличие каких-либо конструкций в зоне обработки: металлических штифтов, имплантатов или протезов(пациент может ощущать покалывание в этих местах).</li>
                            <li>Аллергия на препараты предназначенные для после процедурного ухода.</li>
                            <li>Эпилепсия</li>
                        </ul>
                    </List>
                </InfoPanel>

                <InfoPanel title="Побочные эффекты" color="green" shadow>
                    <List marker="check">
                        Нормальные реакции кожи на DOT омоложение
                        <ul>
                            <li>Эритема – является нормальной реакцией кожи после терапии с использованием аппарата DOT и обычно проходит за 6 дней. Эритему можно уменьшить с помощью использования регенеративных мазей, кремов и гелей после процедуры.</li>
                            <li>Отек – может наблюдаться временный отек тканей в местах лечения. Уменьшение отека происходит за 2-4 дня.</li>
                            <li>Жжение и стянутость кожи – в области лечения могут ощущаться до 6 дней. Нанесение охлаждающих масок и ранозаживляющих, увлажняющих средств сведут эти неприятные ощущения на нет.</li>
                            <li>Тонкая корочка – у пациентов наблюдается образование заметных коричневых микрочешуек на поверхности кожи, которые будут отшелушиваться с поверхности кожи в течение недели.</li>
                            <li>Капиллярное кровотечение - возможно в течении первых суток, но кровь достаточно быстро коагулируется без дополнительных вмешательств.</li>
                            <li>Шелушение – при проведении данной процедуры мы стимулируем процессы кератинизации (отшелушивания), после чего омертвевшая кожа отшелушивается в течение 3 - 5 дней при нормальном течении реабилитационного периода!</li>
                            <li>Гиперпигментация - возникает при неправильном постпроцедурном уходе и нарушении правил рекомендации (выход на солнце без нанесения солнцезащитного крема SPF от 50.)</li>
                            <li>Рубцевание - возможно при неправильном постпроцедурном уходе или использования скрабов</li>
                            <li>Воспаление - возникает при нарушении правил постпроцедурного ухода или правил личной гигиены</li>
                        </ul>
                    </List>
                </InfoPanel>

                <ScrollableAnchor id={'order'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel title={'Порядок процедуры'} shadow>
                    <List>
                        <ol>
                            <li>Очищение обрабатываемой поверхности</li>
                            <li>Нанесение анестетика</li>
                            <li>Удаление анестетика через 40 мин</li>
                            <li>Обработка стерильными растворами (кожными антисептиками)</li>
                            <li>Начало процедуры: врач подбирает параметры индивидуально для каждого пациента(уровень мощности, расстояние между точками, длительность воздействия, глубину проникновения)</li>
                            <li>Проводение процедуры фракционного лазерного омоложения</li>
                            <li>Обработка кожи мазью/спреем с антибиотиком для профилактики воспалительных процессов</li>
                        </ol>
                    </List>
                </InfoPanel>

                <InfoPanel title={'Как подготовиться к процедуре'} shadow color={'gray'}>
                    <List>
                        <ol>
                            <li>В течение двух недель до процедуры, нежелательно введение филлеров, ботокса и нитей в обрабатываемых зонах</li>
                            <li>За неделю до процедуры нежелательно принимать НПВС, аспирина, кардио-магнила, антикоагулянтов и антиагрегантов, иначе возможно образование гематом</li>
                            <li>В день процедуры не наносить косметические средства в области обрабатываемых зон</li>
                            <li>Мужчинам необходимо бритье за 1 день до процедуры.</li>
                            <li>В течение двух недель до процедуры исключить любой загар.</li>
                            <li>Запрещено выполнение процедуры при наличии заболеваний (ОРЗ, ОРВИ и герпеса)</li>
                            <li>При носительстве вируса герпеса рекомендован профилактический приём противогерпетических препаратов</li>
                        </ol>
                    </List>
                </InfoPanel>

                <ScrollableAnchor id={'memo'}>
                    <div />
                </ScrollableAnchor>
                <InfoPanel title={'Памятка по послепроцедурному уходу за кожей'} color={'gray'} shadow>
                    <List>
                        <ol>
                            <li>Не принимайте горячий душ и не посещайте сауну в течение 5-6 суток после процедуры. Допускается бережное умывание на вторые сутки.</li>
                            <li>В течение 24 часов после процедуры может ощущаться жжение. Чтобы снять неприятные ощущения, применяйте контактное охлаждение льдом. Убедитесь, что лед обернут сухой и стерильной марлей, чтобы избежать намокания кожи. Используйте охлажденные тканевые маски (можно приобрести в медицинском центре), либо использовать специальные силиконовые маски для охлаждения кожи лица (продаются в интернете и ортеках).</li>
                            <li>Капиллярное кровотечение в течение суток после процедуры является нормальной реакцией кожи. Чтобы остановить его, осторожно прижмите к месту капиллярного кровотечения сухую стерильную марлевую повязку.</li>
                            <li>В течении 5 дней после процедуры нельзя на обработанную область наносить макияж, бриться и принимать душ. Применение ранозаживляющего крема с антибиотиками (Оксикорт спрей) утром и вечером (возможно применение гормонсодержащих кремов для снятия неспецифического воспаления) поможет сократить реабилитационный период и быстро избавить от отека и эритемы.</li>
                            <li>На 2-3 день кожа может немного потемнеть из-за образовавшейся на ее поверхности корочки и осветлится в течении 4-5 дней. Это нормальный процесс и беспокоится не следует.</li>
                            <li>Омертвевшая кожа (столбик коагуляции) должна отслаиваться сама собой. Не растирайте и не удаляйте ее с помощью скрабов и эксфолиантов.</li>
                            <li>В течение 2 недель не используйте спиртсодержащую косметику. Регулярно используйте увлажняющие средства (Д-пантенол, Бепантен+).</li>
                            <li>В течении 5-7 дней, а в некоторых случаях 10 дней воздержитесь от интенсивных физических нагрузок, чрезмерного употребления алкоголя и посещения сауны (игнорируя данные рекомендации вы пролонгируете (удлиняете) процесс заживления тканей)</li>
                            <li>Регулярно нужно использовать крем с фотозащитными свойствами – SPF не менее 50. Не забывайте, когда кожа восстанавливается после любой процедуры она требует к себе более бережного отношения!</li>
                            <li>Для того, чтобы убрать розоватый оттенок лица, следует провести процедуру фотоомоложения на аппарате Quantum.</li>
                        </ol>
                    </List>
                    Спустя 2 недели просле процедуры рекомендуется пройти процеду фотоомоложения на аппарате Quantum для того, чтобы полностью
                    <InfoBlock color="orange">
                        <p>После окончания курса проводятся контрольные проверки: через неделю и месяц. Такой подход позволяет предотвратить возникновение осложнений и проследить за правильным восстановлением кожи. Продолжительность эффекта зависит от индивидуальных особенностей организма.</p>
                    </InfoBlock>
                </InfoPanel>
            </div>
        </div>
    )
}

export default LaserRejuvenationService

export const pageQuery = graphql`
    query LaserRejuvenationServiceQuery {
        ...Helmet
        laserEpilationServiceHeader: imageSharp(id: { regex: "/laser-epilation-header/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        laserRejuvenationServiceHeader: imageSharp(id: { regex: "/laser-rejuvenation-service-header/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
        laserRejuvenationProcess: imageSharp(id: { regex: "/laser-rejuvenation-process/" }) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
