import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ButtonElements";
import Web3 from "web3";
import DaiTokenMock from "../../abis/DaiTokenMock.json";
import { Link, useNavigate } from "react-router-dom";

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
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./TransferElements";

const TransferSection = ({
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

  const [account, setAccount] = useState("");
  const [tokenMock, setTokenMock] = useState("");
  const [balances, setBalance] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const [error, setError] = useState("");
  const recipientRef = useRef();
  const amountRef = useRef();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }

    async function loadBlockchainData() {
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      setAccount(accounts[0]);

      if (account) {
        const daiTokenAddress = "0x6869b3529bb3cA3055EEf9280Ed7E4279c40B2E8"; // Replace DAI Address Here
        const daiTokenMock = new web3.eth.Contract(
          DaiTokenMock.abi,
          daiTokenAddress
        );
        setTokenMock(daiTokenMock);
        const balance = await daiTokenMock.methods.balanceOf(account).call();

        if (balance !== null) {
          setBalance(web3.utils.fromWei(balance.toString(), "Ether"));
        }
        const transactions = await daiTokenMock.getPastEvents("Transfer", {
          fromBlock: 0,
          toBlock: "latest",
          filter: { from: account },
        });
        setTransaction(transactions);
        console.log(transaction);
        console.log(account);
        console.log(balances);
        console.log(tokenMock);
      }
    }

    loadWeb3();
    loadBlockchainData();
  }, [account]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (recipientRef.current.value && amountRef.current.value) {
      try {
        transfer(recipientRef.current.value, amountRef.current.value);
      } catch (er) {
        console.log(er);
        setError("Error occured, please try again later");
      }
    }
  }

  function transfer(recipient, amount) {
    tokenMock.methods.transfer(recipient, amount).send({ from: account });
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Balance: {balances} ETH</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  Send ETH to any crypto wallet
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <FormContent>
                <Form action="#" onSubmit={handleSubmit}>
                  <FormH1>Send ETH</FormH1>
                  <FormLabel htmlFor="for">Recipient Address</FormLabel>
                  <FormInput type="text" required ref={recipientRef} />
                  <FormLabel htmlFor="for">Amount</FormLabel>
                  <FormInput type="text" required ref={amountRef} />

                  <FormButton type="submit" disabled={loading}>
                    Send
                  </FormButton>
                  {error ? (
                    <FormLabel
                      style={{ marginTop: 10, color: "red" }}
                      htmlFor="for"
                    >
                      {error}
                    </FormLabel>
                  ) : null}
                </Form>
              </FormContent>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default TransferSection;
