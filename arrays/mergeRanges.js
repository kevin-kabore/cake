function mergeRanges(meetings) {

  // Merge meetings ranges

  // deep copy of meetings obj to avoid reference of underlying objects
  // O(n)
  let meetingsCopy = JSON.parse(JSON.stringify(meetings))

  // sort by startTime
  // O(nlgn)
  let sortedMeetings = meetingsCopy.sort((a, b) => a.startTime - b.startTime);

  //create mergedResult array
  let mergedMeetings = [sortedMeetings[0]]

  // compare each slot in sorted array
  // O(n)
  for(let i = 1; i < sortedMeetings.length; i++) {
    let currentMeeting = sortedMeetings[i];
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length -1];

    // if overlap, keep max endTime
    if(currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
    } else {
     mergedMeetings.push(currentMeeting);
    }

  }

  return mergedMeetings;
}
