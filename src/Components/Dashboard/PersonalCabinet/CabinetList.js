import React, { useEffect } from "react";
import { connect } from "react-redux";
import CabinetCard from "./CabinetCard";
import {
  GetCabinet,
  RemoveCabinetStrain
} from "../../../Actions/ActionCreator";

const PersonalCabinet = ({ GetCabinet, strains, RemoveCabinetStrain }) => {
  useEffect(() => {
    GetCabinet();
  }, []);
  if (strains) {
    return (
      <>
        <h2 className="cab-head">Personal Cabinet</h2>
        <div className="cabinet-list">
          {strains.map(e => (
            <CabinetCard
              strain={e}
              key={e.strain_id}
              remove={RemoveCabinetStrain}
            />
          ))}
        </div>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
};

const mapStateToProps = state => {
  return {
    strains: state.strains
  };
};
export default connect(mapStateToProps, { GetCabinet, RemoveCabinetStrain })(
  PersonalCabinet
);