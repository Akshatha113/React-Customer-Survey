import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout = (props) => {
  return (
    <div className="app-container">
      <Header/>
      <main className="content">{props.children}</main>
      <div className="app-footer">
        <Footer/>
      </div>
    </div>
  );
};


export default Layout;
