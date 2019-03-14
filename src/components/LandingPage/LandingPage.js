import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import CALLOUTS from '../../constants/homeCallouts';

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
`;

const Image = styled.img`
  display: block;
`;

const Content = styled.div`
  display: block;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left right";

  & > ${Image}, &:nth-of-type(even) > ${Content} {
    grid-area: left;
  }

  & > ${Content}, &:nth-of-type(even) > ${Image} {
    grid-area: right;
  }
`;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {

  }
  static renderCallouts() {
      return CALLOUTS.map((card) => {
          const cardClass = `col-md-3`;
          return (
              <Box key={card.TITLE}>
                <Image src={card.IMAGE} />
                <Content>{card.COPY}</Content>
              </Box>
          );
      });
  }
  render() {
    return (
        <Inner>
          {LandingPage.renderCallouts()}
        </Inner>
    );
  }
}

LandingPage.propTypes = {

};

export default LandingPage;
