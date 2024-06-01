import { useState } from "react";
import Pagination from "../Pagination"
import "./pagination.css";


const PaginationTest = () => {

    const dummyData = Array.from({length: 100}, (_, index) => ({
        id: index + 1,
        name:`Product ${index +1}`
    }));

    const handlePageChange = (currentPage) => {
        setCurrentPage(currentPage)

    } 

    // console.log(dummyData)
    const itemPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;

    const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    // console.log("Raj",currentListOfItems, indexOfFirstItem,indexOfLastItem )


  return (
    <div>
        <ul className="list-items">
            {currentListOfItems.map((listItem) => (
                <li key={listItem.id}>{listItem.name}</li>
            ))}
        </ul>
        <Pagination 
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemPerPage)}
        onPageChange={handlePageChange}
        /> 
    </div>
  )
}

export default PaginationTest;