import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as ActionCreator from '../../../Actions/ActionCreator';
import Header from '../Header';
import styled from 'styled-components';
import hybrid from '../../../img/hybrid.png';
import indica from '../../../img/indica.png';
import sativa from '../../../img/sativa.png';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../../../Utils/axiosWithAuth';


const SearchCardContainer = styled.div`
  .search-card-container {
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;
    width: 1024px;

    .first-section {
      height: 320px;
      border-bottom: 2px solid lightgray;
      display: flex;

      .image {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 192px;
        }
      }

      .information {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .race {
          font-size: 0.875rem;
          font-weight: 500;
          color: #333;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #333;
        }

        .rating {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
        }

        .terpenes {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
        }
      }
    }

    h3 {
      margin-top: 32px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #333;
    }

    .description {
      margin-top: 4px;
      font-size: 1rem;
      font-weight: 500;
      color: #333;
    }
  }
`;

const SearchCard = ( props ) => {
  // req.params.id to get id from url and make api call in use effect
  const { id } = useParams();
  const [strain, setStrain]=useState({});
  useEffect (()=>{
    axiosWithAuth().get(`https://bestbudapp.herokuapp.com/api/strains/${id}` )
    .then(response => {
      console.log(response.data)
    })
  },[id]);
  // commenting out for now
  // const onEdit = e => {
  //   e.preventDefault();
  //   startEditSearch(Search.id);
  // };

  // const onDelete = e => {
  //   e.preventDefault();
  //   deleteSearch(Search.id);
  // };

  return (
    <SearchCardContainer>
      <Header/>

      {/* go back button */}

      <div className='search-card-container'>

        <div className='first-section'>
          <div className='image'>
            <img src={sativa} alt='sativa'/>
          </div>
          <div className='information'>
            <p className='race'>sativa</p>
            <h2>Sour Diesel</h2>
            <p className='rating'>4.3 stars</p>
            <p className='terpenes'>Terpenes: peppery, citrus, herbal</p>
          </div>
        </div>

        <h3>Description</h3>
        <p className='description'>Sour Diesel, sometimes called Sour D, is an invigorating sativa-dominant strain named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients. This strain took root in the early '90s, and it is believed to have descended from Chemdog 91 and Super Skunk.</p>

        <h3>Effects</h3>
        <p className='description'>Positive, negative, and medical</p>
        
        <h3>Reviews</h3>
        <p className='description'>Reviews coming soon...</p>
        {/* stretch */}

        <h3>Dosing</h3>
        <p className='description'>For information on dosing, we recommend reading this <a href='https://www.leafly.com/news/health/a-physicians-perspective-on-optimal-cannabis-dosing'>article</a>.</p>
        
        <h3>Intake Methods</h3>
        <p className='description'>For information on different intake methods, we recommend reading this <a href='https://www.leafly.com/news/cannabis-101/the-complete-list-of-cannabis-delivery-methods'>article</a>.</p>

        {/* <h3>Intake Schedule</h3>
        blog post or article on this topic or something else */}

        <h3>Dispensaries Nearby</h3>
        <p className='description'>This strain is not available near you.</p>
        {/* stretch */}
      </div>
    </SearchCardContainer>
  );
};
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, ActionCreator)(SearchCard);
