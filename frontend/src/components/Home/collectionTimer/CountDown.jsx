import { useEffect, useState } from "react";

export const CountDown = ({ targetDate }) => {

    const [timeLeft, setTimeLeft] = useState({});

    const calculateTimeLeft = (targetDate) => {
        const difference = +new Date(targetDate) - +new Date();

        if (difference > 0) {
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)) < 10 ? `0${Math.floor(difference / (1000 * 60 * 60 * 24))}` : Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24) < 10 ? `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}` : Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60) < 10 ? `0${Math.floor((difference / 1000 / 60) % 60)}` : Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60) < 10 ? `0${Math.floor((difference / 1000) % 60)}` : Math.floor((difference / 1000) % 60)
            });
        } else {
            setTimeLeft({
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00"
            });
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft.days === "00" && timeLeft.hours === "00" && timeLeft.minutes === "00" && timeLeft.seconds === "00") {
                clearTimeout(timer);
            } else {
                calculateTimeLeft(targetDate);
            }

        }, 1000);


        return () => clearTimeout(timer);
    });

    return (
        <div className="dealtimer-countdown d-flex align-items-center text-center js-countdown">
            <div className="day countdown-unit me-4">
                <span className="countdown-num d-block" style={{ width: 35 }}>{timeLeft.days}</span>
                <span className="countdown-word text-secondary text-uppercase fw-600">Days</span>
            </div>
            <div className="hour countdown-unit me-4">
                <span className="countdown-num d-block" style={{ width: 35 }}>{timeLeft.hours}</span>
                <span className="countdown-word text-secondary text-uppercase fw-600">Hours</span>
            </div>
            <div className="min countdown-unit me-4">
                <span className="countdown-num d-block" style={{ width: 35 }}>{timeLeft.minutes}</span>
                <span className="countdown-word text-secondary text-uppercase fw-600">Mins</span>
            </div>
            <div className="sec countdown-unit me-4">
                <span className="countdown-num d-block" style={{ width: 35 }}>{timeLeft.seconds}</span>
                <span className="countdown-word text-secondary text-uppercase fw-600">Sec</span>
            </div>
        </div>
    );
}


