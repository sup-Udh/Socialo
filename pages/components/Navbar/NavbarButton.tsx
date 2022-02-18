import Link from 'next/link'

function NavbarButton(props: {active: boolean, text: string, href: string}) {
    const { active, text, href } = props;
    if(active){
        return (<Link passHref href={href}><h1 className="font-bold text-3xl">{text}</h1></Link>)
    }else{
        return (<Link passHref href={href}><h1 className="font-normal text-3xl">{text}</h1></Link>)
    }
}

export default NavbarButton;
