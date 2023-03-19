import "./dashboard.css";
import IdleChart from "./Chart/IdleChart";
import HorizontalBar from "./Chart/UtilChart";
import MachineChart from "./Chart/MachineChart";
import ThroughputChart from "./Chart/ThroughputChart";
import SpaceCapBar from "./Chart/SpaceCapBar";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="statics-row">
        <div className="head-stat-container">
          <div className="heading-container">
            <p className="heading">Hello Pradip,</p>

            <p className="subheading">Welcome back to ALvision stamp!</p>
          </div>
          <div className="box-container">
            <div className="box-info">
              <div className="perc"></div>
              <div className="score">
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 217.794 217.794"
                >
                  <path d="M113.595,133.642l-5.932-13.169c5.655-4.151,10.512-9.315,14.307-15.209l13.507,5.118c2.583,0.979,5.469-0.322,6.447-2.904  l4.964-13.103c0.47-1.24,0.428-2.616-0.117-3.825c-0.545-1.209-1.547-2.152-2.788-2.622l-13.507-5.118  c1.064-6.93,0.848-14.014-0.637-20.871l13.169-5.932c1.209-0.545,2.152-1.547,2.622-2.788c0.47-1.24,0.428-2.616-0.117-3.825  l-5.755-12.775c-1.134-2.518-4.096-3.638-6.612-2.505l-13.169,5.932c-4.151-5.655-9.315-10.512-15.209-14.307l5.118-13.507  c0.978-2.582-0.322-5.469-2.904-6.447L93.88,0.82c-1.239-0.469-2.615-0.428-3.825,0.117c-1.209,0.545-2.152,1.547-2.622,2.788  l-5.117,13.506c-6.937-1.07-14.033-0.849-20.872,0.636L55.513,4.699c-0.545-1.209-1.547-2.152-2.788-2.622  c-1.239-0.469-2.616-0.428-3.825,0.117L36.124,7.949c-2.518,1.134-3.639,4.094-2.505,6.612l5.932,13.169  c-5.655,4.151-10.512,9.315-14.307,15.209l-13.507-5.118c-1.239-0.469-2.615-0.427-3.825,0.117  c-1.209,0.545-2.152,1.547-2.622,2.788L0.326,53.828c-0.978,2.582,0.322,5.469,2.904,6.447l13.507,5.118  c-1.064,6.929-0.848,14.015,0.637,20.871L4.204,92.196c-1.209,0.545-2.152,1.547-2.622,2.788c-0.47,1.24-0.428,2.616,0.117,3.825  l5.755,12.775c0.544,1.209,1.547,2.152,2.787,2.622c1.241,0.47,2.616,0.429,3.825-0.117l13.169-5.932  c4.151,5.656,9.314,10.512,15.209,14.307l-5.118,13.507c-0.978,2.582,0.322,5.469,2.904,6.447l13.103,4.964  c0.571,0.216,1.172,0.324,1.771,0.324c0.701,0,1.402-0.147,2.054-0.441c1.209-0.545,2.152-1.547,2.622-2.788l5.117-13.506  c6.937,1.069,14.034,0.849,20.872-0.636l5.931,13.168c0.545,1.209,1.547,2.152,2.788,2.622c1.24,0.47,2.617,0.429,3.825-0.117  l12.775-5.754C113.607,139.12,114.729,136.16,113.595,133.642z M105.309,86.113c-4.963,13.1-17.706,21.901-31.709,21.901  c-4.096,0-8.135-0.744-12.005-2.21c-8.468-3.208-15.18-9.522-18.899-17.779c-3.719-8.256-4-17.467-0.792-25.935  c4.963-13.1,17.706-21.901,31.709-21.901c4.096,0,8.135,0.744,12.005,2.21c8.468,3.208,15.18,9.522,18.899,17.778  C108.237,68.434,108.518,77.645,105.309,86.113z M216.478,154.389c-0.896-0.977-2.145-1.558-3.469-1.615l-9.418-0.404  c-0.867-4.445-2.433-8.736-4.633-12.697l6.945-6.374c2.035-1.867,2.17-5.03,0.303-7.064l-6.896-7.514  c-0.896-0.977-2.145-1.558-3.47-1.615c-1.322-0.049-2.618,0.416-3.595,1.312l-6.944,6.374c-3.759-2.531-7.9-4.458-12.254-5.702  l0.404-9.418c0.118-2.759-2.023-5.091-4.782-5.209l-10.189-0.437c-2.745-0.104-5.091,2.023-5.209,4.781l-0.404,9.418  c-4.444,0.867-8.735,2.433-12.697,4.632l-6.374-6.945c-0.896-0.977-2.145-1.558-3.469-1.615c-1.324-0.054-2.618,0.416-3.595,1.312  l-7.514,6.896c-2.035,1.867-2.17,5.03-0.303,7.064l6.374,6.945c-2.531,3.759-4.458,7.899-5.702,12.254l-9.417-0.404  c-2.747-0.111-5.092,2.022-5.21,4.781l-0.437,10.189c-0.057,1.325,0.415,2.618,1.312,3.595c0.896,0.977,2.145,1.558,3.47,1.615  l9.417,0.403c0.867,4.445,2.433,8.736,4.632,12.698l-6.944,6.374c-0.977,0.896-1.558,2.145-1.615,3.469  c-0.057,1.325,0.415,2.618,1.312,3.595l6.896,7.514c0.896,0.977,2.145,1.558,3.47,1.615c1.319,0.053,2.618-0.416,3.595-1.312  l6.944-6.374c3.759,2.531,7.9,4.458,12.254,5.702l-0.404,9.418c-0.118,2.759,2.022,5.091,4.781,5.209l10.189,0.437  c0.072,0.003,0.143,0.004,0.214,0.004c1.25,0,2.457-0.468,3.381-1.316c0.977-0.896,1.558-2.145,1.615-3.469l0.404-9.418  c4.444-0.867,8.735-2.433,12.697-4.632l6.374,6.945c0.896,0.977,2.145,1.558,3.469,1.615c1.33,0.058,2.619-0.416,3.595-1.312  l7.514-6.896c2.035-1.867,2.17-5.03,0.303-7.064l-6.374-6.945c2.531-3.759,4.458-7.899,5.702-12.254l9.417,0.404  c2.756,0.106,5.091-2.022,5.21-4.781l0.437-10.189C217.847,156.659,217.375,155.366,216.478,154.389z M160.157,183.953  c-12.844-0.55-22.846-11.448-22.295-24.292c0.536-12.514,10.759-22.317,23.273-22.317c0.338,0,0.678,0.007,1.019,0.022  c12.844,0.551,22.846,11.448,22.295,24.292C183.898,174.511,173.106,184.497,160.157,183.953z" />
                </svg>
                <p>10</p>
              </div>
              <div className="title">Machine Count</div>
            </div>
            <div className="box-info">
              <div className="perc"></div>
              <div className="score">
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 485 485"
                >
                  <g>
                    <g>
                      <g>
                        <path d="M375.935,375.033c-10.498-5.408-22.442-10.275-35.512-14.472c-0.767-0.409-2.272-1.216-4.303-2.33     c-16.668-9.184-29.807-17.867-36.12-23.803v-24.286c30.385-17.372,51.163-48.542,57.804-86.695     C375.017,218.518,390,202.361,390,187.5c0-15.043-11.308-25.026-30-27.094V150h35v-7.5c0-9.655-8.382-46.807-27.002-47.469     C355.397,57.703,326.775,27.87,290,13.748V0h-95v13.748c-36.824,14.137-65.464,43.973-78.033,81.285     C98.372,95.74,90,132.851,90,142.5v7.5h35v10.406c-18.692,2.068-30,12.051-30,27.094c0,14.861,14.983,31.019,32.196,35.948     c6.647,38.167,27.429,69.336,57.804,86.695v24.285c-6.312,5.936-19.45,14.618-36.106,23.795c-2.06,1.13-3.577,1.943-4.338,2.349     c-13.408,4.401-25.363,9.341-35.485,14.658c-62.571,32.182-64.037,75.318-64.069,77.139L45,485h395v-32.537     C439.991,450.626,439.051,407.119,375.935,375.033z M340,376.218c9.011,3.058,17.38,6.448,25,10.127V430h-25V376.218z M375,187.5     c0,6.126-6.627,14.467-15.266,19.07c0.165-2.964,0.266-31.088,0.266-31.088C373.367,177.356,375,184.268,375,187.5z M290,29.958     C318.457,42.536,340.807,65.964,352.045,95H290V29.958z M210,15h65v80h-65V15z M195,29.956V95h-62.081     C144.134,65.976,166.5,42.545,195,29.956z M110,187.5c0-3.232,1.633-10.144,15-12.018c0,0,0.101,28.125,0.266,31.088     C116.627,201.966,110,193.626,110,187.5z M105.912,135c2.285-10.771,8.315-23.686,11.757-25h249.662     c3.442,1.314,9.472,14.229,11.757,25H105.912z M141.227,216.156C140.413,210.366,140,204.09,140,197.5V150h205v47.5     c0,6.59-0.413,12.866-1.229,18.674c-5.158,37.347-25.101,67.55-54.733,82.874C275.075,306.315,259.417,310,242.5,310     s-32.575-3.685-46.555-10.962C166.331,283.724,146.388,253.521,141.227,216.156z M285,317.299v17.312     C279.87,339.974,263.613,355,242.5,355c-20.977,0-37.346-15.055-42.5-20.404v-17.298c13.182,5.108,27.424,7.702,42.5,7.702     C257.579,325,271.824,322.405,285,317.299z M160,369.204c9.754-5.509,23.203-13.621,32.241-21.169     C200.885,356.174,219.023,370,242.5,370s41.615-13.826,50.259-21.966c9.035,7.546,22.48,15.656,32.241,21.169V430H160V369.204z      M120,386.509c7.426-3.641,15.798-7.078,25-10.258V430h-25V386.509z M90.2,470H60v-17.37c0.093-2.065,2.189-31.708,45-57.922     V430.2c-8.466,1.22-15,8.502-15,17.3v20C90,468.351,90.082,469.181,90.2,470z M380,467.5c0,1.355-1.145,2.5-2.5,2.5h-270     c-1.355,0-2.5-1.145-2.5-2.5v-20c0-1.355,1.145-2.5,2.5-2.5h270c1.355,0,2.5,1.145,2.5,2.5V467.5z M425,470h-30.2     c0.118-0.819,0.2-1.649,0.2-2.5v-20c0-8.798-6.534-16.081-15-17.3v-35.764c43.445,26.306,44.951,56.392,45,58.136V470z" />
                        <path d="M242.5,255h20v-15H250v-32.5h-15v40C235,251.642,238.358,255,242.5,255z" />
                      </g>
                    </g>
                  </g>
                </svg>
                <p>10</p>
              </div>
              <div className="title">Machine Count</div>
            </div>
            <div className="box-info">
              <div className="perc"></div>
              <div className="score">
                <svg viewBox="0 0 24 24">
                  <path d="M18.618 7.462 6.403 2.085a1.007 1.007 0 0 0-.77-.016 1.002 1.002 0 0 0-.552.537l-3 7a1 1 0 0 0 .525 1.313L9.563 13.9 8.323 17H4v-3H2v8h2v-3h4.323c.823 0 1.552-.494 1.856-1.258l1.222-3.054 3.419 1.465a1 1 0 0 0 1.311-.518l3-6.857a1 1 0 0 0-.513-1.316zM19.93 16.372l-1.858-.742 1.998-5 1.858.741z" />
                </svg>
                <p>10</p>
              </div>
              <div className="title">Machine Count</div>
            </div>
            <div className="box-info">
              <div className="perc"></div>
              <div className="score">
                <svg fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.75 11.25L10.25 5.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M5.75 19.2502H6.25C6.80229 19.2502 7.25 18.8025 7.25 18.2502V15.75C7.25 15.1977 6.80229 14.75 6.25 14.75H5.75C5.19772 14.75 4.75 15.1977 4.75 15.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M11.75 19.2502H12.25C12.8023 19.2502 13.25 18.8025 13.25 18.2502V12.75C13.25 12.1977 12.8023 11.75 12.25 11.75H11.75C11.1977 11.75 10.75 12.1977 10.75 12.75V18.2502C10.75 18.8025 11.1977 19.2502 11.75 19.2502Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H17.75C17.1977 4.75 16.75 5.19772 16.75 5.75V18.2502C16.75 18.8025 17.1977 19.2502 17.75 19.2502Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M11.25 8.25V4.75H7.75"
                  ></path>
                </svg>
                <p>10</p>
              </div>
              <div className="title">Machine Count</div>
            </div>
          </div>
        </div>
        <div className="idle-stat-container">
          <div className="idle-time">
            <label className="box-heading" for="time">
              Idle Time Causes
            </label>
            <select id="time" name="time">
              <option value="all">All</option>
              <option value="Day">1 Day</option>
              <option value="Week">1 Week</option>
              <option value="Month">1 Month</option>
            </select>
          </div>
          <div className="idle-chart-container">
            <div className="idle-chart">
              <IdleChart />
            </div>
            <div className="chart-results">
              <div className="box-content-font">
                <p>Missing Part</p>
                <p>Service</p>
                <p>Broken Machine</p>
              </div>
              <div className="box-content-font">
                <p>30%</p>
                <p>30%</p>
                <p>40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="statics-row">
        <div className="stat-container">
          <div className="select-opt">
            <select className="box-heading" id="Time" name="Time">
              <option value="default">Machine Utilization</option>
              <option value="1 day">1 day</option>
              <option value="1 week">1 week</option>
              <option value="1 month">1 month</option>
              <option value="1 year">1 year</option>
            </select>
          </div>
          <div>
            <HorizontalBar />
          </div>
        </div>
        <div className="stat-container">
          <div className="select-opt">
            <select className="box-heading" id="Machine" name="Machine">
              <option value="Mac 1">Machine 1</option>
              <option value="Mac 2">Machine 2</option>
              <option value="Mac 3">Machine 3</option>
              <option value="Mac 4">Machine 4</option>
            </select>
          </div>
          <div className="status-all">
            <div className="status-container">
              <div className="running">Running</div>
              <div className="status-stat">
                <div className="box-content-font">
                  <p>Throughput</p>
                  <p>OEE</p>
                  <p>Capacity Utilization</p>
                </div>
                <div className="box-content-font">
                  <p>100 / Hours</p>
                  <p>85%</p>
                  <p>55%</p>
                </div>
              </div>
            </div>
            <div>
              <MachineChart />
            </div>
          </div>
        </div>
        <div className="stat-container">
          <div className="head">
            <p className="box-heading">Environmental Benefits</p>
          </div>
          <div>
            <div className="env-stat">
              <div className="env-svg">
                <svg version="1.1" id="Layer_1" viewBox="0 0 504.32 504.32">
                  <g transform="translate(1 1)">
                    <path
                      fill="#80D6FA"
                      d="M248.6,4.12c136.533,0,247.467,110.933,247.467,247.467S385.133,499.054,248.6,499.054   c-34.133,0-66.56-6.827-96.427-19.627c22.187-17.067,36.693-43.52,36.693-74.24c0-36.693-20.48-68.267-51.2-83.627V80.92   c0-16.213-9.387-30.72-23.04-37.547C153.027,18.627,199.107,4.12,248.6,4.12"
                    />
                    <path
                      fill="#50DD8E"
                      d="M262.254,406.894c8.533,8.533,17.067,25.6,8.533,34.133c-8.533,8.533-25.6,8.533-34.133,0   C224.707,429.08,253.72,398.36,262.254,406.894z M421.827,268.654c17.067,17.067-17.067,25.6-25.6,51.2s-42.667,25.6-51.2,17.067   c-8.533-8.533-25.6-17.067-42.667-25.6c-17.067-8.533,0-25.6,17.067-17.067c17.067,8.533,23.893-25.6,42.667-25.6   C370.627,268.654,404.76,251.587,421.827,268.654z M311.747,11.8l33.28,11.093c70.827,29.013,124.587,89.6,145.067,164.693   c-31.573,13.653-81.92,19.627-93.867,13.653c-17.067-8.533-17.067-51.2-46.933-52.907c-11.947-0.853-25.6,51.2-42.667,59.733   c-17.067,8.533-25.6-25.6-42.667-51.2s25.6-51.2,42.667-51.2c17.067,0,17.067-42.667,17.067-51.2S306.627,35.694,311.747,11.8z    M217.027,353.987c0,0-8.533,8.533-34.133,8.533l-1.707,0.853c-9.387-17.92-23.893-32.427-40.96-41.813V191.854   c25.6,0,34.987,3.413,34.987,3.413c9.387,4.267,16.213,12.8,16.213,26.453c0,42.667-5.973,34.133-14.507,59.733   c-8.533,25.6,29.867,29.013,40.107,34.133C225.56,319.854,234.094,336.92,217.027,353.987z"
                    />
                    <path
                      fill="#E4F2DE"
                      d="M140.227,80.92v42.667H54.893V80.92c0-23.893,18.773-42.667,42.667-42.667   c9.387,0,17.92,2.56,24.747,7.68C133.4,53.614,140.227,66.414,140.227,80.92"
                    />
                    <path
                      fill="#FF7474"
                      d="M54.893,277.187v-51.2v-51.2v-51.2h85.333v68.267V321.56c17.92,9.387,32.427,23.893,40.96,41.813   c6.827,12.8,10.24,26.453,10.24,41.813c0,26.453-11.093,50.347-29.013,67.413c-17.067,16.213-39.253,26.453-64.853,26.453   c-52.053,0-93.867-41.813-93.867-93.867c0-36.693,20.48-68.267,51.2-83.627V277.187z"
                    />
                  </g>
                  <path
                    fill="#51565F"
                    d="M252.16,504.32c-40.107,0-60.587-8.533-61.44-8.533c-2.56-0.853-3.413-3.413-2.56-5.973  c0.853-2.56,3.413-3.413,5.973-2.56c0,0,19.627,8.533,58.027,8.533c133.973,0,243.2-109.227,243.2-243.2  c0-11.093-0.853-22.187-2.56-33.28c0-2.56,1.707-4.267,3.413-5.12c2.56,0,4.267,1.707,5.12,3.413  c1.707,11.093,2.56,23.04,2.56,34.987C503.894,391.68,391.254,504.32,252.16,504.32z M98.56,504.32  c-53.76,0-98.133-44.373-98.133-98.133c0-35.84,19.627-69.12,51.2-86.187V124.587c0-2.56,1.707-4.267,4.267-4.267h51.2  c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267H60.16v42.667h12.8c2.56,0,4.267,1.707,4.267,4.267  s-1.707,4.267-4.267,4.267h-12.8v42.667h12.8c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267h-12.8v42.667h12.8  c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267h-12.8v40.107c0,1.707-0.853,3.413-2.56,3.413  c-29.867,15.36-48.64,46.08-48.64,79.36c0,49.493,40.107,89.6,89.6,89.6s89.6-40.107,89.6-89.6c0-34.133-18.773-64-48.64-79.36  c-1.707-0.853-2.56-2.56-2.56-3.413V81.92c0-21.333-17.067-38.4-38.4-38.4s-38.4,17.067-38.4,38.4v8.533  c0,2.56-1.707,4.267-4.267,4.267c-2.56,0-4.267-1.707-4.267-4.267V81.92c0-25.6,21.333-46.933,46.933-46.933  s46.933,21.333,46.933,46.933V320c31.573,17.067,51.2,50.347,51.2,86.187C196.693,459.947,152.32,504.32,98.56,504.32z   M98.56,453.12c-2.56,0-4.267-1.707-4.267-4.267s1.707-4.267,4.267-4.267c21.333,0,38.4-17.067,38.4-38.4  c0-2.56,1.707-4.267,4.267-4.267c2.56,0,4.267,1.707,4.267,4.267C145.493,431.787,124.16,453.12,98.56,453.12z M254.72,452.267  c-7.68,0-15.36-2.56-20.48-7.68c-8.533-8.533-2.56-23.893,7.68-33.28c3.413-3.413,7.68-6.827,11.093-7.68  c6.827-2.56,11.093,0,12.8,1.707c10.24,10.24,19.627,29.013,8.533,40.107C270.08,449.707,262.4,452.267,254.72,452.267z   M259.84,410.454c-1.707,0-5.973,1.707-11.093,6.827c-4.267,4.267-6.827,8.533-8.533,12.8s-0.853,6.827,0.853,8.533  c6.827,6.827,21.333,6.827,28.16,0c5.973-5.973-0.853-20.48-8.533-28.16H259.84z M218.027,359.254c-0.853,0-2.56,0-3.413-0.853  c-1.707-1.707-1.707-4.267,0-5.973c8.533-8.533,9.387-15.36,8.533-20.48c-0.853-5.973-4.267-9.387-7.68-11.093  c-1.707-0.853-5.973-1.707-9.387-3.413c-11.093-3.413-26.453-7.68-32.427-18.773c-2.56-5.12-2.56-11.093-0.853-17.92  c2.56-8.533,5.12-13.653,7.68-17.92c4.267-7.68,6.827-12.8,6.827-40.96c0-13.653-7.68-19.627-13.653-22.187  c-2.56-0.853-3.413-3.413-1.707-5.973c0.853-2.56,3.413-3.413,5.973-1.707c11.947,5.973,18.773,16.213,18.773,29.867  c0,29.867-3.413,35.84-7.68,45.227c-1.707,4.267-4.267,8.533-6.827,16.213c-1.707,4.267-1.707,7.68,0,11.093  c4.267,7.68,17.067,11.093,27.307,14.507c4.267,1.707,8.533,2.56,11.093,3.413c5.973,3.413,10.24,9.387,11.947,17.067  c1.707,9.387-2.56,19.627-11.093,28.16C220.587,359.254,218.88,359.254,218.027,359.254z M363.094,347.307  c-8.533,0-16.213-2.56-20.48-5.973c-7.68-7.68-24.747-16.213-41.813-24.747c-4.267-1.707-6.827-5.12-8.533-7.68  c-1.707-3.413-1.707-6.827,0-10.24c4.267-7.68,17.067-12.8,29.013-6.827c5.12,2.56,9.387-0.853,16.213-9.387  c5.973-7.68,13.653-16.213,24.747-16.213c1.707,0,5.12-0.853,9.387-2.56c14.507-4.267,39.253-11.093,53.76,3.413  c4.267,4.267,5.973,8.533,5.973,12.8c0,7.68-5.973,12.8-12.8,19.627c-6.827,5.973-14.507,13.653-17.067,23.04  c-4.267,11.947-13.653,20.48-27.307,23.893C370.773,347.307,366.507,347.307,363.094,347.307z M311.04,296.96  c-5.12,0-8.533,2.56-10.24,5.12c-0.853,0.853-0.853,1.707,0,2.56c0.853,1.707,2.56,2.56,4.267,3.413  c17.92,8.533,34.987,17.067,43.52,26.453c3.413,3.413,13.653,5.12,23.04,2.56c5.973-1.707,17.067-5.973,21.333-17.92  c4.267-11.947,12.8-20.48,19.627-26.453c5.12-5.12,10.24-10.24,10.24-13.653c0-1.707-0.853-4.267-3.413-5.973  c-11.093-11.093-31.573-5.12-45.227-1.707c-5.12,1.707-9.387,2.56-11.947,2.56c-6.827,0-11.947,5.973-17.92,12.8  c-6.827,7.68-14.507,17.92-26.453,11.947C316.16,297.814,313.6,296.96,311.04,296.96z M301.654,214.187  c-11.947,0-19.627-15.36-27.307-31.573c-4.267-7.68-8.533-16.213-12.8-23.04c-5.973-8.533-5.973-18.773-0.853-28.16  c9.387-17.067,34.987-29.867,46.933-29.867c5.973,0,12.8-11.947,12.8-46.933c0-1.707-1.707-4.267-3.413-7.68  c-4.267-6.827-10.24-17.067-8.533-31.573c-17.92-4.267-36.693-6.827-55.467-6.827c-34.987,0-69.12,7.68-100.693,22.187  c-2.56,0.853-4.267,0-5.973-1.707c-0.853-2.56,0-4.267,1.707-5.973C181.334,7.68,216.32,0,252.16,0c21.333,0,41.813,2.56,61.44,7.68  c2.56,0.853,3.413,2.56,3.413,5.12c-3.413,13.653,2.56,22.187,6.827,29.867c2.56,4.267,5.12,7.68,5.12,11.947  c0,36.693-6.827,55.467-21.333,55.467c-10.24,0-32.427,11.093-40.107,25.6c-3.413,6.827-3.413,12.8,0.853,19.627  c5.12,7.68,9.387,16.213,13.653,23.893c10.24,20.48,16.213,29.013,23.893,25.6c7.68-3.413,15.36-19.627,21.333-31.573  c7.68-16.213,14.507-28.16,23.04-28.16l0,0c20.48,0.853,29.013,18.773,35.84,33.28c4.267,8.533,7.68,17.067,13.653,19.627  c9.387,5.12,54.613,0,87.04-11.947C466.347,115.2,413.44,56.32,345.174,28.16c-2.56-0.853-3.413-3.413-2.56-5.973  c0.853-2.56,3.413-3.413,5.973-2.56c72.533,29.867,127.147,92.16,147.627,167.253v0.853c0,0.853,0,0.853,0,1.707  c0,0.853-0.853,0.853-0.853,1.707L494.507,192c-31.573,13.653-83.627,20.48-97.28,13.653c-8.533-4.267-12.8-13.653-17.067-23.893  c-5.973-13.653-12.8-27.307-28.16-28.16c-3.413,0-11.093,15.36-15.36,23.893c-7.68,15.36-15.36,30.72-25.6,35.84  C306.773,213.334,304.214,214.187,301.654,214.187z"
                  />
                </svg>
              </div>
              <div className="box-content-font">
                <p>CO2 Emission Saved</p>
                <p>7,696,63 KG</p>
              </div>
            </div>
            <div className="env-stat">
              <div className="env-svg">
                <svg version="1.1" id="Layer_1" viewBox="0 0 504.34 504.34">
                  <g transform="translate(1 1)">
                    <path
                      fill="#50DD8E"
                      d="M362.093,208.94L362.093,208.94v-42.667c0,0-1.707-40.96,25.6-68.267s68.267-25.6,68.267-25.6   h42.667v42.667c0,0,1.707,40.96-25.6,68.267c-27.307,27.307-68.267,25.6-68.267,25.6H362.093z M327.96,140.673L327.96,140.673   h-42.667c0,0-40.96,1.707-68.267-25.6s-25.6-68.267-25.6-68.267V4.14h42.667c0,0,40.96-1.707,68.267,25.6s25.6,68.267,25.6,68.267   V140.673z"
                    />
                    <path
                      fill="#FFD0A1"
                      d="M362.093,396.673l98.133-47.787c11.947-6.827,28.16-2.56,34.987,9.387   c6.827,11.947,2.56,28.16-9.387,34.987l-115.2,71.68c0,0-25.6,17.067-85.333,17.067c-51.2,0-128-42.667-128-42.667   s-17.067-8.533-51.2-8.533H71.96V311.34h102.4c25.6,0,68.267,51.2,93.867,51.2h51.2c17.067,0,25.6,8.533,25.6,8.533   S356.973,378.753,362.093,396.673"
                    />
                    <path
                      fill="#AAB1BA"
                      d="M29.293,452.14c0-2.56-1.707-4.267-4.267-4.267s-4.267,1.707-4.267,4.267   c0,2.56,1.707,4.267,4.267,4.267S29.293,454.7,29.293,452.14L29.293,452.14z M71.96,430.807v51.2   c0,9.387-7.68,17.067-17.067,17.067h-51.2V277.207h51.2c9.387,0,17.067,7.68,17.067,17.067v17.067V430.807z"
                    />
                  </g>
                  <path
                    fill="#51565F"
                    d="M55.893,504.34h-51.2c-2.56,0-4.267-1.707-4.267-4.267s1.707-4.267,4.267-4.267h51.2  c6.827,0,12.8-5.973,12.8-12.8V295.273c0-6.827-5.973-12.8-12.8-12.8h-51.2c-2.56,0-4.267-1.707-4.267-4.267  c0-2.56,1.707-4.267,4.267-4.267h51.2c11.947,0,21.333,9.387,21.333,21.333v187.733C77.227,494.953,67.84,504.34,55.893,504.34z   M286.293,487.273c-52.053,0-127.147-41.813-129.707-43.52l0,0c0,0-17.067-7.68-49.493-7.68c-2.56,0-4.267-1.707-4.267-4.267  c0-2.56,1.707-4.267,4.267-4.267c34.987,0,52.053,8.533,52.907,9.387c0.853,0.853,76.8,41.813,126.293,41.813  c57.173,0,82.773-16.213,82.773-16.213l115.2-71.68c10.24-5.973,13.653-18.773,7.68-29.013c-2.56-5.12-7.68-8.533-12.8-10.24  c-5.12-1.707-11.093-0.853-16.213,1.707L364.8,401.087c-17.92,9.387-34.987,9.387-69.973,9.387c-34.133,0-83.627-8.533-86.187-8.533  s-4.267-2.56-3.413-5.12c0-2.56,2.56-4.267,5.12-3.413c0.853,0,51.2,8.533,84.48,8.533s50.347,0,66.56-7.68l98.133-47.787  c6.827-4.267,14.507-5.12,22.187-2.56c7.68,1.707,14.507,6.827,17.92,13.653c8.533,14.507,3.413,32.427-11.093,40.96l-115.2,71.68  C372.48,470.207,346.88,487.273,286.293,487.273z M26.027,461.673c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533  s8.533,3.413,8.533,8.533S31.147,461.673,26.027,461.673z M346.027,376.34c-0.853,0-2.56,0-3.413-0.853c0,0-7.68-7.68-22.187-7.68  h-51.2c-14.507,0-31.573-12.8-49.493-26.453c-16.213-11.947-33.28-24.747-44.373-24.747h-68.267c-2.56,0-4.267-1.707-4.267-4.267  c0-2.56,1.707-4.267,4.267-4.267h68.267c14.507,0,31.573,12.8,49.493,26.453c16.213,11.947,33.28,24.747,44.373,24.747h51.2  c18.773,0,28.16,9.387,29.013,9.387c1.707,1.707,1.707,4.267,0,5.973C348.587,376.34,346.88,376.34,346.027,376.34z M328.96,316.607  c-2.56,0-4.267-1.707-4.267-4.267v-166.4h-38.4c-1.707,0-42.667,1.707-70.827-27.307c-28.16-28.16-27.307-69.973-26.453-71.68V4.287  c0-2.56,1.707-4.267,4.267-4.267h42.667c1.707,0,42.667-1.707,70.827,26.453c28.16,28.16,27.307,69.973,27.307,71.68v41.813l0,0  c0,0,0,0,0,0.853v171.52C333.227,314.9,331.52,316.607,328.96,316.607z M196.693,9.407v38.4c0,0.853-0.853,39.253,24.747,64.853  s64.853,24.747,64.853,24.747h32.427l-95.573-95.573c-0.853-0.853-0.853-1.707-0.853-3.413c0-1.707,0-2.56,0.853-3.413  c1.707-1.707,4.267-1.707,5.973,0l94.72,94.72v-30.72c0-0.853,0.853-39.253-24.747-64.853S234.24,10.26,234.24,10.26L196.693,9.407z   M407.467,214.207c-0.853,0-1.707,0-1.707,0h-42.667c-0.853,0-2.56,0-3.413-0.853c-0.853-0.853-0.853-1.707-0.853-3.413l0,0v-42.667  c0-1.707-1.707-42.667,26.453-71.68c28.16-28.16,69.973-27.307,71.68-26.453h42.667c2.56,0,4.267,1.707,4.267,4.267v42.667  c0,1.707,1.707,42.667-26.453,71.68C451.84,212.5,416,214.207,407.467,214.207z M373.333,205.673h32.427c0,0-0.853,0,0.853,0  c6.827,0,40.96-0.853,64-24.747c25.6-25.6,24.747-64.853,24.747-64.853v-38.4h-38.4c-0.853,0-39.253-0.853-64.853,24.747  s-24.747,64.853-23.893,64.853V199.7l94.72-94.72c1.707-1.707,4.267-1.707,5.973,0c0.853,0.853,0.853,1.707,0.853,3.413  c0,1.707,0,2.56-0.853,3.413L373.333,205.673z"
                  />
                </svg>
              </div>
              <div className="box-content-font">
                <p>Equivalent Trees Planted</p>
                <p>229,72</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="statics-row">
        <div className="stat-container">
          <div className="select-opt">
            <select className="box-heading" id="Time" name="Time">
              <option value="select">Throughput</option>
              <option value="1 day">1 day</option>
              <option value="1 week">1 week</option>
              <option value="1 month">1 month</option>
              <option value="1 year">1 year</option>
            </select>
          </div>
          <div>
            <ThroughputChart />
          </div>
        </div>
        <div className="stat-container">
          <div className="select-opt">
            <select className="box-heading" id="Machine" name="Machine">
              <option value="select">Throughput</option>
              <option value="Mac 1">Machine 1</option>
              <option value="Mac 2">Machine 2</option>
              <option value="Mac 3">Machine 3</option>
              <option value="Mac 4">Machine 4</option>
            </select>
          </div>
          <div>
            <SpaceCapBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
