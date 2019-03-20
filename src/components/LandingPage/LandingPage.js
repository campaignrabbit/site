import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
`;

const Image = styled.img`
  display: block;
  max-width: 500px;
  width: 100%;
  height: auto;
  margin: auto;
`;

const Content = styled.div`
  display: block;
  padding: 20px;
`;

const H3 = styled.h3`
  color: #333333;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 18px;
`;

const Center = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left right";
  align-items: center;
  padding: 40px 0;

  & > ${Image}, &:nth-of-type(even) > ${Content} {
    grid-area: left;
  }

  & > ${Content}, &:nth-of-type(even) > ${Image} {
    grid-area: right;
  }
  @media(max-width: 768px) {
    display: block;
  }
`;

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  static renderCallouts(callouts) {
      return callouts.map((card, index) => {
          const cardClass = `col-md-3`;
          if(index == 2 || index == 5){
            return (
                <Center key={card.TITLE} className="center">
                  <Image src={card.IMAGE}  />
                  <Content>
                    <H3>{card.TITLE}</H3>
                    <P>{card.COPY}</P>
                  </Content>
                </Center>
            );
          } else{
            return (
                <Box key={card.TITLE} className="">
                  <Image src={card.IMAGE}  />
                  <Content>
                    <H3>{card.TITLE}</H3>
                    <P>{card.COPY}</P>
                  </Content>
                </Box>
            );
          }
      });
  }
  render() {
    return (
        <Inner>
          {LandingPage.renderCallouts(this.props.callouts)}
        </Inner>
    );
  }
}

LandingPage.propTypes = {

};

export default LandingPage;
