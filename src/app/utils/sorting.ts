export const sortByLastName = (names) => {
  const compare = (a, b) => {
    let splitA = a.name.split(" ");
    let splitB = b.name.split(" ");
    let lastA = splitA[splitA.length - 1];
    let lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
  };
  return names.sort(compare);
};
