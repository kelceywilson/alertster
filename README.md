# alertster
## THIS IS A WORK IN PROGRESS

alertster will make it easy for users to post and view a wide variety of advertisements, and facilitates payments between buyers and sellers.

- To set up:
`> npm install`

- To run (on localhost:3000):
`> npm start`

## alertsAPI
This app interfaces with alertsAPI, which can be found here:
https://github.com/kelceywilson/alertsAPI

### TODO
- Show 'Delete Alert' button only on alerts created by the current user
- Make alertDetail editable
- Fix type selector so that type must be selected to submit new alert
- Add user license to all pages
- Split earlier commits
- Write tests for alertsAPI
- write some tests for alertster
- send alertsAPI errors to res.json
- handle alertsAPI errors in alertster
- when alert deleted/expired delete photo from - cloudinary + alertsAPI
- restrict file uploads to photos and limit size - cloudinary + alertster
- limit getAllAlerts to ten at a time and add Show More button to bottom of alert-div to request next 10
- integrate stripe

# ICEBOX
- email alert post confirmation
