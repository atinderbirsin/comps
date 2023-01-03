import Table from "../components/Table";

function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 },
    ];

    const config = [
        { label: 'Fruits', render: (fruit) => fruit.name,  sort: (data) => data = data.sort() },
        { label: 'Color', render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/> },
        { label: 'Scores', render: (fruit) => fruit.score, sort: (data) => data = data.sort((a,b) => a.score-b.score )  },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }

    return <Table data={data} config={config} keyFn={keyFn} />
};

export default TablePage;