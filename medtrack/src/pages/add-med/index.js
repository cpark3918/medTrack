import React, { useState, useEffect } from "react";
import BannerCancel from "comps/BannerCancel";
import Options from "comps/Options";
import ButtonBig from "comps/ButtonBig";
import BannerBack from "comps/BannerBack";
import InputMed from "comps/Input/medInfo";
import InputAmount from "comps/Input/doseAmount";
import HowOftenInput from "comps/Input/howoften";
import Input from "comps/Input/time";
import OverviewLine from "comps/OverviewTime";
import OverviewOften from "comps/OverviewOften";
import OverviewTime from "comps/OverviewTime";
import Breadcrumb from "comps/Breadcrumb";
import Confirm from "comps/Confirm";
import Backdrop from "comps/Backdrop";

import { useHistory, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import StepWizard from "react-step-wizard";
import axios from "axios";

// const medsData = require("../../../src/meds.json");

const Step1 = ({ nextStep, goToStep, onNext, previousStep, addMedData }) => {
  const [cond, setCond] = useState(null);

  // const addMedData = async () => {
  //   var resp = await axios.post("https://medtrack-midterm.herokuapp.com/api/meds", {
  //   cond: cond
  //   })
  // console.log(resp.data)};

  return (
    <div className="addMed">
      <BannerCancel
        onClick={() => {goToStep();
          // previous page - route?
        }}
        text="medical conditions"
      />
      <div className="breadcrumb">
        {/* <Breadcrumb /> */}
        <h6>1/8</h6>
      </div>
      <h6 className="addMed_title">medical conditions</h6>
      <div className="content">
        <Options onClick={() => setCond("alzheimer's")} />
        <Options text="angina" onClick={() => setCond("angina")} />
        <Options text="arthritis" onClick={() => setCond("arthritis")} />
        <Options text="asthma" onClick={() => setCond("asthma")} />
        <Options text="dementia" onClick={() => setCond("dementia")} />
        <Options text="diabetes" onClick={() => setCond("diabetes")} />
        <Options text="epilepsy" onClick={() => setCond("epilepsy")} />
        <Options text="high blood pressure" onClick={() => setCond("high blood pressure")}/>
        <Options text="hypertension" onClick={() => setCond("hypertension")} />
      </div>
      <div className="bigButton">
        <ButtonBig
          text="next"
          disable={cond === null}
          onClick={() => {
            nextStep();
            onNext(cond);
          }}
        />
      </div>
    </div>
  );
};

const Step2 = ({ nextStep, goToStep, onNext, previousStep }) => {
  const [name, setName] = useState(null);

  // const addMedData = async () => {
  //   var resp = await axios.post("https://medtrack-midterm.herokuapp.com/api/meds", {
  //   name: name
  //   })
  // console.log(resp.data)};

  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="add medicine" />
      <div className="breadcrumb">
        <h6>2/8</h6>
      </div>
      <InputMed
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="bigButton">
        <ButtonBig
          disable={name === null}
          onClick={() => {
            nextStep();
            onNext(name);
            // addMedData()
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step3 = ({ nextStep, goToStep, onNext, previousStep }) => {
  const [dos, setDos] = useState(null);
  const [unit, setUnit] = useState(null);

  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="add dosage" />
      <div className="breadcrumb">
        <h6>3/8</h6>
      </div>
      <InputAmount
        onChange={(e) => {
          setDos(e.target.value);
        }}
      />
      <h6 className="addMed_title">in what unit?</h6>
      <Options
        text="mg"
        textTransform="lowercase"
        onClick={() => setUnit("mg")}
      />
      <Options
        text="iu"
        textTransform="uppercase"
        onClick={() => setUnit("iu")}
      />
      <Options
        text="mcg"
        textTransform="lowercase"
        onClick={() => setUnit("mcg")}
      />
      <Options
        text="mL"
        textTransform="lowercase"
        onClick={() => setUnit("ml")}
      />
      <Options
        text="Number of Pills"
        textTransform="lowercase"
        onClick={() => setUnit("num-pills")}
      />
      <div className="bigButton">
        <ButtonBig
          disable={dos === null || unit === null}
          onClick={() => {
            nextStep();
            onNext(dos, unit);
          }}
          text="next"
        />
      </div>
    </div>
  );
};

// const Step4 = ({ nextStep, goToStep, onNext, previousStep }) => {
//   return (
//     <div className="addMed">
//       <BannerBack onClick={previousStep} text="frequency" />
//       <div className="breadcrumb">
//         <h6>4/9</h6>
//       </div>
//       <h6 className="addMed_title">frequency</h6>
//       <Options
//         text="every day"
//         onClick={() => {
//           goToStep(7);
//         }}
//       />
//       <Options
//         text="days interval"
//         onClick={() => {
//           goToStep(6);
//         }}
//       />
//       <Options
//         text="specific days"
//         onClick={() => {
//           goToStep(5);
//         }}
//       />
//     </div>
//   );
// };

// const Step6 = ({ nextStep, goToStep, onNext, previousStep }) => {
//   return (
//     <div className="addMed_info">
//       <BannerBack onClick={previousStep} text="How Often?" />
//       <div className="breadcrumb">
//         <h6>5/9</h6>
//       </div>
//       <HowOftenInput />

//       <div className="bigButton">
//         <ButtonBig
//           onClick={() => {
//             nextStep();
//           }}
//           text="next"
//         />
//       </div>
//     </div>
//   );
// };

const Step4 = ({ nextStep, goToStep, onNext, previousStep }) => {
  const [days, setDays] = useState([]);
  const [status, setStatus] = useState(true);


  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="which days" />
      <div className="breadcrumb">
        <h6>4/8</h6>
      </div>
      <h6 className="addMed_title">frequency</h6>
      <Options
        text="sunday"
        onClick={() => {
          // setStatus(!status);
          // if (status == true){
          //   setDays([...days, "sun"])
          // } else {
          //   days.splice(days.indexOf("sun"),1);
          //   setDays([...days]);
          // }
          var ind = days.indexOf("sun");
          if (ind !== -1) {
            days.splice(ind, 1);
            setDays([...days]);
          } else {
            setDays([...days, "sun"]);
          }
        }}
      />
      <Options
        text="monday"
        onClick={() => {
          var ind = days.indexOf("mon");
          if (ind !== -1) {
            days.splice(ind, 1);
            setDays([...days]);
          } else {
            setDays([...days, "mon"]);
          }
        }}
      />
      <Options
        text="tuesday"
        onClick={() => {
          var ind = days.indexOf("tues");
          if (ind !== -1) {
            days.splice(ind, 1);
            setDays([...days]);
          } else {
            setDays([...days, "tues"]);
          }
        }}
      />
      <Options
        text="wednesday"
        onClick={() => {
          var ind = days.indexOf("wed");
          if (ind !== -1) {
            days.splice(ind, 1);
            setDays([...days]);
          } else {
            setDays([...days, "wed"]);
          }
        }}
      />
      <Options
        text="thursday"
        onClick={() => {
          var ind = days.indexOf("thurs");
          if (ind !== -1) {
            days.splice(ind, 1);
            setDays([...days]);
          } else {
            setDays([...days, "thurs"]);
          }
        }}
      />
      <Options
        text="friday"
        onClick={() => {
          var ind = days.indexOf("fri");
          if (ind !== -1) {
            days.splice(ind, 1);
            setDays([...days]);
          } else {
            setDays([...days, "fri"]);
          }
        }}
      />
      <Options
        text="saturday"
        onClick={() => {
          var ind = days.indexOf("sat");
          if (ind !== -1) {
            days.splice(ind, 1);
            setDays([...days]);
          } else {
            setDays([...days, "sat"]);
          }
        }}
      />
      <div className="bigButton">
        <ButtonBig
          disable={days.length === 0}
          onClick={() => {
            nextStep();
            onNext(days);
            // console.log(days)
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step5 = ({ nextStep, goToStep, onNext, previousStep }) => {
  const [timesaday, setTimesaday] = useState(null);

  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="Times a Day" />
      <div className="breadcrumb">
        <h6>5/8</h6>
      </div>
      <h6 className="addMed_title">How many times a day?</h6>
      <Options
        text="1"
        onClick={() => {
          setTimesaday(1);
        }}
      />
      <Options
        text="2"
        onClick={() => {
          setTimesaday(2);
        }}
      />
      <Options
        text="3"
        onClick={() => {
          setTimesaday(3);
        }}
      />
      <Options
        text="4"
        onClick={() => {
          setTimesaday(4);
        }}
      />
      <Options
        text="5"
        onClick={() => {
          setTimesaday(5);
        }}
      />
      <div className="bigButton">
        <ButtonBig
          disable={timesaday === null}
          onClick={() => {
            nextStep();
            onNext(timesaday);
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step6 = ({ nextStep, goToStep, onNext, previousStep }) => {
  const [ins, setIns] = useState(null);

  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="Instructions" />
      <div className="breadcrumb">
        <h6>6/8</h6>
      </div>
      <h6 className="addMed_title">Take your med:</h6>
      <Options
        text="Before Food"
        onClick={() => {
          setIns("before-food");
        }}
      />
      <Options
        text="With Food"
        onClick={() => {
          setIns("with-food");
        }}
      />
      <Options
        text="After Food"
        onClick={() => {
          setIns("after-food");
        }}
      />
      <Options
        text="No Food Instructions"
        onClick={() => {
          setIns("no-food");
        }}
      />
      <div className="bigButton">
        <ButtonBig
          disable={ins === null}
          onClick={() => {
            nextStep();
            onNext(ins);
          }}
          text="next"
        />
      </div>
    </div>
  );
};

const Step7 = ({ nextStep, goToStep, onNext, previousStep, addData }) => {
  const [time, setTime] = useState(null);
  const [amt, setAmt] = useState(null);

  return (
    <div className="addMed">
      <BannerBack onClick={previousStep} text="time &amp; dose" />
      <div className="breadcrumb">
        <h6>7/8</h6>
      </div>
      <h6 className="addMed_title">time</h6>
      <Input
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <InputAmount
        onChange={(e) => {
          setAmt(e.target.value);
        }}
      />
      <div className="bigButton">
        <ButtonBig
          disable={time === null || amt === null}
          onClick={() => {
            onNext(time, amt);
            // console.log(time, amt)
            nextStep();
          }}
          text="save"
        />
      </div>
    </div>
  );
};

const Step8 = ({ nextStep, goToStep, onNext, previousStep, addData}) => {

  return (
     <div className="page_popup">
        <Confirm onTop={()=>{
          if(addData()){
            nextStep();
          }
        }} 
        onBottom={previousStep}
        title="Add Medication" 
        imgurl=""
        subtitle="" 
        text1="Add Med"
        text2="Cancel"
        top="15vh"/>
        <Backdrop />
      </div>
  );
};

const Step9 = ({name}) => {

  const history = useHistory();

  return (
     <div className="page_popup">
        <Confirm onTop={()=>{
          history.push("/");
        }} 
        onBottom={()=>{
          history.push("/list-med")
        }} 
        title={name}
        subtitle="was added successfully" 
        text2="See All Meds"
        top="15vh"/>
        <Backdrop />
      </div>
  );
};


export default function AddMed() {
  const [data, setData] = useState({
    cond: null,
    name: null,
    unit: null,
    dos: null,
    timesaday: null,
    days: null,
    ins: null,
    time: null,
    amt: null,
    taken: false,
  });

  console.log(data)

  const addMedData = async (c, n, d, u, days, i, t, a) => {
    var resp = await axios.post("https://medtrack-midterm.herokuapp.com/api/meds/", {
      name: data.name,
      cond: data.cond,
      dosage: data.dos,
      unit: data.unit,
      days: data.days,
      ins: data.ins,
      time: data.time,
      amt: data.amt
      // data
    });
    //checking array status
    console.log("posted",resp.data);
  };

  return (
    <div>
      <StepWizard>
        <Step1
          onNext={(c) => {
            setData({
              ...data,
              cond: c,
            });
          }}
          // addMedData={addMedData}
        />
        <Step2
          onNext={(n) => {
            setData({
              ...data,
              name: n,
            });
          }}
        />
        <Step3
          onNext={(d, u) => {
            setData({
              ...data,
              dos: d,
              unit: u,
            });
          }}
        />
        <Step4
          onNext={(days) => {
            setData({
              ...data,
              days: days,
            });
          }}
        />
        <Step5
          onNext={(t) => {
            setData({
              ...data,
              timesaday: t,
            });
          }}
        />
        <Step6
          onNext={(i) => {
            setData({
              ...data,
              ins: i,
            });
          }}
        />
        <Step7
          onNext={(t, a) => {
            setData({
              ...data,
              time: t,
              amt: a
            });
          }}
        />
        <Step8 
        addData={addMedData}
        /> 
        <Step9 
        name={data.name}/>
        {/* <Step10 /> */}
      </StepWizard>
    </div>
  );
}
