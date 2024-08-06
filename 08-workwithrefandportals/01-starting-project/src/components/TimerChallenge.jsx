import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}){
    const dialog = useRef();
    const timer = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart(){
        timer.current = setInterval(() =>{
            setTimeRemaining(prevTimeRem => prevTimeRem - 10)
        }, 10);
    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
        //  setTimeRemaining(targetTime * 1000);
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    return <>
        <ResultModal remainingTime={timeRemaining} targetTime={targetTime} ref={dialog} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={ isTimerActive ? handleStop : handleStart}>
                    {isTimerActive ? "Stop Challenge" : "Start Challenge"}
                </button>
            </p>
            <p className={isTimerActive ? 'active' : ''}>
                {isTimerActive ? "Time is Running..." : "Timer Inactive"}
            </p>
        </section>
    </>
}