import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from './home'

const inter = Inter({ subsets: ['latin'] })

const IndexPage: React.FC = () => {
  return <Home />;
};

export default IndexPage;