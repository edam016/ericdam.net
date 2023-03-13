import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './Navbar.css';

const items: MenuProps['items'] = [
    {
      label: 'About Me',
      key: 'about',
      icon: <MailOutlined />,
    },
    {
      label: 'Work Experience',
      key: 'work',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Projects',
      key: 'projectu',
      icon: <SettingOutlined />,
    },
    {
      icon: <SettingOutlined />,
      label: (
        <a href="https://github/edam016" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      ),
      key: 'github',
    },
  ];
  
const Navbar = () => {

    const [current, setCurrent] = useState('mail');
    const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  }

  return (
    <div><Menu style={{ margin: 2, width: '100%' }} className='navbar' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /></div>
  )
}

export default Navbar;