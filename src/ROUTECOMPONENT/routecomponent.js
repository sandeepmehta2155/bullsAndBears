import { Routes, Route } from "react-router-dom";
import { FMCG } from "../FMCG/fmcg";
import { Home } from "../HOME/home";
import { OGINDUSTRIAL } from "../OGIND/ogind";
import { BANKINGANDFIN } from "../BANKANDFINANCE/bankandfin";
import { INFOANDTECH } from "../INFOANDTECH/infoandtech";
import { CHEMICAL } from "../CHEMICAL/chemical";
import { PAINTS } from "../PAINTS/paints";
import { OTHERS } from "../OTHERS/others";

export const RouteComponents = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fmcg" element={<FMCG />} />
        <Route path="/ogind" element={<OGINDUSTRIAL />} />
        <Route path="/bankandfin" element={<BANKINGANDFIN />} />
        <Route path="/infoandtech" element={<INFOANDTECH />} />
        <Route path="/chemical" element={<CHEMICAL />} />
        <Route path="/paints" element={<PAINTS />} />
        <Route path="/others" element={<OTHERS />} />
      </Routes>
    </>
  );
};
