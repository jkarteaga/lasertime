import React from 'react'
import Helmet from '../../components/HelmetWrapper'
import Heading from '../../components/Heading'

export default function MesotherapyArticle({ data }) {
    return (
        <div className="PageContent__wrapper">
            <Helmet
                data={data}
                title="Мезотерапия: молодость и свежесть"
                description=""
            />
            <Heading titleH1="Мезотерапия: молодость и свежесть" type="underline" />
            <p>
                Мезотерапия – известная и популярная в современной косметологии
                процедура коррекции дефектов кожи лица. Медицинская методика
                позволяет работать не только с проблемами кожи лица, но и
                проводить коррекцию различных косметических дефектов по всему
                телу. Суть методики заключается в микроинъекционном введении
                специальных «мезококтейлей» в поверхностные и более глубокие
                кожные слои. Такие коктейли могут включать в свой состав следы
                гиалуроновой кислоты, витамины, минералы, коллаген и другие
                вещества растительной, животной или синтетической природы.
                Подбор тех или иных препаратов производится врачом-косметологом
                в зависимости от индивидуального состояния кожи пациента.
            </p>

            <p>
                Процедура мезотерапии показана при неглубоких морщинах, потере
                тургора кожи, угревой сыпи, тусклом цвете лица, аллопеции,
                куперозе, жировых излишках в области подбородка, выраженной
                пигментации. Хорошего эффекта можно достигнуть, применяя
                мезотерапию при восстановлении после пластических операций и для
                разглаживания атрофических или гипертрофических рубцов.
            </p>

            <p>
                Перед проведением процедуры врач-косметолог обязательно должен
                сделать пробу на аллергию по всем компонентам применяемого
                коктейля. Существуют два способа введения препарата – вручную
                или с применением специального мезоинжектора. Мезоинжекторный
                способ более дорогостоящий, но быстрый и чуть менее болезненный.
                При ручном выполнении процедуры есть одно неоспоримое
                преимущество. Врач сам может регулировать интенсивность обколов
                тех или иных участков кожи лица, а также глубину введения иглы и
                количество впрыскиваемого препарата. Такой способ также
                обеспечивает экономию препарата. Сама процедура мезотерапии не
                длительна: от 10 до 40 минут в зависимости от глубины и
                сложности косметических дефектов. При желании пациента зону
                проведение процедуры можно обезболить.
            </p>

            <p>
                Противопоказаниям к проведению мезотерапии является беременность
                и кормление, индивидуальная непереносимость компонентов
                коктейля, плохая свертываемость крови, онкология, сахарный
                диабет, ИБС, почечная недостаточность.
            </p>

            <p>
                Мезотерапия, как и любая другая косметическая процедура, может
                давать побочные эффекты: покраснение кожи, гематомы в местах
                уколов, аллергические реакции на отдельные составляющие
                «мезококтейля».
            </p>

            <p>
                В целом процедура хорошо переносится и оказывает великолепный
                эстетический эффект за счет стимуляции образования коллагена в
                тканях кожи.
            </p>
        </div>
    )
}

export const pageQuery = graphql`
    query MesotherapyArticleQuery {
        ...Helmet
    }
`
