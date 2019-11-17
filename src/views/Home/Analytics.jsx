import React, {useEffect, useState, useMemo} from 'react'
import {Card, CardBody, CardHeader, Col} from "reactstrap";
import {Bar, Pie} from "react-chartjs-2";
import {CustomTooltips} from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import {Redirect} from "react-router-dom";

const initialBar = {
  labels: [],
  datasets: [
    {
      label: 'Kількість публікацій',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      height: 500,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        min: 0
      }
    }]
  },
  maintainAspectRatio: false
};

const initialPie = {
  labels: [],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};

export default ({categoriesList, persons, events}) => {
  const periods = useMemo(() =>
      Object.entries(categoriesList).filter(([, {count, type}]) => count && type === "Періоди"),
    [categoriesList]);
  const [personsChartData, setPersonsChartData] = useState(initialBar);
  const [pieOptions, setPieOptions] = useState(initialPie);
  const [redirectTo, setRedirectTo] = useState('');

  useEffect(() => {
    if (!persons || !persons.length)
      return;
    const personsData = persons
      .map(([key, value]) => ({name: key, ...value}))
      .sort((a, b) => (a.count > b.count) ? -1 : 1)
      .slice(0, 10);
    setPersonsChartData({
      labels: personsData.map(({name}) => name),
      datasets: [{...initialBar.datasets[0], data: personsData.map(({count}) => count)}]
    })
  }, [persons]);

  useEffect(() => {
    const a = {
      labels: periods.map(([key]) => key),
      datasets: [{...initialPie.datasets[0], data: periods.map(([, value]) => value.count)}]
    };

    setPieOptions(a)
  }, [periods]);

  const onElementsClick = React.useCallback((elems) => {
    const [clickedElement] = elems;
    const {label} = clickedElement._model;

    setRedirectTo(label)
  }, []);

  return (
    <Col>
      {redirectTo && <Redirect to={`/categories/${redirectTo}`}/>}
      <Card style={{height: 600}}>
        <CardHeader>
          ТОП меметичних персон
          <div className="card-header-actions">
            <small className="text-muted">Хто найчастіше фігурує в українських мемах</small>
          </div>
        </CardHeader>
        <CardBody>
          <div className="chart-wrapper">
            <Bar data={personsChartData} options={options} onElementsClick={onElementsClick} height={500}/>
          </div>
        </CardBody>
      </Card>
      <Col xs="12">
        <Card>
          <CardHeader>
            Періодизація мемів
            <div className="card-header-actions">
              <a href="http://www.chartjs.org" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="chart-wrapper">
              <Pie data={pieOptions} onElementsClick={onElementsClick}/>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Col>
  )
}
