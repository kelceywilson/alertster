# alertster

Project in progress - using README for planning right now

- To set up:
```
> npm install
> npm start
```
## Break the UI into a component hierarchy
- App (App)
  - Menu (Menu)
  - Alert Container (AlertContainer)
    - Submit a New Alert (NewAlert)
    - Search (Search)
    - Filter (Filter)
    - Alert List (AlertList)
      - Alert (Alert)
      - Detail (Detail)
  - Footer FooterComponent

## Build a static version in React
- [x] App
  - [x] Menu
  - [x] AlertContainer
    - [x] NewAlert
    - [x] Search
    - [x] Filter
    - [x] AlertList
      - Alert details

## Identify the minimal but complete representation of UI state
- filter values {} - filter option key using boolean values
- search text []?
- new alert {}
  - (prolly shift it into current dom?)
  - but... this will grow to some max size by fetching of n rows at a time [look at component lifecycle]

### These are not state
- alerts [] - original list of alert objects
  - *** NOT STATE - passed in from a parent via props
- filtered alerts [] - filtered list of alert objects
  - *** NOT STATE - can be computed from alerts
- user {}
  - *** NOT STATE - passed in via props
  - logged in v. empty
- menu {}
  - *** NOT STATE - passed in via props

## Identify where the state should live
What components render something based on the alerts state?
- AlertList
- Filter
- Search
- NewAlert

What is the common owner component?
- AlertContainer

## Add Inverse Data Flow
???

check out flux model
dan abramrov - videos on egghead, etc.

## Figure out data model
- users (
  id SERIAL PRIMARY KEY,
  first_name varchar(50) NOT NULL,
  last_name varchar(50),
  display_name varchar(100),
  username varchar(50) UNIQUE,
  email varchar(50) UNIQUE NOT NULL,
  password varchar(255) NOT NULL,
  biographical varchar(255)
);

- alerts (
  id SERIAL PRIMARY KEY,
  alert_type varchar(15) NOT NULL,
  address varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  state varchar(2) NOT NULL,
  zip varchar(10) NOT NULL,
  county varchar(50) NOT NULL,
  public BOOLEAN,
  title varchar(100) NOT NULL,
  body text,
  photo_url text NOT NULL,
  note text
);

## Create api to add alerts and add users


## Jest for testing?  Enzyme?
