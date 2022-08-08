import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";

import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/Cryptoapi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  // console.log(data);
  const globalStat = data?.data?.stats;
  if (isFetching) return "Loading...";
  return (
    <>
      <Title level={2} className="heading ">
        Global Crypto stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStat.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStat.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market cap"
            value={millify(globalStat.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h volume"
            value={millify(globalStat.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStat.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies of the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Cypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
