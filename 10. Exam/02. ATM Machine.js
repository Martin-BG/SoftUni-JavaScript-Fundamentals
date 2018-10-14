function atmMachine(input) {

  let banknotes = new Map();

  const getTotalCashInATM = (banknotes) => {
    let total = 0;
    banknotes.forEach((banknote, count) => total += banknote * count);
    return total;
  };

  const report = (order, banknotes) => {
    const banknote = +order[0];
    const count = banknotes.get(banknote);
    console.log(`Service Report: Banknotes from ${banknote}$: ${count ? count : 0}.`);
  };

  const withdraw = ([userAccount, wanted], banknotes) => {
    if (+userAccount < +wanted) {
      console.log(`Not enough money in your account. Account balance: ${userAccount}$.`);
    } else if (getTotalCashInATM(banknotes) < +wanted) {
      console.log(`ATM machine is out of order!`);
    } else {
      const sortedBanknotes = Array.from(banknotes.keys()).sort(function (a, b) {
        return b - a;
      });
      let taken = 0;
      sortedBanknotes.forEach(banknote => {
        let take = Math.min(Math.floor((wanted - taken) / banknote), banknotes.get(banknote));
        taken += banknote * take;
        banknotes.set(banknote, banknotes.get(banknote) - take);
      });

      console.log(`You get ${wanted}$. Account balance: ${userAccount - wanted}$. Thank you!`);
    }
  };

  const insert = (order, banknotes) => {
    const total = order.reduce((acc, cur) => acc + cur, 0);
    for (let banknote of order) {
      if (!banknotes.has(banknote)) {
        banknotes.set(banknote, 0);
      }
      banknotes.set(banknote, banknotes.get(banknote) + 1);
    }
    console.log(`Service Report: ${total}$ inserted. Current balance: ${getTotalCashInATM(banknotes)}$.`);
  };

  for (let operation of input) {
    if (operation.length === 2) {
      withdraw(operation, banknotes);
    } else if (operation.length === 1) {
      report(operation, banknotes);
    } else if (operation.length > 2) {
      insert(operation, banknotes);
    }
  }
}

atmMachine([
  [20, 5, 100, 20, 1],
  [457, 25],
  [1],
  [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
  [20, 85],
  [5000, 4500],
]);
