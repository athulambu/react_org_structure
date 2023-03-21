import React from 'react';
import "./organisation.css";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const EmpData = () => {
  return (
    <div className="tree">
      <ul>
        <li>
          <div>
            <AccountCircleIcon className="img"/>
            <span>Seth Williams</span>
            <label>Managing Director</label>
          </div>
          <ul>
            <li>
              <div>
                <AccountCircleIcon className="img" />
                <span>Dave Cooper</span>
                <label>Regional Director</label>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <span className="country">Brazil</span>
              {/* icon */}
              <ul>
                <li>
                  <div>
                    <AccountCircleIcon className="img"/>
                    <span>Ramon Harris</span>
                    <label>Regional Director</label>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <AccountCircleIcon className="img"/>
                        <span>Janet Parks</span>
                        <label>CEO</label>
                        <span className="retail"><ShoppingCartIcon style={{fontSize: "10px"}}/> Retail</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <AccountCircleIcon className="img"/>
                        <span>Isabelle Kaif</span>
                        <label>CFO</label>
                        <span className="retail"><ShoppingCartIcon style={{fontSize: "10px"}}/> Retail</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span className="country">USA</span>
              {/* icon */}
              <ul>
                <li>
                  <div>
                    <AccountCircleIcon className="img"/>
                    <span>Dan Morgan</span>
                    <label>Regional Director</label>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <AccountCircleIcon className="img"/>
                        <span>Ivan Toney</span>
                        <label>CEO</label>
                        <span className="retail"><ShoppingCartIcon style={{fontSize: "10px"}}/> Retail</span>
                      </div>
                      <ul>
                        <li>
                          <div>
                            <AccountCircleIcon className="img"/>
                            <span>Brian Walker</span>
                            <label>Sales Manager</label>
                          </div>
                        </li>
                        <li>
                          <div>
                            <AccountCircleIcon className="img"/>
                            <span>Vera Martinez</span>
                            <label>Delivery Manager</label>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div>
                        <AccountCircleIcon className="img"/>
                        <span>Sabrina Francis</span>
                        <label>CFO</label>
                        <span className="retail"><ShoppingCartIcon style={{fontSize: "10px"}}/> Retail</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span className="country">Italy</span>
              {/* icon */}
              <ul>
                <li>
                  <div>
                    <AccountCircleIcon className="img"/>
                    <span>Stella Nelson</span>
                    <label>Regional Director</label>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <AccountCircleIcon className="img"/>
                        <span>Miles Clark</span>
                        <label>Chief Administrator</label>
                        <span className="retail"><ShoppingCartIcon style={{fontSize: "10px"}}/> Retail</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <AccountCircleIcon className="img"/>
                        <span>Angela Howard</span>
                        <label>Chief Administrator</label>
                        <span className="retail"><ShoppingCartIcon style={{fontSize: "10px"}}/> Retail</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  )
}

export default EmpData
