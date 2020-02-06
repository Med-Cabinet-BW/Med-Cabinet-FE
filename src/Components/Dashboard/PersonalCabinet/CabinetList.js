import React, { useEffect } from "react";
import { connect } from "react-redux";
import CabinetCard from "./CabinetCard";
import { GetCabinet, RemoveCabinetStrain } from "../../../Actions/ActionCreator";
import Header from "../Header";
import styled from "styled-components";

const MyCabinetContainer= styled.div`
  background: white;

  h2 {
    margin-top: 64px;
    margin-bottom: 32px;
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    text-align: center;
  }

  .my-cabinet-container {
    width: 1024px;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;
    display: flex;
    flex-wrap: wrap;

    a {
      margin-right: 32px;
      margin-bottom: 32px;
      text-decoration: none;
  
      .strain-card {
        height: 350px;
        width: 320px;
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.25s;
  
        img {
          width: 128px;
          margin-bottom: 16px;
        }
  
        .name {
          margin-bottom: 4px;
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
        }
  
        .race {
          // padding: 0 12px;
          // border: 1px solid lightgray;
          // border-radius: 9999px;
          font-size: 1rem;
          font-weight: 500;
          color: #333;
        }
  
        :hover {
          box-shadow: none;
        }
      }
    }
  
    a:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

const PersonalCabinet = ({ GetCabinet, strains, RemoveCabinetStrain }) => {
  useEffect(() => {
    GetCabinet();
  }, []);
  
  if (strains) {
    return (
      <>
        <Header />
        <MyCabinetContainer>
          <h2>Personal Cabinet</h2>
          <div className="my-cabinet-container">
            {strains.map(e => (
              <CabinetCard
                strain={e}
                key={e.strain_id}
               
              />
            ))}
          </div>
          <h2>Recommended Strains</h2>
        </MyCabinetContainer>
      </>
    );
  } else {
    return <p>Loading...</p>;
  };
};

const mapStateToProps = state => {
  return {
    strains: state.strains
  };
};
export default connect(mapStateToProps, { GetCabinet, RemoveCabinetStrain })(
  PersonalCabinet
);
