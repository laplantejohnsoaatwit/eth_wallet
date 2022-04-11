import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import DaiTokenMock from "./abis/DaiTokenMock.json";
import Home from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

import { AuthProvider } from "./contexts/AuthContext";
class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/signin" element={<SigninPage />} exact />
            <Route path="/signup" element={<SignupPage />} exact />
          </Routes>
        </Router>
      </AuthProvider>
      // <div>
      //   <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      //     <a
      //       className="navbar-brand col-sm-3 col-md-2 mr-0"
      //       href="http://www.dappuniversity.com/bootcamp"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Group A
      //     </a>
      //   </nav>
      //   <div className="container-fluid mt-5">
      //     <div className="row">
      //       <main role="main" className="col-lg-12 d-flex text-center">
      //         <div
      //           className="content mr-auto ml-auto"
      //           style={{ width: "500px" }}
      //         >
      //           <a
      //             href="http://www.dappuniversity.com/bootcamp"
      //             target="_blank"
      //             rel="noopener noreferrer"
      //           >
      //             <img src={ethlogo} width="150" />
      //           </a>
      //           <h1>{this.state.balance} ETH</h1>
      //           <form
      //             onSubmit={(event) => {
      //               event.preventDefault();
      //               const recipient = this.recipient.value;
      //               const amount = window.web3.utils.toWei(
      //                 this.amount.value,
      //                 "Ether"
      //               );
      //               this.transfer(recipient, amount);
      //             }}
      //           >
      //             <div className="form-group mr-sm-2">
      //               <input
      //                 id="recipient"
      //                 type="text"
      //                 ref={(input) => {
      //                   this.recipient = input;
      //                 }}
      //                 className="form-control"
      //                 placeholder="Recipient Address"
      //                 required
      //               />
      //             </div>
      //             <div className="form-group mr-sm-2">
      //               <input
      //                 id="amount"
      //                 type="text"
      //                 ref={(input) => {
      //                   this.amount = input;
      //                 }}
      //                 className="form-control"
      //                 placeholder="Amount"
      //                 required
      //               />
      //             </div>
      //             <button type="submit" className="btn btn-primary btn-block">
      //               Send
      //             </button>
      //           </form>
      //           <table className="table">
      //             <thead>
      //               <tr>
      //                 <th scope="col">Recipient</th>
      //                 <th scope="col">value</th>
      //               </tr>
      //             </thead>
      //             <tbody>
      //               {this.state.transactions.map((tx, key) => {
      //                 return (
      //                   <tr key={key}>
      //                     <td>{tx.returnValues.to}</td>
      //                     <td>
      //                       {window.web3.utils.fromWei(
      //                         tx.returnValues.value.toString(),
      //                         "Ether"
      //                       )}
      //                     </td>
      //                   </tr>
      //                 );
      //               })}
      //             </tbody>
      //           </table>
      //         </div>
      //       </main>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
