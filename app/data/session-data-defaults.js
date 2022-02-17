/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  attendeename:'Jane Doe',
  attendeerelationship:'Support worker',

  historyofcondition:'test',
   evidenceused:'test',
  
  // movingaroundNotes:'jdiwjiidwjiqdi',
  // movingaroundReason:'jdjwodwoj',

  movingaroundSelect:'Can stand and then move more than 1 metre but no more than 20 metres, either aided or unaided'
  // Insert values here

}
