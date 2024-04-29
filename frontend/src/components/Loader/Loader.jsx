import "./Loader.css"
import { Spin } from 'antd';



export const Loader =({}) => {
    return(
        <div className={`loader`}>
            <Spin/>
        </div>
    );
}