import { Edge, Node } from "reactflow";

export const initialNodes: Node[] = [
    {
        id: "1",
        position: { x: 0, y: 0 },
        data: { label: "Introduction to MERN", side: "left" },
        type: "courseInit",
        dragHandle: ""
    },
    {
        id: "2",
        position: { x: 30, y: 200 },
        data: { label: "Setup, Git, GitHub, Pages, Deploy" },
        type: "courseInit"
    },
    {
        id: "3",
        position: { x: -40, y: 400 },
        data: { label: "Guides - Resume, Full Stack, JS, React" },
        type: "courseInit"
    },
    {
        id: "4",
        position: { x: 20, y: 500 },
        data: { label: "Everything about HTML" },
        type: "courseInit"
    },
    {
        id: "5",
        position: { x: -40, y: 600 },
        data: { label: "CSS and Tailwind - Everything about Styling" },
        type: "courseInit"
    },
    {
        id: "6",
        position: { x: 40, y: 800 },
        data: { label: "Projects - HTML, CSS Complete Projects" },
        type: "courseInit"
    },
    {
        id: "7",
        position: { x: -20, y: 1000 },
        data: { label: "Everything is JavaScript" },
        type: "courseInit"
    },
    {
        id: "8",
        position: { x: 30, y: 1150 },
        data: { label: "Projects - HTML, CSS Complete Projects" },
        type: "courseInit"
    },
    {
        id: "9",
        position: { x: -30, y: 1300 },
        data: { label: "JavaScript projects" },
        type: "courseInit"
    },
    {
        id: "10",
        position: { x: 30, y: 1500 },
        data: { label: "Build Logical Games with HTML, CSS, JS" },
        type: "courseInit"
    },
    {
        id: "11",
        position: { x: 10, y: 1650 },
        data: { label: "3 Complete HTML, CSS, JS (with JavaScript) projects" },
        type: "courseInit"
    },
    {
        id: "12",
        position: { x: -400, y: 60 },
        data: { course: ["What is MERN stack", "Role of Every MERN Component", "All guides and resources"] },
        type: "courses"
    },
];
export const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", animated: false, type: "straight", sourceHandle: "a" },
    { id: "e1-2", source: "1", target: "12", animated: true, type: "straight", sourceHandle: "b" },
    { id: "e2-3", source: "2", target: "3", animated: false },
    { id: "e2-3", source: "3", target: "4", animated: false },
    { id: "e2-3", source: "4", target: "5", animated: false },
    { id: "e2-3", source: "5", target: "6", animated: false },
    { id: "e2-3", source: "6", target: "7", animated: false },
    { id: "e2-3", source: "7", target: "8", animated: false },
    { id: "e2-3", source: "8", target: "9", animated: false },
    { id: "e2-3", source: "9", target: "10", animated: false },
    { id: "e2-3", source: "10", target: "11", animated: false },
];