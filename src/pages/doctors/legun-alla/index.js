import React from 'react'
import Timeline, { TimelineItem } from '../../../components/Timeline'
import Helmet from '../../../components/HelmetWrapper'
import DoctorInfoPanel from '../../../components/DoctorInfoPanel'
import certificates from './legun-alla-certificates.pdf'

function LegunAllaDoctor({ data }) {
    return (
        <div>
            <Helmet
                data={data}
                title="Легун Алла Александровна"
                description="Легун Алла Александровна - главный врач в клинике &quot;Знак Качества&quot;"
            />
            <DoctorInfoPanel
                name="Легун Алла Александровна"
                position="главный врач"
                description="Сертифицированный специалист по работе с лазерами и фотосистемами, всеми инъекционными препаратами (БТА, гиалуроновыми кислотами, полимолочной кислотой). Имеет государственные сертификаты по дерматовенерологии, врачебной косметологии, лазерной медицине, современным инъекционным и нитевым методикам. Училась и стажировалась за рубежом."
                imageSizes={data.legunAllaGraybg.sizes}
            />
            <Timeline title="Обучение" certLink={certificates}>
                <TimelineItem
                    date="1995 - 2001"
                    name="РГМУ, факультет &quot;Лечебное Дело&quot;"
                    description="Диплом с отличием, доп. образование &quot;Врач-реабилитолог&quot;, доп. специализация &quot;Лечебный массаж&quot;"
                />
                <TimelineItem
                    date="1999 - 2001"
                    name="Институт пластической хирургии и косметологии МЗ РФ"
                    description="специализация &quot;Врачебная косметология&quot; (с отличием, 500 ак. часов)"
                />
                <TimelineItem
                    date="2001 - 2002"
                    name="ДРК и Московский государственный институт сервиса"
                    description="специализация &quot;Косметолог&quot; (с отличием)"
                />
                <TimelineItem
                    date="2001 - 2003"
                    name="ФУВ МОНИКИ им. Владимирского"
                    description="специализация &quot;Дерматовенерология&quot; (с отличием, продлен до 2018 г.)"
                />
                <TimelineItem
                    date="2004"
                    name="РМАПО"
                    description="удостоверение о повышении квалификации &quot;Опухоли и другие пролиферативные заболевания кожи&quot;"
                />
                <TimelineItem
                    date="2004"
                    name="ФУВ РУДН"
                    description="удостоверение о повышении квалификации &quot;Трихология: диагностика и лечение волос и кожи колосистой части головы&quot;"
                />
                <TimelineItem
                    date="2005"
                    name="НО &quot;Ассоциация российских озонотерапевтов&quot;"
                    description="удостоверение о повышении квалификации &quot;Основы озонотерапии&quot;"
                />
                <TimelineItem
                    date="2005"
                    name="АНО Учебно-методический центр &quot;Валлекс-М&quot;"
                    description="удостоверение о повышении квалификации &quot;Современные инъекционные методики в эстетической медицине&quot;"
                />
                <TimelineItem
                    date="2006"
                    name="ФУВ РУДН"
                    description="удостоверение о повышении квалификации &quot;Органопрепараты в клинической практике&quot;"
                />
                <TimelineItem
                    date="2007"
                    name="ГОУВПО СПБГМА им. Мечникова"
                    description="удостоверение о повышении квалификации &quot;Гомеопатическая мезотерапия в дерматокосметологии&quot;"
                />
                <TimelineItem
                    date="2008"
                    name="ФУВ МОНИКИ им. Владимирского"
                    description="удостоверение о повышении квалификации &quot;Актуальные вопросы дерматовенерологии&quot;"
                />
                <TimelineItem
                    date="2011"
                    name="ГНЦ лазерной медицины"
                    description="специализированные курсы по лазерной медицине (144 ак. часа)"
                />
                <TimelineItem
                    date="2011"
                    name="ФУВ РУДН"
                    description="специализация &quot;Врач-косметолог&quot; (с отличием, 572 ак. часа, продлен до 2021 г.)"
                />
                <TimelineItem
                    date="2016 - 2018"
                    name="Институт Preventage"
                    description="специализация &quot;Врач функциональной и антивозрастной медицины&quot;"
                />
            </Timeline>
        </div>
    )
}

export default LegunAllaDoctor

export const pageQuery = graphql`
    query LegunAllaDoctorQuery {
        ...Helmet
        legunAllaGraybg: imageSharp(id: { regex: "/legun-alla-graybg/" }) {
            sizes(maxWidth: 960, quality: 80) {
                ...GatsbyImageSharpSizes_noBase64
            }
        }
    }
`
