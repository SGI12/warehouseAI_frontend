

interface IFilterProps {
    isOpen:boolean
}

const FilterIcon = ({isOpen}: IFilterProps) => {
    
    return(
        <svg style={{marginRight: '12px'}} xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
            <path d="M7.31501 11.904V20.736L11.685 18.528V11.904L18.24 3.07201H0.76001L7.31501 11.904Z" fill={isOpen ? '#ffffff' : '#E64C8F' }/>
        </svg>
    )
}

export default FilterIcon