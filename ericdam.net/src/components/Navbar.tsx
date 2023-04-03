import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './Navbar.css';
import NavItem from './NavItem.tsx';

const navItems = [
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
      label: 'Github',
      key: 'github',
    },
    {
        label: 'LC',
        key: 'leetcode',
        icon: <SettingOutlined />,
      },
      {
        label: 'Youtube',
        key: 'youtube',
        icon: <SettingOutlined />,
      },
  ];
  
const Navbar = () => {

    const [current, setCurrent] = useState('none');

    return (
        <div className='navbar'>
        {navItems.map((item, i) => (
          <div className="item">
            <NavItem  item={item.label}/>
            </div>
        ))}
        </div>
    )
}

export default Navbar;