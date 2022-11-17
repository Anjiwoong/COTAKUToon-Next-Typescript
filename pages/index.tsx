import { useSession } from 'next-auth/react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HomeContainer from '../components/home/HomeContainer';

const HomePage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <Header />
      <HomeContainer />
      <Footer />
    </>
  );
};

export default HomePage;
