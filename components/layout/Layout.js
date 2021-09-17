import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  return (
    <div>
      <Header/>
      <MainNavigation />
      {/* props.children enable us to wrap other components */}
      <main className={classes.main}>{props.children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
