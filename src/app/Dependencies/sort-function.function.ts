import { Post } from './post.class'
export function sortPosts (posts: Array<Post>, startingIndex, endIndex): void { // Intial length: size - 1
  if ( startingIndex  < endIndex ) {

    var pivotValue = posts[startingIndex].getVotesTotal();

    var lastEmptyLowIndex = startingIndex;
    for (var postCounter = startingIndex + 1; postCounter < posts.length; postCounter++) { // skip the first index because that is our pivot point
      var votes = posts[postCounter].getVotesTotal();
      if (votes < pivotValue) {
        lastEmptyLowIndex += 1; // Things that have already been swapped can't be swapped out again because of increment
        swapInArray(posts, lastEmptyLowIndex, postCounter);
      }
    }
    swapInArray(posts, 0, lastEmptyLowIndex); // Put pivot point in middle (the element at lastEmptyLowIndex is already below pivot, so putting it farther below shouldn't effect it)

    sortPosts(posts, 0, lastEmptyLowIndex); // right before pivot point
    sortPosts(posts, lastEmptyLowIndex + 1, endIndex);
  }
}

function swapInArray (array: Array<any>, swapIndex0: number, swapIndex1: number): void {
  // Swap
  var tempSwapHolder = array[swapIndex1];
  array[swapIndex1] = array[swapIndex0];
  array[swapIndex0] = tempSwapHolder;
}
