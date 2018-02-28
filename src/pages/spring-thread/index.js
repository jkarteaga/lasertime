import React from 'react'
import Helmet from '../../components/HelmetWrapper'
import Heading from '../../components/Heading'

export default function SpringThreadArticle({ data }) {
    return (
        <div className="PageContent__wrapper">
            <Helmet data={data} title="Нити Spring Thread" description="" />
            <Heading titleH1="Нити Spring Thread" type="underline" />
            <p>
                Благодаря уникальным лифтинг нитям Spring Thread для подтяжки
                лица, вы сможете омолодить свою кожу без всякого хирургического
                вмешательства. Процедура занимает около получаса, а результат
                будет виден практически сразу. Не подвергая свое здоровье риску,
                можно избавиться от возрастных морщин и подкорректировать форму
                лица. Лифтинг нити – это идеальная замена пластической операции,
                которая требует вложения немалых финансовых средств. Нитями
                можно исправить не только кожу лица, но и другие части тела.
            </p>

            <h3>Какие проблемы устраняет нитевой лифтинг:</h3>

            <ul>
                <li>Асимметрию лица, груди и ягодиц.</li>

                <li>Птоз верхнего века и других частей тела.</li>

                <li>
                    Возрастные морщины в области губ, носа и в уголках глаз.
                </li>

                <li>Неровности кожи в зоне груди и шеи.</li>

                <li>Исправляет овал лица.</li>
            </ul>

            <p>
                Нитевой лифтинг лица рекомендован людям в возрасте от 35 лет для
                того, чтоб предотвратить быстрое старение кожи. Нити играют роль
                своеобразного каркаса, удерживающего форму лица в необходимом
                состоянии. По всей длине нитей размещаются зубья, которые
                крепятся к мягким тканям. Они обеспечивают эластичность кожи и
                предотвращают увядание. Примечательно, что лифтинг нити идеально
                сочетаются с аппаратной косметологией, что позволяет достичь еще
                более качественного результата.
            </p>

            <p>
                Данный тип омоложения является безоперационным, для его
                проведения отпадает даже необходимость применять общую
                анестезию. Что еще немаловажно – нитевая подтяжка при помощи
                Spring Thread не оставляет после себя никаких шрамов или рубцов,
                как это происходит при пластических операциях. Уже через неделю
                реабилитационный период будет окончен, и вы сможете вести
                привычный образ жизни. Пациенту даже не придется оставаться в
                больнице после процедуры подтяжки. У нас каждый желающий получит
                молодое лицо, без искажения своих природных черт.
            </p>
        </div>
    )
}

export const pageQuery = graphql`
    query SpringThreadArticleQuery {
        ...Helmet
    }
`
