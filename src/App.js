
import './App.css';
import MyCharts from './components/charts1';
import MyCharts2 from './components/charts2';
import React from 'react';
import './components/styles/navbar.css';



function App() {
 
  return (
    <div className="App">
        <nav className="navigation">
      <a href="/" className="brand-name">
        VEHICLE HEALTH MANAGEMENT SYSTEM
      </a>
     
      <div
        className="navigation-menu">
         
        <ul>
          <li>
          <span>Hello Harsha</span>
          <li><a href="http://harshaawslamda76709.s3-website-us-east-1.amazonaws.com/" className="brand-name">sign out
      </a></li>
          </li>
          <li><a href="http://harshaawslamda76709.s3-website-us-east-1.amazonaws.com/" className="brand-name">send email
      </a></li>
          
        </ul>
      </div>
    </nav>

        <main className="main-container">
          <div className="main-title">
            <p className="font-weight-bold">DASHBOARD</p>
          </div>

          <div className="main-cards">

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">MILEAGE</p>
                {/* <span className="material-symbols-outlined">
                  local_gas_station
                </span> */}
              </div>
              <span className="text-primary font-weight-bold">12.23 (Km/L)</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">ENGINE OIL VISCOSITY</p>
                {/* <span className="material-symbols-outlined">
                  humidity_high
                </span> */}
              </div>
              <span className="text-primary font-weight-bold">90 centistokes</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">AVERAGE COOLANT TEMPERATURE</p>
                {/* <span className="material-symbols-outlined">
                  device_thermostat
                </span> */}
              </div>
              <span className="text-primary font-weight-bold">74.46 (Degree Celcius)</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">OVERALL VEHICLE HEALTH</p>
                {/* <span className="material-symbols-outlined">
                  car_crash
                </span> */}
              </div>
              <span className="text-primary font-weight-bold">GOOD</span>
            </div>

          </div>

          <div className="charts">

            <div className="charts-card center">
              <p className="chart-title">MONTHLY COOLANT TEMPERATURE DATA</p>
              <div id="bar-chart"></div>
              <MyCharts />
            </div>

            <div className="charts-card center">
              <p className="chart-title">COOLANT TEMPERATURE VS TIME</p>
              <div id="area-chart"></div>
              <MyCharts2 />
            </div>



          </div>
        </main>


      </div>
  );
}

export default App;
