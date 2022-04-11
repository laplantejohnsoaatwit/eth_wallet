import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./TransactionElements";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-responsive-list";
import "./index.css";
const TransactionSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Transactions</TopLine>
                <Heading lightText={lightText}>
                  Check your last transfers
                </Heading>
                <BtnWrap>
                  <Button
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <Table breakPoint={700} style={{ color: "black" }}>
                <Thead>
                  <Tr style={{ color: "black" }}>
                    <Th>Recipient</Th>
                    <Th>Amount</Th>
                    <Th>Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0xfF306068B86bB4a0E595965aa654bcA18EDe39F1</Td>
                    <Td>102.02ETH</Td>
                    <Td>4/2/2021</Td>
                  </Tr>
                  <Tr>
                    <Td>0xfF306068B86bB4a0E595965aa654bcA18EDe39F1</Td>
                    <Td>2.4ETH</Td>
                    <Td>4/2/2021</Td>
                  </Tr>
                  <Tr>
                    <Td>0xfF306068B86bB4a0E595965aa654bcA18EDe39F1</Td>
                    <Td>0.001ETH</Td>
                    <Td>12/12/2021</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default TransactionSection;
