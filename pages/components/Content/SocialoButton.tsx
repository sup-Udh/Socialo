import Button from '@mui/material/Button';
import Link from 'next/link'

function SocialoButton(props: {purple: boolean, text: string, href: string}) {
    const { purple, text, href } = props;

    if(purple){
        return (
            <div>
                <Link passHref href={"/main"}>
                    <Button className='bg-socialo-light text-white hover:bg-socialo-light hover:text-white rounded-full px-4 py-5 w-40 h-9' variant='contained'>
                        <p className='normal-case font-bold text-xl'>{text}</p>
                    </Button>
                </Link>
            </div>
        );
    }else{
        return (
            <div>
                <Link passHref href={"/main"}>
                    <Button className='bg-white text-socialo hover:bg-white hover:text-socialo rounded-full px-4 py-5 w-40 h-9' variant='contained'>
                        <p className='normal-case font-bold text-xl'>{text}</p>
                    </Button>
                </Link>
            </div>
        );
    }
}

export default SocialoButton;