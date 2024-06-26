import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const[countdown, setCountdown] = useState(10);
  const navigate = useNavigate();


  const timeoutIdRef = useRef(null);
  const stableNavigate = useCallback(() => navigate('/'), [navigate]);
  useEffect(() => {
    timeoutIdRef.current = setInterval(() => {
      setCountdown(preCount => {
        if (preCount === 1) {
          clearInterval(timeoutIdRef.current);
          stableNavigate();
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutIdRef.current);
  }, [stableNavigate]);

  return  <>
  
  <section className="notFound">
    <div className="container">
      <img src="/sandwich.png" alt="success" />
      <h1>Redirecting to Home in {countdown} seconds...</h1>
      <Link to={'/'}>Back to Home <HiOutlineArrowNarrowRight/></Link>
    </div>
  </section>
  </>;
};

export default Success;