'use client'
import React from 'react';
import { FooterContainer, Block, MenuFooter, SociaL, ChildBlok, Logo, DownBlock, UpBlock, Policy, BorderFooter} from './styled';
import { usePathname } from 'next/navigation';
import { AStyled, FooterLink, LinkNoStyles, NavBarLink } from '../links/link';
import Image from 'next/image';
import { getCookie } from 'cookies-next';
import BeDevScreen from '../popup-screens/BeDevScreen';
import {useState} from 'react'
const Footer = () => {
    const [active, setActive] = useState(false)
    return (
        <FooterContainer>
             {active && <BeDevScreen setActive={setActive}/>}
            <BorderFooter/>
            <UpBlock>
                <Logo>
                    <Image src={'/logo-medium.svg'} alt='logo_footer' width={110} height={110}/>
                </Logo>
                <MenuFooter>
                    <Block>
                        <LinkNoStyles href={'/'}>
                        <FooterLink color='#ffffff'>Главная</FooterLink>
                        </LinkNoStyles>
                        <LinkNoStyles href={`/profile/${getCookie('userId')}`}>
                        <FooterLink color='#ffffff'>Профиль</FooterLink>
                        </LinkNoStyles>
                    </Block>
                    <Block>
                        <LinkNoStyles href={'/favorites'}>
                        <FooterLink color='#ffffff'>Избранное</FooterLink>
                        </LinkNoStyles>
                        <AStyled href="https://t.me/gurevnind" target="_blank" rel="noopener noreferrer">
                        <FooterLink color='#ffffff'>Поддержка</FooterLink>
                        </AStyled>
                    </Block>
                    <Block>
                        <FooterLink onClick={() => {
                            setActive(true)

                        }} color='#ffffff'>Стать разработчиком</FooterLink>
                        <AStyled href="https://t.me/gurevnind" target="_blank" rel="noopener noreferrer">
                        <FooterLink color='#ffffff'>Отдел разработки</FooterLink>
                        </AStyled>

                    </Block>
                </MenuFooter>
                <SociaL>
                    <ChildBlok>
                        <Image style={{cursor: 'not-allowed', opacity: '0.5'}} src={'/telegram-icon.svg'} alt='tg_logo' width={32} height={32}/>
                    </ChildBlok>
                    <ChildBlok>
                        <Image style={{cursor: 'not-allowed', opacity: '0.5'}} src={'/vk-icon.svg'} alt='vk_logo' width={32} height={32}/>
                    </ChildBlok>
                    <ChildBlok>
                    <Image style={{cursor: 'not-allowed', opacity: '0.5'}}  src={'/twitter-icon.svg'} alt='twitter_logo' width={32} height={32}/>
                    </ChildBlok>
                </SociaL>

            </UpBlock>
            <DownBlock>
                <Policy  className='inactive'>
                    Политика конфиденциальности
                </Policy>
                <Policy className='inactive'>
                    Политика обработки персональных данных
                </Policy>
            </DownBlock>
        </FooterContainer>
    );
};

export default Footer;