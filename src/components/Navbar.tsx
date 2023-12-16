import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Ant Design
import { Dropdown, Button, Space, } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

// css
import '../css/navbar.css'

// assets 
import rus from '../assets/rus.png'
import eng from '../assets/eng.png'
import oguzLogo from '../assets/white-logo.png'



const Navbar: React.FC = () => {

    const navigate =useNavigate()

    const [t, i18n] = useTranslation("global")

    // functions
    const switchLaguageHandler = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    // language menu items
    const items: MenuProps['items'] = [
        { label: 'English',
          key: '1',
          icon: <img src={eng} />,
          onClick: () => switchLaguageHandler('eng')
        },
        {
          label: 'Русский',
          key: '2',
          icon: <img src={rus} />,
          onClick: () => switchLaguageHandler('rus')
        }
      ];
    
      const menuProps = {
        items
      };

    return (
        <nav className="navbar">

            <img className="navbar--initials" onClick={() => navigate('/')} src={oguzLogo} width={70}></img>

            <div className="navbar--wrapper">

                <Dropdown className="languages--button" menu={menuProps}>
                    <Button>
                        <Space>
                        { t('navbar.languages') }
                        <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </div>

        </nav>
    )
}

export default Navbar