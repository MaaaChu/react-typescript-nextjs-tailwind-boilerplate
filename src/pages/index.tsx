import React from "react";
import Layout from "components/Layout";

interface HomeProps {
  example: string;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout title='Home'>
      <div>
        <h1 className='text-5xl font-extrabold'>Body goes here</h1>
        {/* and here */}
      </div>
    </Layout>
  );
};

export default Home;
