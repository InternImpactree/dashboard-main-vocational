import { AppBar, Button, Toolbar } from "@mui/material";
// import React from "react";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import { Chart, Pie } from "react-chartjs-2";
import { FunnelController, TrapezoidElement } from 'chartjs-chart-funnel';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Tooltip, Legend, Title,  BarController, Colors, BarElement, LinearScale, DoughnutController,ArcElement, LineController,  PieController, CategoryScale} from 'chart.js';

import Cards from './Cards';
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
interface Option {
  label: React.ReactNode;
  value: string;
  className?: string;
  data?: {
    [dataAttribute: string]: string | number
  };
}

const Placements: FC = () =>{

    // const [value, onChange] = useState<Value>(new Date());
    const data = {
        labels:["Jan","Feb","March","April"],
        datasets:[
            {
                display:true,
                label:"Total No.of Students",
                data:[0.5,0.4,0.3,0.2],
            
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

    const [value, onChange] = useState<Value>(new Date());

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('');
  
    const options1 = ['Option 1', 'Option 2', 'Option 3'];
    const options2 = ['Option A', 'Option B', 'Option C'];
    const options3 = ['Apple', 'Banana', 'Orange'];
    const options4 = ['Apple', 'Banana', 'Orange'];
  
    const handleChange1 = (option: { value: React.SetStateAction<string>; }) => {
      setSelectedOption1(option.value);
    };
  
    const handleChange2 = (option: { value: React.SetStateAction<string>; }) => {
      setSelectedOption2(option.value);
    };
  
    const handleChange3 = (option: { value: React.SetStateAction<string>; }) => {
      setSelectedOption3(option.value);
    };
  
    const handleChange4 = (option: { value: React.SetStateAction<string>; }) => {
      setSelectedOption4(option.value);
    };
  
    const sourceData= [
        {
          "label": "Baseline",
          "value": 100
        },
        {
          "label": "Endline",
          "value": 60
        },
     
      ]
      
    const placedData=[
        { "label": "Source 1", 
        "value": 30 },
     { "label": "Source 2", 
       "value": 20 },
     { "label": "Source 3",
       "value": 15 },
     { "label": "Source 4",
       "value": 10 },
         
    ]
      
    const status1Data=[
      {
          "label": "Endline",
          "value": 85
        },
       
  ]

    return(
        <><h1></h1>
        <div>
            <AppBar position="static" sx={{ bgcolor: '#3485ae', boxShadow: 'none' }}>
                <Toolbar>
          <Button component={Link} to="/mobilization"><p style={{color:"white",textTransform: "capitalize"}}>Mobilization</p></Button>
         
          <Button component={Link} to="/assessment"><p style={{color:"white",textTransform: "capitalize"}}>Assessment</p></Button>
          <Button component={Link} to="/studentgrade"><p style={{color:"white",textTransform: "capitalize"}}>Student Grade</p></Button>
          <Button component={Link} to="/placements"><b style={{color:"black",textTransform: "capitalize"}}>Placements</b></Button>
                </Toolbar>
            </AppBar>
        </div>


        <div className="dropdown-container-grading">
        <div className="dropdown-wrapper-grading">
    <h1></h1>
    <Dropdown
      options={[{ value: '', label: 'Vertical' }, ...options1]}
      value={selectedOption1}
      onChange={handleChange1} />
    {/* {selectedOption1 && <p>{infoForOption1[selectedOption1]}</p>} */}
  </div>


  <div className="dropdown-wrapper-grading">
    <h1></h1>
    <Dropdown
      options={[{ value: '', label: 'Centre' }, ...options2]}
      value={selectedOption2}
      onChange={handleChange2} />
    {/* {selectedOption2 && <p>{infoForOption2[selectedOption2]}</p>} */}
  </div>

  <div className="dropdown-wrapper-grading">
    <h1></h1>
    <Dropdown
      options={[{ value: '', label: 'Course' }, ...options3]}
      value={selectedOption3}
      onChange={handleChange3} />
    {/* {selectedOption3 && <p>{infoForOption3[selectedOption3]}</p>} */}
  </div>

  <div className="dropdown-wrapper-grading">
    <h1></h1>
    <Dropdown
      options={[{ value: '', label: 'Batch' }, ...options4]}
      value={selectedOption4}
      onChange={handleChange4} />
    {/* {selectedOption4 && <p>{infoForOption4[selectedOption4]}</p>} */}
  </div>
  </div>

  <div className="dataCard categoryCard-placements">
          <Pie
            data={{
              labels: placedData.map((data: Data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: placedData.map((data: Data) => data.value),
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
                  text: 'Companies Placed',
                  font:{
                    size: 18,
                  },
                },
              },
            }}
          />
        </div>

        <div className=' funnelCard-placements'>
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
    )
}

export default Placements;