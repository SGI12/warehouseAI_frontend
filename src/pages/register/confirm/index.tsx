
import { RegisterConfirmMainContainer } from '@/components/containers/containers';
import { H1Styled, H3Styled } from '@/components/headers-text/HeaderText';
import { LogoResetPass, LogoResetPassContainer } from '@/components/logo/logo';
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import React from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { registerConfirm } from '@/http/AuthAPI';
import { InputErrorText } from '@/components/paragraphs/Paragraphs';



const RegisterConfirm = () => {
    const confirmParams = useSearchParams()
    const user = confirmParams?.get('user')
    const token = confirmParams?.get('token')
    const [timer, setTimer] = useState(5);
    const ref = useRef<any>(null);
    const router = useRouter()
    const clear = () => {
        window.clearInterval(ref.current)
    }
    useEffect(() => {
        registerConfirm(user, token).then((res) => {
            console.log(res.data)
            ref.current = window.setInterval(() => {
                setTimer((time) => time - 1)
            }, 1000)
            return () => clear();
        })
        .catch((e) => {
            if (e.response?.status === 404) {
                router.push('/authpage')
            }
            console.log(e.response?.status)
        })
        
    }, [])

    useEffect(() => {
        if (timer === 0) {
            clear()
            router.push('/authpage')
        }

    }, [timer])
    return (
        <RegisterConfirmMainContainer>
            <LogoResetPassContainer>
                <LogoResetPass>
                    <Image src={'/logo_big.svg'} width={120} height={120} alt="logo" />
                </LogoResetPass>

            </LogoResetPassContainer>
            <H1Styled color='#ffffff'>E-mail успешно подтвержден!</H1Styled>
            <H3Styled color='#ffffff'>Вы будете перенаправлены на страницу авторизации через {timer}...</H3Styled>
    
        </RegisterConfirmMainContainer>
    );
};

export default RegisterConfirm;