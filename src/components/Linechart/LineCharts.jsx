import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const studentMarks = [
    { id: 1, name: 'Alice', math: 85, science: 92, english: 78, history: 88 },
    { id: 2, name: 'Bob', math: 2, science: 80, english: 85, history: 75 },
    { id: 3, name: 'Charlie', math: 95, science: 89, english: 92, history: 90 },
    { id: 4, name: 'David', math: 60, science: 75, english: 70, history: 65 },
    { id: 5, name: 'Eve', math: 88, science: 94, english: 86, history: 90 },
    { id: 6, name: 'Frank', math: 7, science: 2, english: 79, history: 3 },
    { id: 7, name: 'Grace', math: 93, science: 96, english: 9, history: 89 },
    { id: 8, name: 'Hannah', math: 8, science: 73, english: 80, history: 78 },
    { id: 9, name: 'Ivy', math: 84, science: 88, english: 87, history: 85 },
    { id: 10, name: 'Jack', math: 79, science: 81, english: 75, history: 70 }
];

const LineCharts = () => {
    return (
        <LineChart width={400} height={200} data={studentMarks}>
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="science" stroke="#8884d8" />
        <Line type="monotone" dataKey="english" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      
    );
};

export default LineCharts;