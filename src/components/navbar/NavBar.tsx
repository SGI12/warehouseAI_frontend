'use client'
import React, { useState } from 'react';
import { NavBarContainer } from './styled';
import { LinkNoStyles, NavBarLink } from '../links/link';
import { usePathname } from 'next/navigation';

import { getCookie } from 'cookies-next';
import BeDevScreen from '../popup-screens/BeDevScreen';
import { useUserContext } from '@/context/context';


const NavBar = ({activeModal}:any) => {
    const {user} = useUserContext()
    const isAuth = user.isAuth
    console.log(isAuth)
    const pathname = usePathname();
    const userid = getCookie('userId')
    const [active, setActive] = useState(false)
    return (
        <>
        
        <NavBarContainer>
            {active && <BeDevScreen setActive={setActive}/>}
            <LinkNoStyles href={'/'}>
                <NavBarLink className={`${pathname === '/' || pathname?.startsWith('/ai') || pathname?.startsWith('/search') || pathname?.startsWith('/use-ai') ? 'active-bar' : ''}`} color='#ffffff'>Главная</NavBarLink>
            </LinkNoStyles>
            <LinkNoStyles href={isAuth ? `profile/${userid}` : `/authpage`}>
            <NavBarLink color='#ffffff' className={`${pathname?.startsWith('/profile')  ? 'active-bar' : ''}`}>Профиль</NavBarLink>
            </LinkNoStyles>
            <LinkNoStyles href={isAuth ? '/favorites' : '/authpage'}>
            <NavBarLink color='#ffffff' className={`${pathname === '/favorites' ? 'active-bar' :''}`}>Избранное</NavBarLink>
            </LinkNoStyles>
            
             
            <NavBarLink onClick={() => setActive(true)} className={`${(active || activeModal.activeModal) ? 'active-bar' : ''} `} color='#ffffff'>Подключить нейронку</NavBarLink>
            
        </NavBarContainer>
        </>
    );
};

export default NavBar;