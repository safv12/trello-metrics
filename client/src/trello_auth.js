Trello.authorize({
  type: 'redirect',
  name: 'trello_metrics',
  scope: { read: true, write: true },
  expiration: 'never',
  success: function() { console.log('Succesful authentication'); },
  error: function() { console.log('Failed authentication'); }
});
