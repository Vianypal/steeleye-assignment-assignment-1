import styles from "./ListRow.module.css";

const ListCell = ({ children ,OnRowClick,row}) => {
  return <tr className={styles.cell} onClick={()=>{OnRowClick(row)}}>{children}</tr>;
};

export default ListCell;
