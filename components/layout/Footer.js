import classes from './Footer.module.css'
// import Link from 'next/link'

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerHeader}>Boat'n'Breakfast</div>
        <ul className={classes.list}>
          <li> Footer 1</li>
          <li> Footer 2</li>
          <li> </li>
        </ul>
    </footer>
  );
}

export default Footer;
