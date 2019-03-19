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
  padding: 20px 0;

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

class CenterBlock extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  render() {
    return (
        <Inner>
          <Center key={this.props.title} className="center">
            <Content>
              <H3>{this.props.title}</H3>
              <P>{this.props.description}</P>
            </Content>
          </Center>
        </Inner>
    );
  }
}

CenterBlock.propTypes = {

};

export default CenterBlock;
