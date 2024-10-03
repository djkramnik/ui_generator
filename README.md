## Thee Bart, Thee

Experimenting with procedural generation of user interfaces, for another project I'm cooking. 
Uses some custom code for writing responsive media query styles inline in react components. 
React, NextJS and styled components doing the heavy lifting.

## Inspirations
1. youtube deejay * 
2. youtube vid upload * 
3. educational admin work * 
4. educational course registration * 
5. amazon purchase (logged in) * 
6. stripe login and dashboard read * 
7. stripe login and create new account *
8. get insurance quote from geico + one other? 
9. look up email in gmail 
10. pay for parking at green p parking
11. log in to whats app(?) or messenger.com and send a message
12. check a specific sports score via google search
13. check a specific sports score via espn 
14. check for medicare plan on that site the caribou-ers use 
15. register for course on code ninja
16. register for course on udemy 

Avoid going overboard with hierarchies 

## Page types to simulate
dashboard:empty, search-results, video-page,
admin-page, 
lander:business, platform:login, platform:management, 
signup:flow, signup:payment, signup:confirmation, checkout-page, product-added page, 
sign in page, forgot password page, 
lander:ecommerce,

## Sections to simulate (provides context to components)
- [x] navbar
- [x] sidenav
* footer
* hero carousel
* lander two col
* lander center
* lander testimonials
* sign in/ sign up workflow
* search results
* cookie popup
* bottom up popover
* squarespace type hero
* comments
* media recommends
* wiki section
* table of contents
* news directory
* news story
* news / blog article
* file upload modal
* three col cards
- [x] dashboard template
* dashboard section (heading, icons)
* dashboard list with options
* dashboard two col cards
- [ ] table filters
- [ ] dashboard table
* secondary nav
* shopping cart summary
* products card
* product section
* purchase confirmation section
* side login (ie rbc)
* email list (gmail)

## Super components
* thumbnail
* special searchbar
* video player
* share button
* thumbsup, thumbsdown
* card
* comment
* add-comment
* menu
* nested collapsible list
* article paragraph
* captcha
* file uploader
* legalese
* toast/notification
* activity timeline
* workflow progress
* cart button with num
* product
* list o links
* star rating
* price
* discount ui
* slider
* cart item
* checkout add ons
* order summary
* time filter
* password w eye
* links card
* help bar?
* important info card
* collapsible menu item
* icon option (icon +)
* refresh icon
* select all
* scroll to top
* content progression
* social media links
* download app
* decorational phone(ie stripe)
* reddit posts card
* comment textarea
* circle loader
* box score
* standings
* sport score
* code snippet
* avatar

## schedule

### day zero
* dashboard template [x]
  - [x] navbar
  - [x] sidenav
    - [x] menu
      - [x] menu item,
      - [x] collapsible menu item
  - [x] circle loader
  - [x] toast
  - [x] dashboard table
  - [x] dashboard table filters

### day one (wed)
- [x] footer
- [x] hero carousel
- [x] lander two col
- [x] lander center
- [x] lander testimonials 
- [x] sign in/ sign up workflow

### day two (rsday)
- [ ] random forms
- [ ] search results
- [ ] cookie popup
- [ ] bottom up popover
- [ ] squarespace type hero
- [ ] comments

### day three (sunday)
- [ ] media recommends
- [ ] wiki section
- [ ] table of contents
- [ ] news directory
- [ ] news story
- [ ] news / blog article

### day four (monday)
- [ ] file upload modal
- [ ] three col cards
- [ ] dashboard section (heading, icons)
- [ ] dashboard list with options
- [ ] dashboard two col cards
- [ ] secondary nav

### day five (tuesday)
- [ ] shopping cart summary
- [ ] products card
- [ ] product section
- [ ] purchase confirmation section
- [ ] side login (ie rbc)
- [ ] email list (gmail)

## Roadmap 
- [x] create script to extract all custom styles from a given element on page... for the purpose of grabbing mock assets for use in the simulator.
- [ ] create highly configurable versions of the above sections
- [ ] have templates for page types to simulate
- [ ] have script, or perhaps server side rendering logic to procedurally generate pages upon request
- [ ] for now just desktop width (1300x635). strictly non responsive. later on; generate for both mobile and desktop


