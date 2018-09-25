function roadRadar([speed, zone]) {
  const getLimit = () => {
    switch (zone) {
      case 'motorway':
        return 130;
      case 'interstate':
        return 90;
      case 'city':
        return 50;
      case 'residential':
        return 20;
      default:
        return undefined;
    }
  };

  const getInfraction = () => {
    const overSpeed = speed - getLimit(zone);
    if (overSpeed <= 0) {
      return false;
    } else if (overSpeed <= 20) {
      return 'speeding';
    } else if (overSpeed <= 40) {
      return 'excessive speeding';
    } else {
      return 'reckless driving';
    }
  };

  const infraction = getInfraction();
  if (infraction) {
    console.log(infraction);
  }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
