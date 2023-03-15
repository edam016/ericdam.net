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
    {
        label: 'Leetcode Adventures',
        key: 'leetcode',
        icon: <SettingOutlined />,
      },
  ];
  
const Navbar = () => {

    const [current, setCurrent] = useState('mail');
    const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  }

  return (
    <div>Nav is here</div>
  )
}

export default Navbar;