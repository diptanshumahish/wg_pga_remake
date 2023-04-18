interface Props{
    title:string;
}

export default function FormHeading({title}:Props){
    return(
        <span >{title}</span>
    )
}