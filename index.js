function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter((driver) => {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers) {
  return drivers.filter(driversWithRevenueOver).map((driver) => {
    return driver.name
  })
}

function exactMatch(drivers) {

}

function exactMatchToList(drivers) {

}
