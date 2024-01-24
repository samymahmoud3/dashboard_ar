import { useState } from "react";
import './stats.scss';

const Stats = (prop) => {
  const { data } = prop;

  const [active, setActive] = useState(false);
  const [select, setSelect] = useState(data[0].time[0]);

  return (
    <div className="stats">
      <div className="stats-head">
        <div className="title">
          <img src={ data[0].icon } alt={ data[0].title } />
          <span>{ data[0].title }</span>
        </div>
          <div className="dropdown-select">
            <div className="dropdown">
              <div className="dropdown-btn" onClick={ (e) => { setActive(!active); e.preventDefault(); } }>
                <span>{ select }</span>
                <img src="/arrow-down.svg" alt="arrow down" />
              </div>
              {
                active &&
                <div className="dropdown-content">
                  {
                    data[0].time.map((item, index) => (
                      <div className="dropdown-item"
                        key={ index }
                        onClick={ (e) => {
                          setSelect(item);
                          setActive(false);
                          e.preventDefault();
                        } }
                      >
                        { item }
                      </div>
                    ))
                  }
                </div>
              }
            </div>
          </div>
      </div>
      <div className="stats-numbers">
        { data[0].numbers.map((item, index) => (
          <div className="stats-item" key={ index }>
            <p className="title" style={ { color: item.titleColor } }>{ item.title }</p>
            <p className="number" style={ { color: item.numberColor } }>{ item.number }</p>
          </div>
        )) }
      </div>
    </div>
  )
};

export default Stats;