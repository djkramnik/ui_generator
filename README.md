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


## Sections to simulate (provides context to components )

sidenav, navbar, hamburger menu, menu-section,
search-results, result-filters, title, description, 
profile, avatar, video-controls, recommends, comments, hero:video, 
nav-link, lander:section:marketing, lander:section:photo-collage, 
contact-form, footer, form:login, data-table, table-controls, modal:form,
card-option, modal:upload, list:links, marketing:carousel, secondary-nav, 
links-bar, product-metadata, report-issue/help, technical-details, 
disclaimer, legalese, customer-reviews, search-pane, product-confirmation, 
order summary, order item, order detail, radio group, button-options,
cookie-popup, popup, hero, tabs, removable-card, graph, filters, 

## Components (do not comment on context)

button:icon:labelled, button:icon:unlabelled, button:text:hasicon,
card, heading, copy, searchbar, logo, icon:hamburger, icon:settings,
category-filter, copy:metadata, media-preview, thumbnail, video-player, play, next, audio, 
button:option, icon:cc, card:expandable, media-metadata, comment, input, icon:like,
icon:dislike, button:text:no-outline, button:text, qr-code, image, grouped-info(?), 
address, social-icons, table-row, secondary-links, pagination, table-header 
dropdown, input:time, textarea, image-download, flow-progress-bar, 
input:cc-number,input:cc-expiry, input:cc-cvc, file-upload,
carousel, link, link:card, nav:dropdown, region:toggle, icon:cart, icon:right,
icon:left, search-result, price, accordion, rating, locale-switcher,
input:radio, input:checkbox, svg-decoration, {back to top (the literal text bro)},
menu-item:icon, button:toggle, 


some labels should only be found out in the context of other sections... 

what is actually needed for these workflows... 
you need not just the visual understanding but also semantic. 
ie. back to top bar with small centered font.  what the hell is that 




## Roadmap 
- [x] create script to extract all custom styles from a given element on page... for the purpose of grabbing mock assets for use in the simulator.
- [ ] create highly configurable versions of the above sections
- [ ] have templates for page types to simulate
- [ ] have script, or perhaps server side rendering logic to procedurally generate pages upon request
- [ ] for now just desktop width (1300x635). strictly non responsive. later on; generate for both mobile and desktop


