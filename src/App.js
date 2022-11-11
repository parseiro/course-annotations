import React from 'react';
import { format } from "date-fns";
import './App.css';

const days = [
    {
        title: "D27",
        date: new Date("2022, 11, 11"),
        hardSkills: "Fundamentos 6.4",
        softSkils: "?",
    },
    {
        title: "D26",
        date: new Date("2022, 11, 10"),
        hardSkills: "Fundamentos 6.3",
        softSkils: "Eu e o Mundo - D10 Empatia",
    },
];

/*const Linha = (props) => {
    return (
        <tr>
            <td>${props.title}</td>
            <td></td>
            <td>${props.hardSkills}</td>
            <td>${props.softSkils}</td>
        </tr>
    );
};*/

function App() {
    const itens = [];

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Dia corrido</th>
                    <th>Data</th>
                    <th>Hard skills</th>
                    <th>Soft skills</th>
                </tr>
                </thead>
                <tbody>
                {days
                    .sort((a) => a.title)
                    .map((e) => (
                        <tr key={e.title}>
                            <td>{e.title}</td>
                            <td>{format(e.date, "dd/mm/yyyy")}</td>
                            <td>{e.hardSkills}</td>
                            <td>{e.softSkils}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;