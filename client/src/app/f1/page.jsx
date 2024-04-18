import { notFound } from 'next/navigation';

export default async function RacePage() {
    const res = await fetch('http://ergast.com/api/f1/current/last/results.json');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const { MRData } = await res.json();
    const { Races } = MRData.RaceTable;

    if (!Races || Races.length === 0) {
        return notFound();
    }

    return (
        <div className="container mx-auto py-10">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Series</th>
                            <th>Season</th>
                            <th>Round</th>
                            <th>Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{MRData.series}</td>
                            <td>{MRData.RaceTable.season}</td>
                            <td>{MRData.RaceTable.round}</td>
                            <td>{MRData.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Pos</th>
                        <th className="px-4 py-2">No</th>
                        <th className="px-4 py-2">Driver</th>
                        <th className="px-4 py-2">Constructor</th>
                        <th className="px-4 py-2">Laps</th>
                        <th className="px-4 py-2">Grid</th>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {Races[0].Results.map((result, index) => (
                        <tr
                            key={index}
                            className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                        >
                            <td className="px-4 py-2">{result.position}</td>
                            <td className="px-4 py-2">{result.number}</td>
                            <td className="px-4 py-2">
                                {result.Driver.givenName} {result.Driver.familyName}
                            </td>
                            <td className="px-4 py-2">{result.Constructor.name}</td>
                            <td className="px-4 py-2">{result.laps}</td>
                            <td className="px-4 py-2">{result.grid}</td>
                            <td className="px-4 py-2">{result.Time ? result.Time.time : 'N/A'}</td>
                            <td className="px-4 py-2">{result.status}</td>
                            <td className="px-4 py-2">{result.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}