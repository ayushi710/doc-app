import React, { useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
const HomePage = () => {
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //getUserData();
  }, []);
  return (
    <Layout>
      <h1>Home Page</h1>
      <img className="photo" style={{"height":'60vh'}}
      src="https://static.vecteezy.com/system/resources/previews/036/372/442/non_2x/hospital-building-with-ambulance-emergency-car-on-cityscape-background-cartoon-illustration-vector.jpg"
      alt="hospital"/>
    </Layout>
  );
};

export default HomePage;
