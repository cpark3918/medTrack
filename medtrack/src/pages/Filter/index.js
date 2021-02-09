import React, { useState, useEffect } from "react";
import BannerBack from "comps/BannerBack";
import Filter from "comps/Filter";
import ButtonBig from "comps/ButtonBig";
import BannerCancel from "comps/BannerCancel";
import BannerTime from "comps/BannerTime";
import FilterBy from "comps/FilterBy";
import Button from "comps/Button";
import MedInfoBox from "comps/MedInfoBox";

import StepWizard from "react-step-wizard";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Step1 = ({ nextStep, goToStep, onNext, previousStep }) => {
    //backend functions
    const [meds, setMeds] = useState([]);
    const [allmeds, setAll] = useState([]);
    const [cond, setCond] = useState(null);
  
    const getData = async () => {
      // var resp = await axios.get("http://localhost:8888/api/meds");
      var resp = await axios.get("https://medtrack-midterm.herokuapp.com/api/meds");
      console.log("get data", resp);
      setAll(resp.data.meds);
    };
    
    const FilterCond = (cond) => {
      setMeds(
        allmeds.filter((o) => {
          return o.cond.includes(cond)
        })
        )
      };
      
        useEffect(() => {
          getData();
        }, []);

    const handleSelect = (cond) => {
      setCond(cond);
      console.log(cond);
    }
      //end of backend functions

  return (
    <div>
      <BannerCancel text="Filter by" />
      <Filter onSelect={handleSelect} changeIcon1="false" />
      <Filter
        text1="Alzheimer’s"
        text2="Angina"
        text3="Arthritis"
        text4="Asthma"
        reMove="false"
        changeIcon2="false"
        onSelect={handleSelect}
        // onClick={()=>{
        //   handleSelect();
        // }}
      />
      <div className="bigButton">
        <ButtonBig 
        disable={cond === null}
        onClick={()=>{
          nextStep();
          onNext(cond);
        }}
        />
      </div>
    </div>
  );
};

const Step2 = ({ nextStep, goToStep, onNext, previousStep, cond }) => {
  const [meds, setMeds] = useState({});

  const getData = async () => {
    // var resp = await axios.get("http://localhost:8888/api/meds");
    var resp = await axios.get("https://medtrack-midterm.herokuapp.com/api/meds");
    console.log("get data", resp);
    if(cond == resp.data.meds.cond){
      setMeds({...resp.data.meds});
    }
    console.log("is this working", cond)
  };

  useEffect(() => {
    getData();
  }, []);

  return(
    <div className="page">
              <BannerTime />
              {/* <Link to="/Filter"> */}
                <FilterBy onClick={previousStep}/>
              {/* </Link> */}
              {/* {meds.map((o) => ( */}
                <MedInfoBox 
                medName="hello"
                dos={meds.dos}
                unit={meds.unit}
                amount={meds.amt}
                time={meds.time}
                onChange={(cond)=>{
                  FilterPage(cond)
                }}
                />
              {/* ))} */}
              <Link to="/add-med">
                <Button text="+ Add Med" />
              </Link>
              <Link to="/list-med" >
                <Button text="See All Meds" bgcolor={"#63AAC8"} />
              </Link>
            </div>
  )
}

export default function FilterPage() {
  const [filteroption, setFilteroption] = useState();
  const [cond, setCond] = useState("");
  
  return (
    <div className="page">
      <StepWizard>
        <Step1 onNext={(cond) => {
            // setData({filteroption: n});
            setCond(cond);
          }}/>
        <Step2 cond={cond}/>
      </StepWizard>
    </div>
  );
}


