'use client'
import React, { useState } from 'react';
import { NavBarContainer } from './styled';
import { LinkNoStyles, NavBarLink } from '../links/link';
import { usePathname } from 'next/navigation';

import { getCookie } from 'cookies-next';
import BeDevScreen from '../be-dev-screen/BeDevScreen';


const NavBar = ({activeModal}:any) => {
   
    const pathname = usePathname();
    const userid = getCookie('userId')
    const [active, setActive] = useState(false)
    return (
        <>
        
        <NavBarContainer>
            {active && <BeDevScreen setActive={setActive}/>}
            <LinkNoStyles href={'/'}>
                <NavBarLink className={`${pathname === '/' || pathname?.startsWith('/ai') || pathname?.startsWith('/use-ai') ? 'active-bar' : ''}`} color='#ffffff'>Главная</NavBarLink>
            </LinkNoStyles>
            <LinkNoStyles href={`/profile/${userid}`}>
            <NavBarLink color='#ffffff' className={`${pathname?.startsWith('/profile')  ? 'active-bar' : ''}`}>Профиль</NavBarLink>
            </LinkNoStyles>
            <NavBarLink color='#ffffff'>Избранное</NavBarLink>
            {/* <LinkNoStyles href={props.loggedIn ? '/ai_create' : '/auth'}>
                <NavBarLink className={`${pathname === '/ai_create' ? 'active-bar' : ''}`} color='#ffffff'>Добавить свою нейросеть</NavBarLink>
            </LinkNoStyles> */}
             
            <NavBarLink onClick={() => setActive(true)} className={`${(active || activeModal.activeModal) ? 'active-bar' : ''} `} color='#ffffff'>Стать разработчиком</NavBarLink>
            
        </NavBarContainer>
        </>
    );
};

export default NavBar;