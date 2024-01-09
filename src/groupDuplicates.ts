interface SessionStat {
  sessionStatId: string;
  playerId: string;
  playerName: string;
  clubAssignedStatName: string;
  lastUpdated: Date | null;
}

interface GroupedData {
  playerId: string;
  playerName: string;
  stats: string[];
}

//function to group repeating players and adn their club assigned stat name
export function groupDuplicatePlayers(data: SessionStat[]): GroupedData[] {
  const groupedData: Map<string, GroupedData> = new Map();

  data.forEach((stat) => {
    const playerName = stat.playerName;

    if (groupedData.has(playerName)) {
      const playerGroup = groupedData.get(playerName)!;
      playerGroup.stats.push(stat.clubAssignedStatName);
    } else {
      groupedData.set(playerName, {
        playerId: stat.playerId,
        playerName: stat.playerName,
        stats: [stat.clubAssignedStatName],
      });
    }
  });

  // Filtering and converting Map values to an array and sorting them in alphabetical order
  const result: GroupedData[] = Array.from(groupedData.values())
    .filter((value) => value.stats.length > 2)
    .sort((a, b) => a.playerName.localeCompare(b.playerName));


  return result;
}
