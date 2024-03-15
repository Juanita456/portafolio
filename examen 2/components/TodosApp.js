import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { useTable } from 'react-table';

const TodosApp = () => {
    const [todos, setTodos] = useState([]);
    const [option, setOption] = useState('');
    const [dataToShow, setDataToShow] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/todos";

    useEffect(() => {
        fetchTodos();
    }, []);

    useEffect(() => {
        setDataToShow(renderTodos());
    }, [option, todos]);

    const fetchTodos = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setOption(e.target.value);
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'UserID',
                accessor: 'userId',
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: dataToShow });

    const renderTodos = () => {
        switch (option) {
            case '1':
                return todos.map(todo => ({
                    id: todo.id
                }));
            case '2':
                return todos.map(todo => ({
                    id: todo.id,
                    title: todo.title
                }));
            case '3':
                return todos.filter(todo => !todo.completed).map(todo => ({
                    id: todo.id,
                    title: todo.title
                }));
            case '4':
                return todos.filter(todo => todo.completed).map(todo => ({
                    id: todo.id,
                    title: todo.title
                }));
            case '5':
                return todos.map(todo => ({
                    id: todo.id,
                    userId: todo.userId
                }));
            case '6':
                return todos.filter(todo => todo.completed).map(todo => ({
                    id: todo.id,
                    userId: todo.userId
                }));
            case '7':
                return todos.filter(todo => !todo.completed).map(todo => ({
                    id: todo.id,
                    userId: todo.userId
                }));
            default:
                return [];
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Aplicación de Todos</h1>
            <select value={option} onChange={handleChange}>
                <option value="">Selecciona una opción</option>
                <option value="1">Lista de todos los pendientes (solo IDs)</option>
                <option value="2">Lista de todos los pendientes (IDs y título)</option>
                <option value="3">Lista de todos los pendientes sin resolver (ID y título)</option>
                <option value="4">Lista de todos los pendientes resueltos (solo ID y título)</option>
                <option value="5">Lista de todos los pendientes (IDs y userId)</option>
                <option value="6">Lista de todos los pendientes resueltos (ID y userID)</option>
                <option value="7">Lista de todos los pendientes sin resolver (ID y userID)</option>
            </select>
            <div style={{ overflowY: "auto", maxHeight: "400px" }}>
                <table {...getTableProps()} style={{ margin: "auto", borderCollapse: "collapse", width: "80%", minWidth: "600px" }}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodosApp;






