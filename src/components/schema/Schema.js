import Header from './Header';
import Footer from './Footer';

const Schema = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Schema;