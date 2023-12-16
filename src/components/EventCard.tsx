import '../css/events.css'
import { useTranslation } from 'react-i18next'
import {Card, Image, Badge} from 'antd'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'


interface BookCardProps {
    budge: string,
    title: string[],
    date: string,
    url: string,
    image: string
}

const EventCard: React.FC<BookCardProps> = ({ budge, title, date, image, url }) => {

    const [t] = useTranslation("global")


    return (
        <div>
            <Badge.Ribbon text={budge}>

                <Card
                    hoverable
                    className='bookcard-main'
                    cover={<Image className='bookcard-image' src={image} width={200} height={200} style={{objectFit: 'cover'}}/>}
                    bodyStyle={{ height: 200, fontSize: '0.7rem', padding: '5px', lineHeight: 1.3}}
                    >
                    <div style={{ height: '100%'}}>
                        { title.map((item, key) => 
                            <h2 className='event-title' key={key}>{item}</h2>
                        )}
                        <h3 className='event-subtitle'>{date}</h3>
                        <Link to={url} className='event-button'>
                            {t('detail-button')}
                            <FaAngleRight />
                        </Link>            
                     </div>

                </Card>

            </Badge.Ribbon>
        </div>

    )
}

export {EventCard}