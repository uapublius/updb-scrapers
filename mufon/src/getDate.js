function getDate(daysBack) {
  let timeStamp = Date.now() - (86400000 * (daysBack || 1));
  let dateToSearch = new Date(timeStamp);

  let month = dateToSearch.getMonth() + 1;
  let day = dateToSearch.getDate();
  let year = dateToSearch.getFullYear();

  return { month, day, year };
}

exports.getDate = getDate;
