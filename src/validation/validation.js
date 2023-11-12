import { useEffect, useState } from "react"

export const useValidation = (value, validations) => {
    const [isUserNameEmpty, setUserNameEmpty] = useState(true)
    const [isFirstnameEmpty, setFirstnameEmpty] = useState(true)
    const [isLastnameEmpty, setLastnameEmpty] = useState(true)
    const [isEmailInvalid, setEmailInvalid] = useState(true)
    const [animation, setAnimation] = useState('none')
    const [isPasswordInvalid, setPasswordInvalid] = useState(true)
    const [errors, setErrors] = useState({
        usernameError: '',
        firstnameError: '',
        lastnameError: '',
        emailInvalidError: '',
        emailEmptyError: '',
        passwordInvalidError: '',

    })
    useEffect(() => {
        for (const validation in validations) {
            switch(validation) {
                case 'isUserNameEmpty': 
                    value ? setUserNameEmpty(false) : setUserNameEmpty(true);
                    setErrors ({...errors, usernameError: 'Придумайте уникальное имя пользователя'})
                    setAnimation('animated')
                    setTimeout(() => setAnimation('none'), 500)
                    break;
                case 'isFirstnameEmpty':
                    value ? setFirstnameEmpty(false) : setFirstnameEmpty(true);
                    setErrors ({...errors, firstnameError: 'Введите имя'})
                    setAnimation('animated')
                    setTimeout(() => setAnimation('none'), 500)
                    break;
                case 'isLastnameEmpty':
                    value ? setLastnameEmpty(false) : setLastnameEmpty(true);
                    setErrors ({...errors, lastnameError: 'Введите фамилию'})
                    setAnimation('animated')
                    setTimeout(() => setAnimation('none'), 500)
                    break;
                
                case 'isEmailInvalid':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/i;
                    if (re.test(String(value).toLowerCase() )) {
                        setEmailInvalid(false)
                    } 
                    else  {
                         
                        setEmailInvalid(true)
                        if (String(value).length > 0) {
                            setErrors ({...errors, emailInvalidError: 'Некорректный адрес электронной почты'})
                        }
                        else {
                            setErrors ({...errors, emailInvalidError: 'Введите адрес эл.почты'})
                        }
                        setAnimation('animated')
                        setTimeout(() => setAnimation('none'), 500)
                        
                    }
                    break;
            
                case 'isPasswordInvalid':
                    if (String(value).length < 8) {
                        setPasswordInvalid(true)
                        setErrors ({...errors, passwordInvalidError: 'Создайте пароль, в котором будет не менее 8 символов'})
                        setAnimation('animated')
                        setTimeout(() => setAnimation('none'), 500)
                    }
                    else {
                        setPasswordInvalid(false)
                    }
                    break;

                

            }
        }
    }, [value])
    return {
        isUserNameEmpty,
        isFirstnameEmpty,
        isLastnameEmpty,
        isEmailInvalid,
        isPasswordInvalid,
        errors,
        animation
    }
}

export const usePassRepeatCheck = (password, repeat) => {
    
    const [animation, setAnimation] = useState('none')
    const [isChecked, setChecked] = useState(false)
    useEffect(() => {
        password === repeat ? setChecked(true) : setChecked(false);
       
        
        setAnimation('animated')
        setTimeout(() => setAnimation('none'), 500) 
    }, [password, repeat])
    
    return {isChecked, animation}

}
