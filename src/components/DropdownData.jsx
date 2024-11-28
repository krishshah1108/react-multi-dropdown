import React from "react";
import qnaData from "../assets/QnA";
import { useState } from "react";
import "../css/DropdownData.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DropdownData = () => {
  const [answerId, setAnswerId] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [multiIds , setMultiIds] = useState([])
  const showAnswer = (selectID) => {
    if(isButtonEnabled){
        let oldIDs = [...multiIds];
        const index = oldIDs.indexOf(selectID);
        index > -1 ? oldIDs.splice(index, 1) : oldIDs.push(selectID);
        setMultiIds(oldIDs);
        console.log(multiIds);
    }else{
        setAnswerId(selectID === answerId ? null : selectID);
    }
  };
  return (
    <div className='container'>
      <div className='btn-div'>
        <button onClick={() => setIsButtonEnabled(!isButtonEnabled)}>
          {isButtonEnabled ? "Disable Now" : "Enable Now"}
        </button>
      </div>
      {qnaData.map((dataItem) => {
        return (
          <div
            onClick={() => showAnswer(dataItem.id)}
            className='question-row'
            key={dataItem.id}
          >
            <div className='question'>
              {dataItem.question}
              <span>
                {!isButtonEnabled ?( answerId === dataItem.id ?<FaChevronUp /> : <FaChevronDown />) : (multiIds.includes(dataItem.id) ? <FaChevronUp /> : <FaChevronDown />)}
              </span>
            </div>
            <div className='answer-row'>
              {!isButtonEnabled? (answerId === dataItem.id ? <>{dataItem.answer}</> : null) : (multiIds.includes(dataItem.id) ? <>{dataItem.answer}</> : null)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownData;
