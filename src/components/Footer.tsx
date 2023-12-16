import React from "react";
import { useTranslation } from "react-i18next";
import '../css/footer.css'


const Footer: React.FC = () => {

    const [t] = useTranslation("global")

    return (
        <div className="footer">
            <p>{t('footer')}</p>
        </div>
    )
}


export default Footer