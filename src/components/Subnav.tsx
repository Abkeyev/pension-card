import React from "react";
import "./Subnav.css";
import { Link } from "react-router-dom";
import { BccButton } from "./BccComponents";

const Subnav = () => {
  return (
    <div className="sub-nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-left">
            <ul>
              <li>
                <Link to="/">Частным лицам</Link>
              </li>
              <li>
                <Link to="/business">Бизнес клиентам</Link>
              </li>
              <li>
                <Link to="/p2p">P2P переводы</Link>
              </li>
              <li>
                <Link to="/oandb">Офисы и банкоматы</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <BccButton variant="outlined" size="small" color="secondary">
              Заказать карту
            </BccButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subnav;
