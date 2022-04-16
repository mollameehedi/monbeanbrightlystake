import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const DataCheack = ({ id }) => {
    const [sate, setSate] = useState([])

    useEffect(() => {
        axios.get(`https://moonbeam.brightlystake.com/api/moonbeam/getDelegators/${id}`)
            .then(response => setSate(response.data.data))
    }, [id])
    console.log(sate);
    return (
        <div>
            <div id="moonbeamStage" className="moonriver">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Click on each collator address for more details</h2>
                            <p>Updated every 5 minutes.</p>
                            <p className="last-line">
                                Updated as of block : <span>446812</span>{" "}
                            </p>
                        </div>

                        <div className="col-lg-12">
                            <div className="mobile-none">
                                <div className="table-head">
                                    <ul>
                                        <li className="two">Nominator</li>
                                        <li className="three">Amount</li>
                                        <li className="four">Current Round</li>
                                        <li className="five">Effective On</li>
                                        <li className="six">Status</li>
                                    </ul>
                                </div>
                                <Accordion defaultActiveKey="0">
                                    {sate.map((s, index) => (
                                        <Accordion.Item eventKey={index}>
                                            <Accordion.Header className="neibor">
                                                <ul>
                                                    <li className="two">{s.delegator }</li>
                                                    <li className="three">{s.amount }</li>
                                                    <li className="five">{s.currentRound }</li>
                                                    <li className="five">{s.applicable_round }</li>
                                                    <li className="six">{s.action }</li>
                                                </ul>
                                            </Accordion.Header>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>

                            </div>

                            <div className="disk-none mobile-block">
                                <Accordion defaultActiveKey="0">
                                {sate.map((s, index) => (
                                <Accordion.Item eventKey={index} className='collatorres'>
               <p className="collator-p1">colletor  <button type='button'className={(s.action  === 'revoke')? 'active-btn':'inactive-btn'}>{s.action }</button></p>
              <p className="collator-p3">Nominator</p>
              <p className="collator-p4">{s.delegator }</p> 
                    <ul className="left_content">
                      <li className="one">Amount</li>
                      <li className="two">Current Round</li>
                      <li className="five">Effective on</li>
                    </ul>
                    <ul className="right_content">
                      <li className="one">{s.amount }</li>
                      <li className="two">{s.currentRound }</li>
                      <li className="five">{s.applicable_round }</li>
                    </ul>
                    <div className="clr"></div>
                </Accordion.Item>
                 ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataCheack
