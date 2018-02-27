export function getBlacklistCategories (): Array<string> { // Categories that are not allowed
  var blacklistCategories = ["Other"];
  return blacklistCategories;
}
export function getCommonCategories (filterCategories: Array<String>): Array<string> { // Could be done in a more efficient manner
  var commonCategories = ["Art", "Leisure", "Sports", "Theater", "Active", "Sightseeing", "Lodging", "Dining", "Fine Dining", "Fast Dining", "Movies"];
  for (var filterIndex in filterCategories) {
    var deletedRepeat = false;
    for (var categoryCounter = 0; categoryCounter < commonCategories.length && !deletedRepeat; categoryCounter++) {
      if (filterCategories[filterIndex].toLowerCase() == commonCategories[categoryCounter].toLowerCase()) {
        commonCategories.splice(categoryCounter, 1);  // Remove all of the filter strings from commonCategories
        deletedRepeat = true; // Exit for loop since there are no repeats in common categories
      }
    }
  }
  commonCategories = commonCategories.sort();
  commonCategories.push("Other"); // Put other at the end
  return commonCategories;
}
