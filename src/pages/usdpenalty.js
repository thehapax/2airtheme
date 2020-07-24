// list of Violations by Country
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import graphql2chartjs from 'graphql2chartjs';
//import {Pie} from 'react-chartjs-2';

const CountryViolations = () => {
  const data = useStaticQuery(graphql`
  {
    allAirtable(filter: {data: {Currency_of_Penalty: {eq: "USD"}}}) {
      nodes {
        data {
          Penalty_amount_in_native_currency
          Business_Name
        }
      }
    }
  }  
  `)


  const g2c = new graphql2chartjs(data.allAirtable, 'pie');
  g2c.reform((datasetName, dataPoint) => {
    return {
      backgroundColor: 'rgba(74, 181, 235, 1)' // light blue fill
    }
  });
  const elems = g2c.data['datasets'][0];
  elems['backgroundColor'] = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)'
  ]
  elems['borderWidth'] = 0
  g2c.data["datasets"] = [elems]

  return <pre>{JSON.stringify(data, null, 4)}</pre>


  //return <pre>{JSON.stringify(g2c.data, null, 4)}</pre>
  /*
  return (
    <>
    <h1>Violations by Country</h1>
    <Pie data={g2c.data}  options={{
      responsive: true,
      maintainAspectRatio: true,
      legend: {
          display: true,
          fullWidth: true,
          position: 'bottom',
        }
    }} />
    </>
  )
 */

}

export default CountryViolations


