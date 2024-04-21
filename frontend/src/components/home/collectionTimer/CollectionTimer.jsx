import "./Collection.css"

export const CollectionTimer = () => {
    return(
        <section className="deal-timer d-flex align-items-center justify-content-center ">
        <div className="position-relative">
            <div className="dealtimer-bg">
                <img src="./img/dealtimerBg/deal_timer_bg.jpg" alt="dealtimer_bg"></img>
            </div>
            <div className="deal-timer-text container ps-4">
                <p className="position-relative text-uppercase fw-600 text-dash">DEAL OF THE WEEK
                </p>
                <h1 className="text-uppercase fw-400 h1">
                    <strong>SPRING</strong> COLLECTION
                </h1>
                <a href="#" className="btn btn-outlined">Discover More</a>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="container position-relative">
                    <div className="dealtimer-countdown d-flex align-items-center text-center js-countdown">
                        <div className="day countdown-unit me-4">
                            <span className="countdown-num d-block" style={{width : 35}}>10</span>
                            <span className="countdown-word text-secondary text-uppercase fw-600">Days</span>
                        </div>
                        <div className="hour countdown-unit me-4">
                            <span className="countdown-num d-block" style={{width : 35}}>12</span>
                            <span className="countdown-word text-secondary text-uppercase fw-600">Hours</span>
                        </div>
                        <div className="min countdown-unit me-4">
                            <span className="countdown-num d-block" style={{width : 35}}>25</span>
                            <span className="countdown-word text-secondary text-uppercase fw-600">Mins</span>
                        </div>
                        <div className="sec countdown-unit me-4">
                            <span className="countdown-num d-block" style={{width : 35}}>42</span>
                            <span className="countdown-word text-secondary text-uppercase fw-600">Sec</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}