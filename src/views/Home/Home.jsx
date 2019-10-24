import React, {Component, useState, useEffect} from 'react';
import {Badge, Button, Card, CardBody, CardColumns, CardHeader, Col, Progress, Row, Table} from "reactstrap";
import db from '../../models/db.js'
import {Link} from 'react-router-dom';
import {database} from "../../models/db";
import test from './test'
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import {Bar, Line} from "react-chartjs-2";
import {CustomTooltips} from "@coreui/coreui-plugin-chartjs-custom-tooltips";


const bar = {
  labels: ['Петро Порошенко', 'Володимир Зеленський', 'Олег Ляшко', 'Геннадій Кернес', 'Геннадій Москаль', 'Михайло Добкін', 'Юлія Тимошенко'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      height: 500,
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

const Home = (props) => {
  const [articlesNumber, setArticlesNumber] = useState(0);
  const [categoriesNumber, setCategoriesNumber] = useState(0);
  const [articlesList, setArticlesList] = useState([]);
  const [randomArticle, setRandomArticle] = useState(null);

  useEffect(() => {
    database.ref('/').once('value').then(function (snapshot) {
      const {articles, categories} = snapshot.val();
      const {titles, count} = articles;
      const titlesList = Object.keys(titles);
      const randomTitle = titlesList[Math.floor(Math.random() * titlesList.length)];

      db.collection("articles")
        .doc(randomTitle)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            const {text, categories} = doc.data();

            setRandomArticle({title: randomTitle, text, categories})
          } else {
            console.log("No such document!");
          }
        });
      setCategoriesNumber(Object.keys(categories).length);
      setArticlesList(Object.keys(titles))
    });
  }, []);

  return (
    <div className="animated fadeIn">
      <Row style={{marginTop: 20}}>
        <Col xs="12" sm="6" lg="6">
          <Card className="text-white bg-info">
            <CardBody>
              <div className="text-value">{articlesList.length}</div>
              <div>Статей</div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" lg="6">
          <Card className="text-white bg-primary">
            <CardBody>
              <div className="text-value">{categoriesNumber}</div>
              <div>Категорій</div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {randomArticle &&
      <Row>
        <Col>
          <Card>
            <CardHeader>
              Випадкова стаття
            </CardHeader>
            <CardBody>
              <h2>{randomArticle.title}</h2>
              {randomArticle.categories && randomArticle.categories.length &&
              <>
                <div>
                  <b>Категорії:</b> {randomArticle.categories.map(cat => <span style={{paddingRight: 5}}>#{cat}</span>)}
                </div>
                <div dangerouslySetInnerHTML={{__html: randomArticle.text}}/>
              </>
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
      }
      <Row>
        <Col>
          <Card>
            <CardHeader>
              Список статей:
            </CardHeader>
            <CardBody style={{columnCount: 3}}>
              {articlesList.map(article => <div><Link to={`/article/${article}`}>{article}</Link></div>)}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" lg="6">
          <Card style={{height: 500}}>
            <CardHeader>
              ТОП меметичних персон
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">Приклад графіків</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Bar data={bar} options={options} height={400}/>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" lg="6">
          <HighchartsReact
            highcharts={Highcharts}
            options={{
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
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
