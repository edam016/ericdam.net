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
      label: (
        <a href="https://github/edam016" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      ),
      key: 'github',
    },
    {
        label: 'LC',
        key: 'leetcode',
        icon: <SettingOutlined />,
      },
  ];
  
const Navbar = () => {

    const [current, setCurrent] = useState('none');

    return (
        <div>
        {navItems.map((item, i) => (
          <div>
            <NavItem item={item.label}/>
            <div key={i}>
              {item.label}
            </div>
            </div>
        ))}
        </div>
    )
}

export default Navbar;