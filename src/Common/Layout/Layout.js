import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout = (props) => {
  return (
    <div className="app-container">
      <Header />
      <main>{props.children}</main>
      <Footer className="app-footer"></Footer>
    </div>
  );
};


export default Layout;
