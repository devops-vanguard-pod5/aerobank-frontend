import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewBankAllTransactions = () => {
  let navigate = useNavigate();
  const [allTransactions, setAllTransactions] = useState([]);
  
  const bank = JSON.parse(sessionStorage.getItem("active-bank"));
  const bank_jwtToken = sessionStorage.getItem("bank-jwtToken");

  const retrieveAllTransactions = async () => {
    if (!bank_jwtToken || !bank) {
      toast.error("Bank session expired or invalid. Please log in again.", { position: "top-center", autoClose: 2000 });
      navigate("/user/login");
      return null;
    }

    try {
      const response = await axios.get(
        "http://44.203.246.158:32152/api/bank/transaction/all/customer/fetch?bankId=" + bank.bank.id,
        {
          headers: { Authorization: "Bearer " + bank_jwtToken },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Bank Transaction Fetch Error:", error);
      if (error.response && error.response.status === 403) {
        toast.error("Unauthorized access or session expired. Please log in.", { position: "top-center", autoClose: 3000 });
        navigate("/user/login");
      } else {
        toast.error("Failed to load transactions.");
      }
      return null;
    }
  };

  useEffect(() => {
    const getAllTransactions = async () => {
      const transactions = await retrieveAllTransactions();
      if (transactions && transactions.bankTransactions) {
        setAllTransactions(transactions.bankTransactions);
      }
    };
    getAllTransactions();
  }, []);

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    return date.toLocaleString(); 
  };

  return (
    <div>
      <div className="mt-2">
        <div className="card form-card ms-5 me-5 mb-5 custom-bg border-color shadow" style={{ height: "45rem" }}>
          <div className="card-header custom-bg-text text-center bg-color">
            <h2>Bank Branch Transactions</h2>
          </div>
          <div className="card-body" style={{ overflowY: "auto" }}>
            <div className="table-responsive mt-2">
              <table className="table table-hover text-color text-center">
                <thead className="table-bordered border-color bg-color custom-bg-text">
                  <tr>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Source Bank</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Source Account</th>
                    <th scope="col">Transaction Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Recipient Bank</th>
                    <th scope="col">Recipient Account</th>
                    <th scope="col">Narration</th>
                    <th scope="col">Transaction Time</th>
                  </tr>
                </thead>
                <tbody>
                  {allTransactions.map((transaction, index) => {
                    return (
                      <tr key={index}>
                        <td><b>{transaction.transactionId}</b></td>
                        <td><b>{transaction.bank?.name || "---"}</b></td>
                        <td><b>{transaction.user?.name || "---"}</b></td>
                        <td><b>{transaction.bankAccount?.number || "---"}</b></td>
                        <td>
                          <span className={`badge ${transaction.type === 'Account Transfer' ? 'bg-primary' : 'bg-success'}`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td><b className="text-success">${transaction.amount}</b></td>
                        <td>
                          {transaction.type === "Account Transfer" ? (
                            <b>{transaction.destinationBankAccount?.bank?.name || "---"}</b>
                          ) : (
                            <b>---</b>
                          )}
                        </td>
                        <td>
                          {transaction.type === "Account Transfer" ? (
                            <b>{transaction.destinationBankAccount?.number || "---"}</b>
                          ) : (
                            <b>---</b>
                          )}
                        </td>
                        <td><b>{transaction.narration}</b></td>
                        <td><b>{formatDateFromEpoch(transaction.transactionTime)}</b></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBankAllTransactions;