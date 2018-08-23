var request = new XMLHttpRequest();
request.open('GET', 'https://api.meetup.com/opentechschool-zurich/events?&sign=true&photo-host=public&page=20');
request.responseType = 'json';
request.send();

request.onload = function() {
  var events = request.response;
  console.log('events', events);
}
