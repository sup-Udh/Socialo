import NavbarButton from "./Navbar/NavbarButton";

function Navbar(props: {home: boolean, about: boolean}) {
    const { home, about } = props;
    return (
        <div className="w-full h-16 flex p-4 space-x-10 justify-center align-top shadow-lg">
            <NavbarButton active={home} text="Home" href="/"/>
            <NavbarButton active={about} text="About" href="/about"/>
        </div>
    );
}

export default Navbar;