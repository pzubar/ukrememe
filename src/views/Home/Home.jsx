import React, {Component, useState, useEffect, useMemo} from 'react';
import {Card, CardBody, CardColumns, CardHeader, Col, Row} from "reactstrap";
import db from '../../models/db.js'
import {Link} from 'react-router-dom';
import {database} from "../../models/db";
import test from './test'
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import {Bar} from "react-chartjs-2";
import {CustomTooltips} from "@coreui/coreui-plugin-chartjs-custom-tooltips";

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

const Home = () => {
  const [categoriesNumber, setCategoriesNumber] = useState(0);
  const [articlesList, setArticlesList] = useState([]);
  const [categoriesList, setCategories] = useState([]);
  const articlesNumber = useMemo(() => articlesList.length, [articlesList]);
  const persons = useMemo(() =>
      Object.entries(categoriesList).filter(([, {count, type}]) => count && type === "Персони"),
    [categoriesList]);
  const events = useMemo(() =>
      Object.entries(categoriesList).filter(([, {count, type}]) => count && type === "Події"),
    [categoriesList]);
  const periodsOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Періодизація мемів'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Десяті',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Нульові',
        y: 11.84
      }, {
        name: "Девя'ності",
        y: 10.85
      }]
    }]
  };
  useEffect(() => {

    // database.ref('/').once('value').then(function(snapshot) {
    //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   // ...
    // });

    const {articles, categories} = test;
    // debugger;
    setArticlesList(Object.keys(articles.titles));
    setCategoriesNumber(Object.keys(categories).length)
    setCategories(categories)
    // const categories = {};
    // const result = [];
    // const articles = {};
    // db.collection("categories").get().then(querySnapshot => {
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.id, " => ", doc.data());
    //     result.push({title: doc.id, data: doc.data()})
    //     categories[doc.id] = {};
    //     categories[doc.id].type = doc.data().type
    //     //doc.data();
    //
    //   });
    // });
    // db.collection("articles").get().then(function(querySnapshot) {
    //   const result = [];
    //   debugger;
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.id, " => ", doc.data());
    //     result.push({title: doc.id, data: doc.data()});
    //     // if (doc.data().categories)categories
    //     articles[doc.id] = doc.data();
    //   });
    //   debugger;
    //   // let a = result.result
    //   let titles = {};
    //   result.forEach(({title}) => titles[title] = true);
    //   // const titles = result.map(({title}) => title);
    //   debugger;
    //   setArticlesList(result);
    // });
    // debugger;
  }, []);

  return (
    <div className="animated fadeIn">
      <Row style={{marginTop: 20}}>
        <Col xs="12">
          <p><b>Зараз на сайті:</b></p>
        </Col>
        <Col xs="12" sm="3" lg="3">
          <Card className="text-white bg-info">
            <CardBody>
              <div className="text-value">{articlesNumber}</div>
              <div>Статей про меми</div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="3" lg="3">
          <Card className="text-white bg-primary">
            <CardBody>
              <div className="text-value">{categoriesNumber}</div>
              <div>Категорій статей</div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="3" lg="3">
          <Card className="text-white bg-warning">
            <CardBody>
              <div className="text-value">{persons.length}</div>
              <div>Меметичних персон</div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="3" lg="3">
          <Card className="text-white bg-danger">
            <CardBody>
              <div className="text-value">{events.length}</div>
              <div>Мемних подій</div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <div>
          {/*{articlesList.map(article => <div><Link to={`/article/${article}`}>{article}</Link></div>)}*/}
        </div>
      </Row>
      <Row>
        <Col xs="12" sm="6" lg="6">
          <Card>
            <CardHeader>
              Bar Chart
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Bar data={bar} options={options}/>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" lg="6">

          <HighchartsReact
            highcharts={Highcharts}
            options={periodsOptions}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
