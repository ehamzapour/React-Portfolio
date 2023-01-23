import { useEffect, useState } from "react";
import React from "react";
import './portfolio.scss';
import { frontendPortfolio, backendPortfolio, fullstackPortfolio } from '../../index';

function Portfolio() {
    
    const [selected, setSelected] = useState('frontend');
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'frontend',
            title: 'Frontend',
        },
        {
            id: 'backend',
            title: 'Backend',
        },
        {
            id: 'fullstack',
            title: 'Fullstack',
        },
    ];

    useEffect(() => {

        switch (selected) {
           case 'frontend':
             setData(frontendPortfolio);
            break;

            case 'backend':
                setData(backendPortfolio);
                break;

            case 'fullstack':
                setData(fullstackPortfolio);
                break;

            default:
                setData(frontendPortfolio);
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <portfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <a href={d.url}>
                            <img src={d.img} alt={d.title}/>
                        </a>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;