'use client'
import React from 'react';
import { FooterContainer, Block, MenuFooter, SociaL, ChildBlok, Logo, DownBlock, UpBlock, Policy, BorderFooter} from './styled';
import { usePathname } from 'next/navigation';
import { FooterLink, NavBarLink } from '../links/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <FooterContainer>
            <BorderFooter/>
            <UpBlock>
                <Logo>
                    <Image src={'/logo-medium.svg'} alt='logo_footer' width={110} height={110}/>
                </Logo>
                <MenuFooter>
                    <Block>
                        <FooterLink color='#ffffff'>Главная</FooterLink>
                        <FooterLink color='#ffffff'>Профиль</FooterLink>
                    </Block>
                    <Block>
                        <FooterLink color='#ffffff'>Избранное</FooterLink>
                        <FooterLink color='#ffffff'>Поддержка</FooterLink>
                    </Block>
                    <Block>
                        <FooterLink color='#ffffff'>Стать разработчиком</FooterLink>
                        <FooterLink color='#ffffff'>Отдел разработки</FooterLink>

                    </Block>
                </MenuFooter>
                <SociaL>
                    <ChildBlok>
                        <Image src={'/telegram-icon.svg'} alt='tg_logo' width={32} height={32}/>
                    </ChildBlok>
                    <ChildBlok>
                        <Image src={'/vk-icon.svg'} alt='vk_logo' width={32} height={32}/>
                    </ChildBlok>
                    <ChildBlok>
                    <Image src={'/twitter-icon.svg'} alt='twitter_logo' width={32} height={32}/>
                    </ChildBlok>
                </SociaL>

            </UpBlock>
            <DownBlock>
                <Policy>
                    Политика конфиденциальности
                </Policy>
                <Policy>
                    Политика обработки персональных данных
                </Policy>
            </DownBlock>
        </FooterContainer>
    );
};

export default Footer;