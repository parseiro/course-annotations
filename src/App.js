import React from 'react';
import { format } from "date-fns";
import './App.css';

const days = [
    {
        title: "D32",
        date: new Date("2022, 11, 22"),
        hardSkills: "Fundamentos Dia 7.3 - Matchers, teste de exceções e cobertura de código",
        softSkils: "Valores",
        abertura: "Soft Skills",
        fechamento: "",
    },
    {
        title: "D31",
        date: new Date("2022, 11, 21"),
        hardSkills: "Fundamentos 7.2 - Primeiros passos em Jest",
        softSkils: "",
        abertura: "Explicação sobre EmbaixaTrybers",
        fechamento: "Não houve",
    },
    {
        title: "D30",
        date: new Date("2022, 11, 18"),
        hardSkills: "Fundamentos 7.1 - JavaScript ES6 - Fluxo de exceção e objetos",
        softSkils: "Eu e o Mundo - D12 Talentos",
        fechamento: "Não houve",
    },
    {
        title: "D29",
        date: new Date("2022, 11, 17"),
        hardSkills: "Fundamentos 6.6 - Projeto TrybeWarts",
        softSkils: "",
        fechamento: "",
    },
    {
        title: "D28",
        date: new Date("2022, 11, 16"),
        hardSkills: "Fundamentos 6.5",
        softSkils: "",
        fechamento: "Vitória Galvão - necessidades apontadas por pessoas estudantes",
    },
    {
        title: "D27",
        date: new Date("2022, 11, 11"),
        hardSkills: "Fundamentos 6.4",
        softSkils: "",
    },
    {
        title: "D26",
        date: new Date("2022, 11, 10"),
        hardSkills: "Fundamentos 6.3",
        softSkils: "Eu e o Mundo - D11 Resiliência",
    },
    {
        title: "D25",
        date: new Date("2022, 11, 09"),
        hardSkills: "Fundamentos 6.2",
        softSkils: "Eu e o Mundo - D10 Empatia",
    },
    {
        title: "D24",
        date: new Date("2022, 11, 08"),
        hardSkills: "Fundamentos 6.1",
        softSkils: "Eu e o Mundo - D9 História de vida",
    },
    {
        title: "D23",
        date: new Date("2022, 11, 07"),
        hardSkills: "Fundamentos 5.5 Projeto Pixel Art 2/2",
        softSkils: "Eu e o Mundo - D8 Emoções",
    },
    {
        title: "D22",
        date: new Date("2022, 11, 04"),
        hardSkills: "Fundamentos 5.5 Projeto Pixel Art 1/2",
        softSkils: "",
    },
    {
        title: "D21",
        date: new Date("2022, 11, 03"),
        hardSkills: "Fundamentos 5.4",
        softSkils: "Eu e o Mundo - D7 Introdução à inteligência emocional",
    },
    {
        title: "D20",
        date: new Date("2022, 11, 01"),
        hardSkills: "Fundamentos 5.3",
        softSkils: "",
    },
    {
        title: "D19",
        date: new Date("2022, 10, 31"),
        hardSkills: "Fundamentos 5.2",
        softSkils: "",
    },
    {
        title: "D18",
        date: new Date("2022, 10, 28"),
        hardSkills: "Fundamentos 5.1",
        softSkils: "Eu e o Mundo - D2 Explicação do Zuck Challenge",
    },
    {
        title: "D17",
        date: new Date("2022, 10, 27"),
        hardSkills: "Fundamentos 4.6 - Projeto Playground Functions",
        softSkils: "",
    },
    {
        title: "D16",
        date: new Date("2022, 10, 26"),
        hardSkills: "Fundamentos 4.5",
        softSkils: "",
    },
    {
        title: "D15",
        date: new Date("2022, 10, 25"),
        hardSkills: "Fundamentos 4.4",
        softSkils: "",
    },
    {
        title: "D14",
        date: new Date("2022, 10, 24"),
        hardSkills: "Fundamentos 4.3",
        softSkils: "",
    },
    {
        title: "D13",
        date: new Date("2022, 10, 21"),
        hardSkills: "Fundamentos 4.2",
        softSkils: "Primeiros passos - D8 Diversidade & Inclusão",
    },
    {
        title: "D12",
        date: new Date("2022, 10, 20"),
        hardSkills: "Fundamentos 4.1",
        softSkils: "Primeiros passos - D6 Plano de Desenvolvimento Individual (PDI) - Primeiro Exercício",
    },
    {
        title: "D11",
        date: new Date("2022, 10, 19"),
        hardSkills: "Fundamentos 3.5 - Projeto Lessons Learned",
        softSkils: "",
    },
    {
        title: "D10",
        date: new Date("2022, 10, 18"),
        hardSkills: "Fundamentos 3.4",
        softSkils: "Primeiros passos - D4 Introdução à assertividade",
    },
    {
        title: "D9",
        date: new Date("2022, 10, 17"),
        hardSkills: "Fundamentos 3.3",
        softSkils: "",
    },
    {
        title: "D8",
        date: new Date("2022, 10, 14"),
        hardSkills: "Fundamentos 3.2",
        softSkils: "Primeiros passos - D4 Assertividade?",
    },
    {
        title: "D7",
        date: new Date("2022, 10, 13"),
        hardSkills: "Fundamentos 3.1",
        softSkils: "Primeiros passos - D3 Gestão do tempo",
    },
    {
        title: "D6",
        date: new Date("2022, 10, 11"),
        hardSkills: "Fundamentos 2.2",
        softSkils: "Primeiros passos - D2 Autoliderança",
    },
    {
        title: "D5",
        date: new Date("2022, 10, 10"),
        hardSkills: "Fundamentos 2.1",
        softSkils: "",
    },
    {
        title: "D4",
        date: new Date("2022, 10, 7"),
        hardSkills: "Fundamentos 1.2",
        softSkils: "Primeiros passos - D1 Por que desenvolver soft skills?",
    },
    {
        title: "D3",
        date: new Date("2022, 10, 6"),
        hardSkills: "Fundamentos 1.1",
        softSkils: "",
    },
    {
        title: "D2",
        date: new Date("2022, 10, 5"),
        hardSkills: "Welcome day 2",
        softSkils: "",
    },
    {
        title: "D1",
        date: new Date("2022, 10, 4"),
        hardSkills: "Welcome day 1",
        softSkils: "",
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
                            <td>{format(e.date, "dd/MM/yyyy")}</td>
                            <td class={'text-left'}>{e.hardSkills}</td>
                            <td class={'text-left'}>{e.softSkils}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;