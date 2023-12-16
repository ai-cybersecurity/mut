import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/weekDays.css'
import { useTranslation } from 'react-i18next';

//react-icons
import { MdEventAvailable } from "react-icons/md";

const Wednesday = () => {

    const [t] = useTranslation('global')

  return (
    <div className='day-main'>
        <h1 className='day-title'>Wednesday</h1>
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="14:30"
            icon={<MdEventAvailable />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Brain Ring</h3>
            <p>{t('wednesday.description1')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="14:30"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Play Station</h3>
            <p>{t('wednesday.description2')}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(76, 175, 80)' }}
            date="14:30"
            iconStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Treasure Quest</h3>
            <p>{t('wednesday.description3')}</p>
        </VerticalTimelineElement>
    </VerticalTimeline>
    </div>

  );
};

export default Wednesday;