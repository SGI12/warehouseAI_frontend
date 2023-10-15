'use client'
import React from 'react';
import { NavBarContainer } from './styled';
import { TextDefaultStyled } from '../paragraphs/P';
import { LinkNoStyles, NavBarLink } from '../links/Link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();
    console.log(pathname === '/');
    return (
        <NavBarContainer>
            <LinkNoStyles href={'/'}>
                <NavBarLink className={`${pathname === '/' ? 'active-bar' : ''}`} color='#ffffff'>Главная</NavBarLink>
            </LinkNoStyles>
            <NavBarLink color='#ffffff'>Профиль</NavBarLink>
            <NavBarLink color='#ffffff'>Избранное</NavBarLink>
            <NavBarLink color='#ffffff'>Добавить свою нейросеть</NavBarLink>
            <NavBarLink color='#ffffff'>Мои нейросети</NavBarLink>
        </NavBarContainer>
    );
};

export default NavBar;