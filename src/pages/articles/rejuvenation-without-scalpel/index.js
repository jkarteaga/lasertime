import React from 'react'
import Helmet from '../../../components/HelmetWrapper'
import List from '../../../components/List'
import FloatBlock from '../../../components/FloatBlock'
import Img from 'gatsby-image'
import Heading from '../../../components/Heading'
import InlineHighlight from '../../../components/InlineHighlight'
import PullQuote from '../../../components/PullQuote'

export default function RejuvenationWithoutScalpelArticle({ data }) {
    return (
        <div className="PageContent__wrapper">
            <Helmet
                data={data}
                title="Омоложение без скальпеля!"
                description="Косметологи нашего времени стараются найти альтернативу любым операционным вмешательствам, рассмотрим одну из них."
            />
            <Heading titleH1="Омоложение без скальпеля!" type="underline" />
            <FloatBlock right paddingTop>
                <Img
                    sizes={data.RejuvenationWithoutScalpel.sizes}
                    title="Омоложение без скальпеля!"
                    alt="Омоложение без скальпеля!"
                />
            </FloatBlock>
            <p>
                Люди во все времена хотели как можно дольше оставаться молодыми
                и красивыми. Когда-то этим желанием выгодно пользовались
                придворные алхимики и колдуны, которые изобретали эликсиры
                вечной молодости и различные зелья для омоложения. Ведь каждый
                из нас хочет быть красивым, уникальным, запоминающимся,
                производить только приятное, позитивное впечатление, получать
                заслуженные комплименты и радостные улыбки.
            </p>
            <p>
                К счастью, в наши дни борьба со старением поставлена на научные
                рельсы: в XX веке активно начали развиваться такие науки как
                геронтология и косметология. Современная косметология – это
                ежедневные исследования ученых, инновации и новые технологии,
                позволяющие продлить молодость кожи как можно дольше.
            </p>
            <p>
                Косметологи нашего времени стараются найти альтернативу любым
                операционным вмешательствам, рассмотрим одну из них.
            </p>
            <p>
                <InlineHighlight>
                    Инъекционная косметология (мезотерапия)
                </InlineHighlight> – это один из наиболее эффективных способов
                подтяжки и омоложения кожи лица, шеи, декольте, рук, а также
                коррекции фигуры, при котором активные вещества доставляются в
                организм при помощи уколов. Мезотерапия стала отличной
                альтернативой пластической хирургии. Так называемые «уколы
                молодости и красоты» — это быстрый и эффективный малоинвазивный
                способ омоложения и устранения самых распространенных дефектов
                кожи. В основе технологии лежит принцип воздействия препаратов,
                при этом имеет место целенаправленное действие препарата на
                определенную зону.
            </p>
            <p>
                Препараты профессиональной марки NATINUEL (Италия) - новый класс
                косметической продукции, которые применяются в том числе и в
                инъекционной косметологии.
            </p>
            <p>
                Основатель марки – руководитель отделения эстетики итальянской
                ассоциации геронтологов (A.M.I.A.), геронтолог, биохимик Доктор
                Гвидо Каппарé применил новый подход к разработке рецептур и ввел
                новое понятие Интерактивная биоцевтика (Bioceutica
                Interattiva).  Принцип интерактивности – взаимодействия
                высокоактивных компонентов агрессивных по отношению друг к другу
                и зачастую взаимоисключающего действия, достигнут благодаря
                применению нанотехнологий – кристаллических декстринов
                Шардингера и липосом. Это позволило объединить в одном средстве
                регуляторные пептиды, решающие специфические проблемы кожи но,
                как правило, с длительным действием и отдаленным эффектом,
                органические кислоты, которые реализуют быстрый эстетический
                эффект и антиоксиданты, которые обеспечивают стойкость
                клинических результатов.
            </p>
            <p>
                Старение кожи – это структурные и биофункциональные изменения,
                затрагивающие эпидермис, базальную мембрану и дерму.
            </p>
            <p>
                Процесс старения лица характеризуется возникновением птоза,
                уменьшением объема и провисанием тканей. До недавнего времени
                лечение данной проблемы состояло в удалении части потерявших
                тонус тканей, и требовало хирургического вмешательства.
            </p>
            <p>
                С помощью нового поколения препаратов марки NATINUEL мы можем
                воздействовать на все основные ткани лица, а именно:
            </p>
            <List marker="dot">
                <ul>
                    <li>
                        улучшить кожный метаболизм, как оптимизируя анаболизм
                        кожи, так и предотвращая процессы старения
                    </li>
                    <li>
                        растянуть гипотонические ткани, увеличивая количество
                        фиброзного компонента дермы
                    </li>
                    <li>
                        повысить тонус мышц лица, улучшая их антигравитационный
                        тонус
                    </li>
                    <li>
                        уменьшить обьём жировой ткани на нижней части лица, тем
                        самым улучшить "треугольник красоты"
                    </li>
                </ul>
            </List>
            <Heading titleH2="Normalize Skin" type="line" />
            <p>
                Биостимулирующий препарат на коллаген третьего типа. Показан для
                коррекции признаков возрастных изменений пациентов
                мелкоморщинистого и смешанного типов старения. После курса
                процедур уменьшаются признаки возрастных изменений, дерма
                уплотняется, разглаживаются морщины, кожа приобретает моложавый
                вид. Препарат для истинной биоревитализации (увеличивает в дерме
                количество коллагена третьего типа – маркера молодости и
                эндогенной гиалуроновой кослоты) – является фундаментальным
                препаратом для биоревитализации дермы пациентов в любом
                возрасте.
            </p>
            <p>
                <b>Применение</b>: Препарат вводится внутрикожно техникой
                поверхностных микропапул во всех зонах лица, шеи и декольте.
                Процедура проводится раз в неделю в течении 4-х недель, после
                чего следуют 2 процедуры (процедура каждые 15 дней). Для
                поддержания эффекта необходима 1 процедура в месяц.
            </p>
            <Heading titleH2="Muscle Normalize" type="line" />
            <p>
                Предназначен для усиления мышечного тонуса с помощью усиления
                базового тонуса мышц. Функция препарата  основывается на
                укреплении мышечного тонуса лица для восстановления контуров
                овала лица и тела при помощи основного компонента
                препарата Альфа-глицерофосфохолина, биологического прекурсора
                ацетилхолина, который на мышечном уровне позволяет увеличить
                концентрацию ацетилхолина и тонус тканей. Ацетилхолин является
                производным веществом от холина (который в свою очередь
                происходит от DMAE).Таким образом, обеспечение этого
                вещества-предшественника на мышечном уровне позволяет улучшить
                концентрацию ацетилхолина и тонус тканей.
            </p>
            <p>
                <b>Применение</b>: препарат применяется на гипотоничных мышцах
                лица и тела. Процедура проводится каждые 15 дней. Курс состоит
                из 4 процедур, после чего для поддержания эффекта необходима 1
                процедура в месяц.
            </p>
            <Heading titleH2="Fat Normalize" type="line" />
            <PullQuote>
                Революционная технология биологического уменьшения жировой ткани
                для преобразования и избавления от ее избытков на лице и теле!
            </PullQuote>
            <p>
                Предназначен для уменьшения объема жировой ткани. Данный
                препарат содержит витамин С в необходимой концентрации и
                идеально подходит для стимуляции апоптоза, регулируемого
                процесса программируемой клеточной гибели. Можно применять на
                адипозной ткани как лица, так и тела. На лице уменьшение числа
                клеток позволяет уменьшить объемы нижней части лица в сочетании
                с увеличением объемов верхней части, тем самым  позволяя
                оптимизировать «треугольник красоты». На лице данная процедура
                может также  применяться  для уменьшения отложений жира на веках
                без хирургического вмешательства. На теле можем воздействовать
                на все локальные адипозные излишки, моделируя силуэт тела.
            </p>
            <p>
                <b>Применение</b>: Вводить непосредственно в жировую ткань. При
                необходимости повторить процедуру через 7 дней. Курс состоит из
                3 – 6 процедур.
            </p>

            <Heading titleH2="Skin Restructure" type="line" />
            <p>
                Биостимулирующий препарат на коллаген первого типа. Данный
                препарат является кислотным рН – 5,8  и гипертоническим
                раствором, содержащим аминокислоты и обладающим раздражающим
                действием на дерму. Раздражающие компоненты ускоряют разрешение
                воспалительных процессов дермы в коже. За этим следует
                новообразование фиброзного коллагена, который со временем
                уплотняется благодаря ретракции волокон. Данное уплотнение
                растягивает гипотонические ткани кожи. Эстетически этот процесс
                проявляется в эффекте лифтинга, улучшении тонуса. Медиаторы
                воспаления (интерлейкины) активируют рецепторы CD40, стимулируя
                образование фиброзной ткани, богатой коллагеном. В конце концов
                в кислой среде с положительно заряженными ионами значительно
                легче секретировать C (карбокси)-терминальные фрагменты
                проколлагена (с отрицательным зарядом) с последующим усиленным
                образованием коллагена 1 типа (фиброзного). Тем самым дерма
                уплотняется, что вместе с ретракцией волокон, приводит к
                растягиванию кожи.
            </p>
            <p>
                <b>Применение</b>: препарат используется систематически на
                гипотонических зонах лица и тела техникой поверхностных
                микропапул. Процедура проводится раз в неделю в течение 4-х
                недель. Перед повторным курсом сделать перерыв в 1 месяц.
            </p>
            <p>
                Профессиональная косметика Natinuel - это не только общие
                антивозрастные программы, но и эффективные средства для решения
                практически всех задач, стоящих перед врачом-косметологом. При
                этом косметика NATINUEL абсолютно безопасна!
            </p>
        </div>
    )
}

export const pageQuery = graphql`
    query RejuvenationWithoutScalpelArticleQuery {
        ...Helmet
        RejuvenationWithoutScalpel: imageSharp(
            id: { regex: "/rejuvenation-without-scalpel-beauty/" }
        ) {
            sizes(maxWidth: 960) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`