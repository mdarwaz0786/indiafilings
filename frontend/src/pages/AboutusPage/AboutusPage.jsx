import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/common/Layout/Layout.jsx";
const base_url = import.meta.env.VITE_API_URL;

const AboutPage = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}/api/v1/test`);
      setData(response?.data);
    } catch (error) {
      console.log(error.message);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <h4 style={{ textAlign: "center", margin: "2rem" }}>About Us Content</h4>
      <p style={{ textAlign: "center", margin: "2rem" }}>{data.message}</p>
    </Layout>
  );
};

export default AboutPage;
