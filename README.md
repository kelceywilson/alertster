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
- Make a way to reset the seach & filter without (clear (getAllAlerts) button)
- Create EditAlert component
- Create AlertDetails component (to expand inside Alert-Div)
- Show 'Delete Alert' button only on alerts created by the current user
- Add user license to all pages
- Deploy alertster to Heroku
- Split earlier commits
- Upgrade FileUploader to allow users to choose a different photo before submitting alert
Update AngelList
Write tests for alertsAPI
study You Don't Know JS - ch 2
- write some tests for alertster
- send alertsAPI errors to res.json
- handle alertsAPI errors in alertster
- when alert deleted/expired delete photo from - cloudinary + alertsAPI
- restrict file uploads to photos and limit size - cloudinary + alertster
- limit getAllAlerts to ten at a time and add Show More button to bottom of alert-div to request next 10
- integrate stripe

# ICEBOX
- email alert post confirmation
