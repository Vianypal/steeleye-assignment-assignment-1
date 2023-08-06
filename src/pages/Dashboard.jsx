import { useEffect, useState } from "react";

// Data
import mockData from "../assets/data.json";
import timeStamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
 

  
    const value=mockData.results.length;
  
   
  const [combinedData,setCombinedData]=useState([]);
  useEffect(() => {
    const combinedRows = mockData.results.map((row) => {
      const orderId = row["&id"];
      const timestamp = timeStamps[orderId];
      console.log(timestamp);
      console.log(orderId);
      return { ...row, order1: timestamp };
      
    });
    setCombinedData(combinedRows);
  }, []);
  
  //for searching

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const filteredRows = combinedData.filter((row) =>
      row["&id"].toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredRows);
  }, [combinedData, searchText]);

  const handleRowClick=(row)=>{
    setSelectedOrderDetails(row.executionDetails);
    setSelectedOrderTimeStamps(row.timestamps);
    console.log(row);

  };
  
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${value} orders`}  />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={filteredData} currency={currency} onRowClick={handleRowClick} />
      </div>
    </div>
  );
};

export default Dashboard;
