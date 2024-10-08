

interface IFavoriteProps {
    isActive:boolean
}

const FavoriteIcon = ({isActive}: IFavoriteProps) => {
    
    return(
        <svg style={{cursor: 'pointer', paddingLeft: '10px'}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E64C8F" fill={isActive ? '#E64C8F' : 'none'} strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
        </svg>
    )
}

export default FavoriteIcon