import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from "react-select";
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
const statusOpt = [
  { value: 1, label: "Speed Difference" },
  { value: 2, label: "Distance traveled" },
  { value: 3, label: "Mass and force" },
];
const distOpt = [
  { value: "millimeter", label: "millimeter" },
  { value: "centimeter", label: "centimeter" },
  { value: "meter", label: "meter" },
  { value: "kilometers", label: "kilometers" },
  { value: "inches", label: "inches" },
  { value: "feet", label: "feet" },
  { value: "yards", label: "yards" },
  { value: "miles", label: "miles" },
  { value: "feet per inches", label: "feet per inches" },
  { value: "meters per centimeters", label: "meters per centimeters" }
]
const accOpt = [
  { value: "meter per second sqaure", label: 'meter per second sqaure' },
  { value: "gravitational acc. on Earth", label: 'gravitational acc. on Earth' },
  { value: 'feet per second squared', value: 'feet per second squared' }
]
const timeOpt = [
  { value: "millisecond", label: "millisecond" },
  { value: "second", label: "second" },
  { value: "minutes", label: "minutes" },
  { value: "hours", label: "hours" },
  { value: "days", label: "days" },
  { value: "weeks", label: "weeks" },
  { value: "months", label: "months" },
  { value: "years", label: "years" },
  { value: "minutes per second", label: "minutes per second" },
  { value: "hours per minute", label: "hours per minute" },

];
const options = [
  {
    value: "meter per second", label: "meter per second"

  },
  {
    value: "kilometer per hour", label: "kilometer per hour"

  },
  {
    value: "feet per second", label: "feet per second"

  },
  {
    value: "miles per hour", label: "miles per hour"

  },
  {
    value: "knot", label: "knot"

  },
  {
    value: "kilometer per second", label: "kilometers per second"
  },
  {
    value: "miles per second", label: "miles per second"

  },
  {
    value: "light speed", label: "light speed"

  },
  {
    value: "centimeter per second", label: "centimeter per second"

  },
  {
    value: "miles per minute", label: "miles per minute"

  },
  {
    value: "kilometer per minute", label: "kilometer per minute"

  }
]
const massOpt = [
  { value: 'milligrams', label: 'milligrams' },
  { value: 'grams', label: 'grams' },
  { value: 'kilograms', label: 'kilograms' },
  { value: 'metric tons', label: 'metric tons' },
  { value: 'grains', label: 'grains' },
  { value: 'drachms', label: 'drachms' },
  { value: 'ounces', label: 'ounces' },
  { value: 'pounds', label: 'pounds' },
  { value: 'stones', label: 'stones' },
  { value: 'US short tons', label: 'US short tons' },
  { value: 'imperial tons', label: 'imperial tons' },
]
const forceOpt = [
  { value: 'newtons', label: 'newtons' },
  { value: 'kilonewtons', label: 'kilonewtons' },
  { value: 'meganewtons', label: 'meganewtons' },
  { value: 'giganewtons', label: 'giganewtons' },
  { value: 'meganewtons', label: 'meganewtons' },
  { value: 'teranewtons', label: 'teranewtons' },
  { value: 'poundals', label: 'poundals' },
  { value: 'pounds force', label: 'pounds force' },
  { value: 'dynes', label: 'dynes' }
]
function App() {

  const [status, setStatus] = useState("");
  const [initialSpeed, setInitialSpeed] = useState()
  const [initialSpeedValue, setInitialSpeedValue] = useState("")
  const [finalSpeed, setFinalSpeed] = useState()
  const [finalSpeedValue, setFinalSpeedValue] = useState("")
  const [time, setTime] = useState("")
  const [timeValue, setTimeValue] = useState()
  const [dist, setDist] = useState("")
  const [distValue, setDistValue] = useState()
  const [mass, setMass] = useState("")
  const [massValue, setMassValue] = useState()
  const [force, setForce] = useState("")
  const [forceValue, setForceValue] = useState()
  const [result, setResult] = useState();
  const [resultValue, setResultValue] = useState()
  const [bundle, setBundle] = useState([])

  const speeddifference = () => {
    // console.log(initialSpeed)
    axios
      .post("http://localhost:80/api/distancetravelled.php", {
        initialSpeedValue: initialSpeedValue,
        initialSpeed: initialSpeed.value,
        distValue: distValue,
        dist: dist.value,
        timeValue: timeValue,
        time: time.value,
      })
      .then(() => {
        setBundle([
          ...bundle,
          {
            initialSpeedValue: initialSpeedValue,
            initialSpeed: initialSpeed.value,
            distValue: distValue,
            dist: dist.value,
            timeValue: timeValue,
            time: time.value,
          },
        ]);
      });

  }

  const distancetravelled = () => {
    axios
      .post("http://localhost:80/api/speeddifference.php", {
        initialSpeedValue: initialSpeedValue,
        initialSpeed: initialSpeed.value,
        finalSpeedValue: finalSpeedValue,
        finalSpeed: finalSpeed.value,
        timeValue: timeValue,
        time: time.value,
      })
      .then(() => {
        setBundle([
          ...bundle,
          {
            initialSpeedValue: initialSpeedValue,
            initialSpeed: initialSpeed,
            finalSpeedValue: finalSpeedValue,
            finalSpeed: finalSpeed,
            timeValue: timeValue,
            time: time,
          },
        ]);
      });

  }
  const massandforce=()=>{
  var axios = require('axios');
  var FormData = require('form-data');
var data = new FormData();
data.append('massValue', massValue);
data.append('forceValue', forceValue);

var config = {
  method: 'post',
  url: 'http://localhost:80/api/massforce.php',
  // headers: { 
  //   'Cookie': 'PHPSESSID=5jdbrent7lob7ppq5uuo8n975o', 
  //   ...data.getHeaders()
  // },
  data : data
};

axios(config)
.then(() => {
  setBundle([
    ...bundle,
    {
      massValue: massValue,
      mass: mass.value,
      forceValue: forceValue,
      force: force.value,
    },
  ]);
})
.catch(function (error) {
  console.log(error);
});
    // axios
    // .post("http://localhost:80/api/massforce.php", {
    //   massValue: parseInt(massValue),//value
    //   mass: mass.value,//unit
    //   forceValue: parseInt(forceValue),//value
    //   force: force.value,//unit
    // })
    

  }
  // console.log(status.label)
  return (
    <div style={{ padding: 30 }}>
      
      <Select
        value={status}
        onChange={setStatus}
        options={statusOpt}
      />

      {status.value === 1 ? <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Initial Speed</Form.Label>
            <Form.Control
              value={initialSpeedValue}
              type="number"
              placeholder="Enter initial speed"
              name="initial speed"
              onChange={(e) => setInitialSpeedValue(e.target.value)}
            />
            <Select
              value={initialSpeed}
              onChange={setInitialSpeed}
              options={options}
              placeholder="Select.."
              name="initial speed"
            />

          </Form.Group>



          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Final Speed</Form.Label>
            <Form.Control
              value={finalSpeedValue}
              type="number"
              placeholder="Enter final speed"
              name="final speed"
              onChange={(e) => setFinalSpeedValue(e.target.value)}
            />
            <Select
              value={finalSpeed}
              onChange={setFinalSpeed}
              options={options}
              placeholder="Select.."
              name="initial speed"
            />

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Time</Form.Label>
            <Form.Control
              value={timeValue}
              type="number"
              placeholder="Enter time"
              name="time"
              onChange={(e) => setTimeValue(e.target.value)}
            />
            <Select
              value={time}
              onChange={setTime}
              options={timeOpt}
              placeholder="Select.."
              name="time opt"
            />

          </Form.Group>
          <Form.Group>
            <Button
              style={{ background: "#fc0fc0", borderRadius: "5", border: "0" }}
              onClick={speeddifference}
            >
              Calculate
            </Button>
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Acceleration</Form.Label>
            <Form.Control
              value={resultValue}
              type="number"
              placeholder="Result"
              name="acceleration"
              onChange={(e) => setResultValue(e.target.value)}
            />
            <Select
              value={result}
              onChange={setResult}
              options={accOpt}
              placeholder="Select.."
              name="initial speed"
            />

          </Form.Group>


        </Form>
      </div> : null}
      {/* part 2 */}
      {status.value === 2 ?
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Initial Speed</Form.Label>
              <Form.Control
                value={initialSpeedValue}
                type="number"
                placeholder="Enter initial speed"
                name="initial speed"
                onChange={(e) => setInitialSpeedValue(e.target.value)}

              />
              <Select
                value={initialSpeed}
                onChange={setInitialSpeed}
                options={options}
                placeholder="Select.."
                name="initial speed"
              />

            </Form.Group>



            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Distance</Form.Label>
              <Form.Control
                value={distValue}
                type="number"
                placeholder="Enter distance"
                name="final speed"
                onChange={(e) => setDistValue(e.target.value)}
              />
              <Select
                value={dist}
                onChange={setDist}
                options={distOpt}
                placeholder="Select.."
                name="initial speed"
              />

            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Time</Form.Label>
              <Form.Control
                value={timeValue}
                type="number"
                placeholder="Enter time"
                name="time"
                onChange={(e) => setTimeValue(e.target.value)}
              />
              <Select
                value={time}
                onChange={setTime}
                options={timeOpt}
                placeholder="Select.."
                name="time opt"
              />

            </Form.Group>


            <Form.Group>
              <Button
                style={{ background: "#fc0fc0", borderRadius: "5", border: "0" }}
                onClick={distancetravelled}
              >
                Calculate
              </Button>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Acceleration</Form.Label>
              <Form.Control
                value={resultValue}
                type="number"
                placeholder="Result"
                name="acceleration"
                onChange={(e) => setResultValue(e.target.value)}
              />
              <Select
                value={result}
                onChange={setResult}
                options={accOpt}
                placeholder="Select.."
                name="initial speed"
              />

            </Form.Group>


          </Form>
        </div> : null}
      {status.value === 3 ? <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Mass</Form.Label>
            <Form.Control
              value={massValue}
              type="number"
              placeholder="Enter Mass"
              name="mass"
              onChange={(e) => setMassValue(e.target.value)}
            />
            <Select
              value={mass}
              onChange={setMass}
              options={massOpt}
              placeholder="Select.."
              name="mass"
            />

          </Form.Group>



          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Net Force</Form.Label>
            <Form.Control
              value={forceValue}
              type="number"
              placeholder="Enter Force"
              name="force"
              onChange={(e) => setForceValue(e.target.value)}
            />
            <Select
              value={force}
              onChange={setForce}
              options={forceOpt}
              placeholder="Select.."
              name="initial speed"
            />

          </Form.Group>
          <Form.Group>
            <Button
              style={{ background: "#fc0fc0", borderRadius: "5", border: "0" }}
              onClick={massandforce}
            >
              Calculate
            </Button>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#fc0fc0', fontWeight: 'bold', fontSize: 20 }}>Acceleration</Form.Label>
            <Form.Control
              value={resultValue}
              type="number"
              placeholder="Result"
              name="acceleration"
              onChange={(e) => setResultValue(e.target.value)}
            />
            <Select
              value={result}
              onChange={setResult}
              options={accOpt}
              placeholder="Select.."
              name="initial speed"
            />

          </Form.Group>


        </Form>
      </div> : null}

    </div>
  );
}

export default App;
