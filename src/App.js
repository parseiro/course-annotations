import React from 'react';
import { format } from "date-fns";
import './App.css';

const days = [
  {
    title: "D70",
    date: new Date("2023, 02, 14"),
    hardSkills: "Front-end 5.2: Projeto - Front-end Online Store dia 4/4",
    softSkils: "A importância do feedback para a colaboração",
    carreira: "",
    abertura: "Momento Soft Skills - dinâmica",
    fechamento: "",
  },
  {
    title: "D69",
    date: new Date("2023, 02, 13"),
    hardSkills: "Front-end 5.2: Projeto - Front-end Online Store dia 3/4",
    softSkils: "",
    carreira: "",
    abertura: "",
    fechamento: "",
  },
  {
    title: "D68",
    date: new Date("2023, 02, 10"),
    hardSkills: "Front-end 5.2: Projeto - Front-end Online Store dia 2/4",
    softSkils: "",
    carreira: "",
    abertura: "",
    fechamento: "",
  },
  {
    title: "D67",
    date: new Date("2023, 02, 09"),
    hardSkills: "Front-end 5.2: Projeto - Front-end Online Store dia 1/4",
    softSkils: "",
    carreira: "",
    abertura: "Explicação do projeto",
    fechamento: "",
  },
  {
    title: "D66",
    date: new Date("2023, 02, 08"),
    hardSkills: "Front-end 5.1: Metodologias Ágeis",
    softSkils: "",
    carreira: "",
    abertura: "Avisos e alinhamentos",
    fechamento: "",
  },
  {
    title: "D65",
    date: new Date("2023, 02, 07"),
    hardSkills: "Front-end 4.3: Projeto Trybetunes dia 3/3",
    softSkils: "",
    carreira: "",
    abertura: "Avisos e alinhamentos",
    fechamento: "",
  },
  {
    title: "D64",
    date: new Date("2023, 02, 06"),
    hardSkills: "Front-end 4.3: Projeto Trybetunes dia 2/3",
    softSkils: "",
    carreira: "",
    abertura: "Avisos e alinhamentos",
    fechamento: "",
  },
    {
        title: "D63",
        date: new Date("2023, 02, 03"),
        hardSkills: "Front-end 4.3: Projeto Trybetunes dia 1/3",
        softSkils: "",
        carreira: "",
        abertura: "Explicação do projeto",
        fechamento: "",
    },
    {
        title: "D62",
        date: new Date("2023, 02, 02"),
        hardSkills: "Front-end 4.2: ",
        softSkils: "3.11 Colaboração mediada por tecnologia",
        carreira: "",
        abertura: "Avisos e alinhamentos",
        fechamento: "",
    },
    {
        title: "D61",
        date: new Date("2023, 02, 01"),
        hardSkills: "Front-end 4.1: Ciclo de vida de componentes em React",
        softSkils: "",
        carreira: "Aplicação em processo seletivo",
        abertura: "Carreira",
        fechamento: "",
    },
    {
        title: "D60",
        date: new Date("2023, 01, 31"),
        hardSkills: "Front-end 3.5: Dia 3/3 Projeto Tryunfo",
        softSkils: "3.10 Ideação (apenas a dinâmica mesmo)",
        carreira: "",
        abertura: "Dinâmica de soft skills",
        fechamento: "",
    },
    {
        title: "D59",
        date: new Date("2023, 01, 30"),
        hardSkills: "Front-end 3.4: Dia 2/3 Projeto Tryunfo",
        softSkils: "3.9 Colaboração em times ágeis de desenvolvimento",
        carreira: "",
        abertura: "Avisos e alinhamentos",
        fechamento: "",
    },
    {
        title: "D58",
        date: new Date("2023, 01, 27"),
        hardSkills: "Front-end 3.3: Dia 1/3 Projeto Tryunfo",
        softSkils: "",
        carreira: "",
        abertura: "Explicação do projeto",
        fechamento: "",
    },
    {
        title: "D57",
        date: new Date("2023, 01, 26"),
        hardSkills: "Front-end 3.2: Formulários no React",
        softSkils: "3.8 A importância da assertividade para a colaboração",
        carreira: "",
        abertura: "Introdução ao tema de soft skills",
        fechamento: "",
    },
    {
        title: "D56",
        date: new Date("2023, 01, 25"),
        hardSkills: "Front-end 3.1: Componentes com estado e eventos",
        softSkils: "",
        carreira: "",
        abertura: "Explicação da sessão 3",
        fechamento: "Students Talks - Sua oportunidade de compartilhar o que sabe",
    },
    {
        title: "D55",
        date: new Date("2023, 01, 24"),
        hardSkills: "Front-end 2.3: Projeto - Solar System",
        softSkils: "",
        carreira: "",
        abertura: "Explicação do projeto",
        fechamento: "Trybe Talks",
    },
    {
        title: "D54",
        date: new Date("2023, 01, 23"),
        hardSkills: "Front-end 2.2: Componentes React",
        softSkils: "3.7: Introdução à Colaboração",
        carreira: "",
        abertura: "Soft skills, dinâmica de colaboração",
        fechamento: "Gestão de Tempo com Luiz Felipe 28-A",
    },
    {
        title: "D53",
        date: new Date("2023, 01, 20"),
        hardSkills: "Front-end 2.1: 'Hello, World' no React",
        softSkils: "3.6: Introdução à Colaboração",
        carreira: "",
        abertura: "Explicação da Sessão 2",
        fechamento: "Não houve",
    },
    {
        title: "D52",
        date: new Date("2023, 01, 19"),
        hardSkills: "Front-end 1.8: Projeto - Carrinho de compras dia 4/4",
        softSkils: "3.5: Sessão de Pitacos",
        carreira: "",
        abertura: "Soft skills",
        fechamento: "Não houve",
    },
    {
        title: "D51",
        date: new Date("2023, 01, 18"),
        hardSkills: "Front-end 1.7: Projeto - Carrinho de compras dia 3/4",
        softSkils: "3.4: Introdução à inovação",
        carreira: "",
        abertura: "Soft skills",
        fechamento: "Não houve",
    },
    {
        title: "D50",
        date: new Date("2023, 01, 17"),
        hardSkills: "Front-end 1.6: Projeto - Carrinho de compras dia 2/4",
        softSkils: "3.3: Introdução à inovação",
        carreira: "",
        abertura: "Soft skills",
        fechamento: "Não houve",
    },
    {
        title: "D49",
        date: new Date("2023, 01, 16"),
        hardSkills: "Front-end 1.5: Projeto - Carrinho de compras dia 1/4",
        softSkils: "",
        carreira: "",
        abertura: "Apresentação do projeto",
        fechamento: "Não houve",
    },
    {
        title: "D48",
        date: new Date("2023, 01, 13"),
        hardSkills: "Front-end 1.4: Async, await e testes assíncronos",
        softSkils: "3.2: Introdução à criatividade",
        carreira: "",
        abertura: "Explicação do exercício do dia",
        fechamento: "Não houve",
    },
    {
        title: "D47",
        date: new Date("2023, 01, 12"),
        hardSkills: "Front-end 1.3: Prática - Casa de Câmbio",
        softSkils: "",
        carreira: "",
        abertura: "Explicação do exercício do dia",
        fechamento: "",
    },
    {
        title: "D46",
        date: new Date("2023, 01, 11"),
        hardSkills: "Front-end 1.2: Javascript Assíncrono",
        softSkils: "3.1: PDI - Segundo exercício",
        carreira: "",
        abertura: "Apresentação do módulo de soft skills",
        fechamento: "",
    },
    {
        title: "D45",
        date: new Date("2023, 01, 10"),
        hardSkills: "Front-end 1.1: Ambiente de desenvolvimento",
        softSkils: "",
        carreira: "",
        abertura: "Apresentação do staff e do módulo",
        fechamento: "",
    },
    {
        title: "D44",
        date: new Date("2022, 12, 15"),
        hardSkills: "",
        softSkils: "Dinâmicas soft skills",
        carreira: "",
        abertura: "Soft skills",
        fechamento: "Soft skills",
    },
    {
        title: "D43",
        date: new Date("2022, 12, 14"),
        hardSkills: "Projeto Zoo functions",
        softSkils: "Mentoria - Grupo Reposição",
        carreira: "",
        abertura: "Avisos e alinhamentos",
        fechamento: "Formatura de Fundamentos",
    },
    {
        title: "D42",
        date: new Date("2022, 12, 13"),
        hardSkills: "Projeto Zoo functions",
        softSkils: "Mentoria - Grupo B6",
        carreira: "",
        abertura: "Não houve",
        fechamento: "Não houve",
    },
    {
        title: "D41",
        date: new Date("2022, 12, 12"),
        hardSkills: "Projeto Zoo functions",
        softSkils: "Mentoria - Grupo B5",
        carreira: "",
        abertura: "Não houve",
        fechamento: "Não houve",
    },
    {
        title: "D40",
        date: new Date("2022, 12, 08"),
        hardSkills: "Fundamentos Dia 8.6 Projeto Zoo functions",
        softSkils: "",
        carreira: "Primeiros passos - D4 Refletindo sobre a MDC",
        abertura: "Explicação do projeto",
        fechamento: "Momento Carreira",
    },
    {
        title: "D39",
        date: new Date("2022, 12, 07"),
        hardSkills: "Fundamentos Dia 8.5 JavaScript ES6 - Array destructuring, Default destructuring, Object property shorthand e default parameter",
        softSkils: "Mentoria - Grupo B4",
        carreira: "Primeiros passos - D4 Refletindo sobre a MDC",
        abertura: "Não houve",
        fechamento: "Momento Carreira",
    },
    {
        title: "D38",
        date: new Date("2022, 12, 06"),
        hardSkills: "Fundamentos Dia 8.4 JavaScript ES6 spread operator, rest parameters e object destructuring",
        softSkils: "Mentoria - Grupo B3",
        carreira: "Primeiros passos - D3 MDC - Matriz de Decisão de Carreira",
        abertura: "Não houve",
        fechamento: "Não houve",
    },
    {
        title: "D37",
        date: new Date("2022, 12, 01"),
        hardSkills: "Fundamentos Dia 8.3 - Higher Order Functions - filter e reduce",
        softSkils: "Mentoria - Grupo B2",
        carreira: "Primeiros passos - D2 Stalkeando empresas",
        abertura: "Não houve",
        fechamento: "Não houve",
    },
    {
        title: "D36",
        date: new Date("2022, 11, 30"),
        hardSkills: "Fundamentos Dia 8.2 - Higher Order Functions - sort e map",
        softSkils: "Mentoria - Grupo B1",
        carreira: "Primeiros passos - D1 Empresas de acordo com o interesse",
        abertura: "Não houve",
        fechamento: "Não houve",
    },
    {
        title: "D35",
        date: new Date("2022, 11, 29"),
        hardSkills: "Fundamentos Dia 8.1 - High Order Functions",
        softSkils: "",
        abertura: "Candidatos a Embaixatryber",
        fechamento: "Trybe Talks - e Talks - Como dar match nos processos seletivos em big techs",
    },
    {
        title: "D34",
        date: new Date("2022, 11, 25"),
        hardSkills: "Fundamentos Dia 7.4 - Projeto dia 2/2",
        softSkils: "Eu e o Mundo - D14 Resiliência aplicada à gestão do tempo",
        abertura: "Soft Skills com Rafa Cerqueira",
        fechamento: "",
    },
    {
        title: "D33",
        date: new Date("2022, 11, 23"),
        hardSkills: "Fundamentos Dia 7.4 - Projeto ß",
        softSkils: "Valores",
        abertura: "Soft Skills",
        fechamento: "Sem fechamento",
    },
    {
        title: "D32",
        date: new Date("2022, 11, 22"),
        hardSkills: "Fundamentos 7.3 - Matchers, teste de exceções e cobertura de código",
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
        softSkils: "2.12 Talentos",
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
        softSkils: "2.11 Resiliência",
    },
    {
        title: "D25",
        date: new Date("2022, 11, 09"),
        hardSkills: "Fundamentos 6.2",
        softSkils: "2.10 Empatia",
    },
    {
        title: "D24",
        date: new Date("2022, 11, 08"),
        hardSkills: "Fundamentos 6.1",
        softSkils: "2.9 História de vida",
    },
    {
        title: "D23",
        date: new Date("2022, 11, 07"),
        hardSkills: "Fundamentos 5.5 Projeto Pixel Art 2/2",
        softSkils: "2.8 Emoções",
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
        softSkils: "2.7 Introdução à inteligência emocional",
    },
    {
        title: "D20",
        date: new Date("2022, 11, 01"),
        hardSkills: "Fundamentos 5.3",
        softSkils: "2.6 Como aproveitar um feedback?",
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
        softSkils: "2.2 Explicação do Zuck Challenge",
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
        softSkils: "1.8 Diversidade & Inclusão",
    },
    {
        title: "D12",
        date: new Date("2022, 10, 20"),
        hardSkills: "Fundamentos 4.1",
        softSkils: "1.6 Plano de Desenvolvimento Individual (PDI) - Primeiro Exercício",
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
        softSkils: "1.4 Introdução à assertividade",
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
        hardSkills: "Fundamentos 1.2: Git - O que é e para que serve",
        softSkils: "Primeiros passos - D1 Por que desenvolver soft skills?",
    },
    {
        title: "D3",
        date: new Date("2022, 10, 6"),
        hardSkills: "Fundamentos 1.1: Unix & Shell",
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
                    <th>Abertura</th>
                    <th>Hard skills</th>
                    <th>Soft skills</th>
                    <th>Carreira</th>
                    <th>Fechamento</th>
                </tr>
                </thead>
                <tbody>
                {days
                    .sort((a) => a.title)
                    .map((e) => (
                        <tr key={e.title}>
                            <td>{e.title}</td>
                            <td>{format(e.date, "dd/MM/yyyy")}</td>
                            <td class={'text-left'}>{e.abertura}</td>
                            <td class={'text-left'}>{e.hardSkills}</td>
                            <td class={'text-left'}>{e.softSkils}</td>
                            <td class={'text-left'}>{e.carreira}</td>
                            <td class={'text-left'}>{e.fechamento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
