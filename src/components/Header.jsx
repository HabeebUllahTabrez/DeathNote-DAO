import classes from "./Header.module.css";

function Header(props) {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>📓 DeathNote DAO</div>
            <nav>
                <ul>
                    <li>{props.user}</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
