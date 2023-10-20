'use client'
import React from 'react';
import { FooterContainer, Block, MenuFooter, SociaL, ChildBlok, Logo, DownBlock, UpBlock, Policy} from './styled';
import { usePathname } from 'next/navigation';
import { NavBarLink } from '../links/link';
import Image from 'next/image';

const Footer = () => {
    const pathname = usePathname();
    return (
        <FooterContainer>
            <UpBlock>
                <Logo>
                    <Image src={'/logo-medium.svg'} alt='logo_footer' width={110} height={110}/>
                </Logo>
                <MenuFooter>
                    <Block>
                        <NavBarLink color='#ffffff'>Главная</NavBarLink>
                        <NavBarLink color='#ffffff'>Профиль</NavBarLink>
                    </Block>
                    <Block>
                        <NavBarLink color='#ffffff'>Избранное</NavBarLink>
                        <NavBarLink color='#ffffff'>Поддержка</NavBarLink>
                    </Block>
                    <Block>
                        <NavBarLink color='#ffffff'>Стать разработчиком</NavBarLink>
                        <NavBarLink color='#ffffff'>Отдел разработки</NavBarLink>

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