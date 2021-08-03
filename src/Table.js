import React, { useState } from 'react';
import './Table.css';

import axios from 'axios';
import TableList from './TableList';

const Table = () => {

    const [tableList, setTableList] = useState('');


    const getListData = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop/')
            .then((response) => {

                // console.log(response.stacja);
                // console.log(response.temperatura);
                // console.log(response.wilgotnosc_wzgledna);
                // console.log(response.cisnienie);

                const ListData = response.data;
                setTableList(ListData);

                // let newTableList = [];

                // let newTableObj = {
                //     city: stacja,
                //     temperature: temperatura,
                //     humidity: wilgotnosc_wzgledna,
                //     pressure: cisnienie,
                // }

                // newTableList.push(newTableObj)
                // setTableList(newTableList);
            });



        return (
            <TableList tableList = {tableList} />
        );
    }
}

export default Table;