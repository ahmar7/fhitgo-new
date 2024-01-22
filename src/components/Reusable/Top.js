import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const TopUp = () => {
  const routePath = useLocation();
  const onTopUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTopUp();
  }, [routePath]);

  return null;
};

export default TopUp;
