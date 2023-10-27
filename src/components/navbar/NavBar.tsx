'use client'
import React from 'react';
import { NavBarContainer } from './styled';
import { LinkNoStyles, NavBarLink } from '../links/link';
import { usePathname } from 'next/navigation';
import axios from 'axios';

const NavBar = () => {
    
    const pathname = usePathname();
    
    return (
        <NavBarContainer>
            <LinkNoStyles href={'/'}>
                <NavBarLink className={`${pathname === '/' || pathname?.startsWith('/ai')  ? 'active-bar' : ''}`} color='#ffffff'>Главная</NavBarLink>
            </LinkNoStyles>
            <NavBarLink color='#ffffff'>Профиль</NavBarLink>
            <NavBarLink color='#ffffff'>Избранное</NavBarLink>
            {/* <LinkNoStyles href={props.loggedIn ? '/ai_create' : '/auth'}>
                <NavBarLink className={`${pathname === '/ai_create' ? 'active-bar' : ''}`} color='#ffffff'>Добавить свою нейросеть</NavBarLink>
            </LinkNoStyles> */}
            <NavBarLink color='#ffffff'>Стать разработчиком</NavBarLink>
        </NavBarContainer>
    );
};

export default NavBar;