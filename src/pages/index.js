import * as React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { firstRow } from "../data/features";

function FirstRow({ title, status, description, linkUrl }) {
  return (
    <div className="col-md-4 p-8">
      <Link to={useBaseUrl(linkUrl)} activeClassName="active">
        <div className="show-card">
          <div className="status">{status}</div>
          <div className="title">{title}</div>
          <div className="descriptions">{description}</div>
        </div>
      </Link>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout>
      <div className="bootstrap-wrapper">
        <br />
        <div className="container">
          <div className="row">
          <div className="index-page exclude">
          <section className="section container-fluid">
              <div className="col-lg-8">
                <h1 className="mt-0"><a href="https://polygon.technology" class="landing-page-link">Polygon</a> Wiki</h1>
                <p className="lead">The <b>Polygon Wiki</b> is the source of truth for <a href="https://polygon.technology" class="landing-page-link">0xPolygon</a>, providing comprehensive documentation, community resources, and guides for enthusiasts and developers interested in learning about or building on Polygon.</p>
              </div>
          </section>
          </div>
            <section id="common-docs" className="section container-fluid"></section>
            {firstRow &&
              firstRow.length &&
              firstRow.map((props, idx) => (
                <FirstRow key={idx} {...props} />
              ))}{" "}
          </div>
          <br />
        </div>
      </div>
      </Layout>
  );
}

export default Home;
