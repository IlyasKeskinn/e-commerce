import { CountDown } from './CountDown'
import useFetch from '../../../hooks/useFetch';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import "./Collection.css"

export const CollectionTimer = () => {
    const fetchUrl = `/collection/get_deal_collection/`;
    const { data, isLoading, error } = useFetch(fetchUrl);

    if (isLoading) {
        return (
            <section className="deal-timer d-flex align-items-center justify-content-center ">
                <Skeleton variant="rectangular" width={"100%"} height={"450px"} />
            </section>
        );
    }

    if (error || !data || data.length <= 0) {
        return (
            <div className="error-screen">
                <p>Oops! Something went wrong.</p>
            </div>
        );
    }

    return (
        <section className="deal-timer d-flex align-items-center justify-content-center ">
            <div className="position-relative">
                <div className="dealtimer-bg">
                    <img src={`../src/images/${data[0].img}`} alt="dealtimer_bg"></img>
                </div>
                <div className="deal-timer-text container ps-4">
                    <p className="position-relative text-uppercase fw-600 text-dash">{data[0].topic}</p>
                    <h1 className="text-uppercase fw-400 h1">
                        <strong>{data[0].title}</strong> COLLECTION
                    </h1>
                    <Link to={`${data[0].collection_url}`} className="btn btn-outlined">Discover More</Link>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="container position-relative">
                        <CountDown targetDate={data[0].date} />
                    </div>
                </div>
            </div>
        </section>

    );
}
