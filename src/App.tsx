import StatsData from "./data/data.json";
import { groupDuplicatePlayers } from "./groupDuplicates";
import Expand from './assets/expand'

function App() {
  const groupedPlayersStats = groupDuplicatePlayers(
    StatsData.playersSessionStats
  );

  return (
    <>
      <div className="bg-slate-800 w-full">
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <h2 className="text-2xl text-white font-bold">Teams stats</h2>
          <h2 className="text-sm text-white font-bold">Talanta</h2>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto py-20 px-4">
        <h3 className="text-gray-400 font-semibold text-xl">Team stats</h3>

        {groupedPlayersStats &&
          groupedPlayersStats.map((groupedplayerstat, index) => (
            <div
              className="py-4 bg-gray-300 text-gray-600 mt-4 rounded-lg px-4"
              key={index}
            >
              <h3 className="font-bold px-4 text-xl">
                {groupedplayerstat.playerName}
              </h3>
              <div className="mt-2 grid grid-cols-1 lg:grid lg:grid-cols-2 items-center gap-2">
                {groupedplayerstat.stats.map((singleplayerstat, index) => (
                  <div
                    className="flex flex-row justify-between items-center px-4 hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer hover:transition-all duration-300 delay-75 p-2"
                    key={index}
                  >
                    <h3>{singleplayerstat}</h3>
                    <div><Expand /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
