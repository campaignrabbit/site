import styled, { css } from "styled-components"
import { FaSearch } from "react-icons/fa"

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
  padding: 20px 0;
`

export const SearchIcon = styled(FaSearch)`
  width: 3em;
  pointer-events: none;
  font-size: 1.5em;
`

const focussed = css`
  background: ${props => props.theme.white};
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 100%;
  + ${SearchIcon} {
    color: #6772e5;
  }
`

const collapse = css`
  width: 100%;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  + ${SearchIcon} {
    color: ${props => props.theme.white};
  }
  ${props => props.focussed && focussed}
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`

const expand = css`
  background: ${props => props.theme.veryLightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input`
  height: 3em;
  outline: none;
  border: none;
  font-size: 1.5em;
  background: transparent;
  transition: ${props => props.theme.shortTrans};
  border-radius: 4px;
  ${props => (props.collapse ? collapse : expand)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background: #fff;
`

const list = css`
  position: absolute;

  top: calc(100% + 0.5em);
  width: calc(4em + 40vw);
  max-width: 45em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 1.7em;
    padding-top: 1.7em;
    border-top: 1px solid #eeeeee;
  }
`

const grid = css`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-gap: 1em;
    li {
      padding: 0.3em 0.5em;
      background: ${props => props.theme.veryLightGray};
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  background: #fff;
  z-index: 9;
  ${props => (props.hitsAsGrid ? grid : list)};
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    text-align: left;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: #333333;
      background: ${props => props.theme.gray};
      padding: 0.1em 0;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
    a{
      color: #6772e5;
    }
  }
`

export const By = styled.span`
  font-size: 0.6em;
  text-align: end;
  padding: 0;
`
