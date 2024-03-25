"use client";
import React, { FC } from 'react';
import { Bar, Chart, Pie,  } from 'react-chartjs-2';
import { useEffect,useState } from 'react';
// import  { forwardRef, useRef,  } from 'react';
import { Chart as ChartJS, Tooltip, Legend, Title,  BarController, Colors, BarElement, LinearScale, DoughnutController,ArcElement, LineController,  PieController, CategoryScale} from 'chart.js';
import { FunnelController, TrapezoidElement } from 'chartjs-chart-funnel';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Cards from './Cards';
// import Homepage from '../Homepage';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Table, TableHead, TableBody, TableRow, TableCell, Button, SelectChangeEvent, AppBar, Toolbar } from '@mui/material';
ChartJS.register(
    BarController, 
    BarElement,
    DoughnutController, 
    ArcElement,
    LineController, 
    PieController,
    CategoryScale,
    LinearScale,
    LineController, 
    Tooltip,
    Legend,
    Title,
    FunnelController, 
    TrapezoidElement,
    ChartDataLabels,
    Colors,
)
interface Data {
  label: string;
  value: number;
}
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Mobilization: FC = () => {
    const [value, onChange] = useState<Value>(new Date());
    const data = {
        labels:["First wave","Screening","Pre-Screening"],
        datasets:[
            {
                display:true,
                label:"Total No.of Students",
                data:[0.5,0.4,0.3],
            
            }
        ]
    }
    const options = {
        responsive:false,
        maintainAspectRatio:true,
        indexAxis: "y" as const,
        plugins: {
          title: {
            display: true,
            color: '#3C3633',
          text: 'Total No.of Students',
          font:{
            size:12
          }
        },
        
            datalabels: {
              color: 'black',
              font:{
                size:10,
              }
            }
          }
    }
 const sourceData= [
    {
      "label": "Induction Target",
      "value": 32
    },
    {
      "label": "Total Inducted",
      "value": 45
    },
    {
      "label": "To Mobilize",
      "value": 23
    },
    {
        "label":"Total Mobilized",
        "value":12
    }
  ]
  
const statusData=[
  { "label": "Source 1", 
     "value": 30 },
  { "label": "Source 2", 
    "value": 20 },
  { "label": "Source 3",
    "value": 15 },
  { "label": "Source 4",
    "value": 10 },
  { "label": "Source 5",
    "value": 8 },
  { "label": "Source 6", 
    "value": 17 }
]

  return (
    <>
      <div>
      <AppBar position="static" sx={{ bgcolor: '#3485ae', boxShadow: 'none'}}>
          <Toolbar>
          <Button component={Link} to="/mobilization"><b style={{color:"black",textTransform: "capitalize"}}>Mobilization</b></Button>
          
          <Button component={Link} to="/assessment"><p style={{color:"white",textTransform: "capitalize"}}>Assessment</p></Button>
          <Button component={Link} to="/studentgrade"><p style={{color:"white",textTransform: "capitalize"}}>Student Grade</p></Button>
          <Button component={Link} to="/placements"><p style={{color:"white",textTransform: "capitalize"}}>Placements</p></Button>
          </Toolbar>
        </AppBar>
        </div>
        {/* <b style={{textAlign:"center"}}>Mobilization</b> */}
      <Cards></Cards>
      <div className="dataCard categoryCard">
          <Pie
            data={{
              labels: statusData.map((data: Data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: statusData.map((data: Data) => data.value),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                    'rgba(24, 214, 126, 0.98)',
                    'rgba(150, 0, 0, 0.87)',
                  ],
                  borderColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                    'rgba(24, 214, 126, 0.98)',
                    'rgba(150, 0, 0, 0.87)',
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Mobilization Sources',
                  font:{
                    size: 18,
                  },
                },
              },
            }}
          />
        </div>

     
        <div className="dataCard customerCard">
          <Bar
            data={{
              labels: sourceData.map((data: Data) => data.label),
              datasets: [
                {
                  label: 'Number',
                  data: sourceData.map((data: Data) => data.value),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(151, 40, 145, 0.8)',
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Target vs Achieved Status',
                  font:{
                    size: 18,
                  },
                },
              },
            }}
          />
        </div>



        <div className=' funnelCard'>
            <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
            <Chart
                 type="funnel" 
                 options={options} 
                 data={data} 
                style={{width:400, height:250}}>
                 
                 </Chart>
            </div>
           </div> 
    </>
  );
};

export default Mobilization;