import React, { useState, useEffect } from "react";
import MedSpecBanner from "comps/MedSpecBanner";
import Info from "comps/Info";
import Button from "comps/Button";

import axios from "axios";
import styled from 'styled-components';
import { useParams, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// const Container = styled.div`
// .open {
//  display: none;
// }

// .open.open{
//   display: block;
// }
// `;

function Med({ onSelect, id, passid }) {
    // const [meds, setMeds] = useState([]);
    const [meds, setMeds] = useState({});
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(true);

    const params = useParams();
    console.log("PARAMS", params);

    const showPopup = () =>{
      setShow(true);
      console.log("clicked")
    }
  
    const getData = async () => {
      var resp = await axios.get("https://medtrack-midterm.herokuapp.com/api/meds/med_by_id/"+params.id);
      console.log("get data2222", resp);
      // if (id == 1){
        setMeds({...resp.data.result[0]});
        // setMeds(resp.data.meds)
        // setIds(resp.data.meds[0]);
      // }
    };
  
    const HandleClick = (id) =>{
      // setIds(id)    
        onSelect(id);
        console.log(id)
        // nextStep();
      }
  
    useEffect(() => {
      getData();
    }, []);
  
    const handleDelete = (dis) => {
  
    }
    return ( <div className="page">
        {/* {id == id ? meds.map((o, id) => (  */}
          <MedSpecBanner
          // key={id}
            medName={meds.name}
            dosage={meds.dos}
            unit={meds.unit}
            time={meds.time}
            onClick={() => {
            //   previousStep();
            }}
          />
         {/* )) : null}  */}
        {/* {meds.map((o) => ( */}
          <div className="container">
            <Info title="Reminders" subtext={meds.days+" "+meds.time+" Take"} dosage={meds.amt+" pills"} unit=""/>
            <Info title="Instructions"  subtext={meds.ins} dosage="" unit=""/>
          </div>
        {/* ))} */}
        <div className="buttons">
        {/* <Route exact path="/edit/:id"> */}
            <Link to={"/edit/"+id}>
            <Button
                text="Edit"
                onClick={() => {
                //   nextStep();
                }}
            />
            </Link>
            {/* </Route> */}
          <Button
            text="Delete Med"
            bgcolor={"#63AAC8"}  
            onClick={()=>{
              setOpen(!open);
              showPopup();
            }}
          />
        </div>
        <div className={open ? "open" : null}>
          {/* <Confirm  title="Are you sure?" subtitle="" imgurl="" text1="Delete" text2="Cancel"/>
          <Backdrop /> */}
        </div>
      </div>
 
    );
  };

  export default Med;