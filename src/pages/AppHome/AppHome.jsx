import './appHome.css';
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo.jsx';
import Chart from '../../Components/Chart/Chart.jsx';


const AppHome = ({title,dataKey})  => {
    
    return (
        <div className="apphome">
            <FeaturedInfo />
             <Chart
                title={title}
                dataKey={dataKey}
            />          
        </div>
    )
}

export default AppHome; 
