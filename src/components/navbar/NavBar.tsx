'use client'
import React from 'react';
import { NavBarContainer } from './styled';
import { LinkNoStyles, NavBarLink } from '../links/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();
    return (
        <NavBarContainer>
            <LinkNoStyles href={'/'}>
                <NavBarLink className={`${pathname === '/' ? 'active-bar' : ''}`} color='#ffffff'>Главная</NavBarLink>
            </LinkNoStyles>
            <NavBarLink color='#ffffff'>Профиль</NavBarLink>
            <NavBarLink color='#ffffff'>Избранное</NavBarLink>
            <LinkNoStyles href={'/ai_create'}>
                <NavBarLink className={`${pathname === '/ai_create' ? 'active-bar' : ''}`} color='#ffffff'>Добавить свою нейросеть</NavBarLink>
            </LinkNoStyles>
            <NavBarLink color='#ffffff'>Мои нейросети</NavBarLink>
        </NavBarContainer>
    );
};

export default NavBar;