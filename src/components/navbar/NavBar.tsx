'use client'
import React, { useState } from 'react';
import { NavBarContainer } from './styled';
import { LinkNoStyles, NavBarLink } from '../links/link';
import { usePathname } from 'next/navigation';

import { getCookie } from 'cookies-next';


const NavBar = ({showPopUp}:any) => {
    
    const pathname = usePathname();
    const userid = getCookie('userId')
  
    return (
        <>
       
        <NavBarContainer>
        
            <LinkNoStyles href={'/'}>
                <NavBarLink className={`${pathname === '/' || pathname?.startsWith('/ai')  ? 'active-bar' : ''}`} color='#ffffff'>Главная</NavBarLink>
            </LinkNoStyles>
            <LinkNoStyles href={`/profile/${userid}`}>
            <NavBarLink color='#ffffff' className={`${pathname?.startsWith('/profile')  ? 'active-bar' : ''}`}>Профиль</NavBarLink>
            </LinkNoStyles>
            <NavBarLink color='#ffffff'>Избранное</NavBarLink>
            {/* <LinkNoStyles href={props.loggedIn ? '/ai_create' : '/auth'}>
                <NavBarLink className={`${pathname === '/ai_create' ? 'active-bar' : ''}`} color='#ffffff'>Добавить свою нейросеть</NavBarLink>
            </LinkNoStyles> */}
             <LinkNoStyles href={`/profile/${userid}`}>
            <NavBarLink className={`${showPopUp ? 'active-bar' : ''} `} color='#ffffff'>Стать разработчиком</NavBarLink>
            </LinkNoStyles>
        </NavBarContainer>
        </>
    );
};

export default NavBar;