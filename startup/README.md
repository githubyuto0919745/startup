# Yuto Akatsuka

[My Notes](notes.md)

>DietBuilder helps users calculate their Recommended Dietary Allowances (RDA) from their height, weight, and goals. By logging meals, it highlights nutrient gaps and makes nutrition tracking simple.

<!--  A brief description of the application here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->




<!--[!NOTE]
This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.-->

<!--[!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.-->

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [×] Proper use of Markdown
- [×] A concise and compelling elevator pitch
- [×] Description of key features
- [×] Description of how you will use each technology
- [×] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

>DietBuilder is a smart nutrition-tracking application that helps users manage their dietary intake with ease. By entering their height, weight, and goal weight, users can instantly calculate their Recommended Dietary Allowances (RDA). They can then log the foods they eat throughout the day, and DietBuilder will compare their intake against RDA targets to highlight any nutritional deficiencies. Whether you’re looking to maintain weight, gain muscle, or improve your overall health, DietBuilder provides clear guidance and actionable insights to keep you on track.

<!--Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->

### Design

![Design image](Dietbuilder_logo.png)
![Design image](plan.jpg)

<!--Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->

<!--```mermaid
sequenceDiagram
    actor You
    actor Website
    You->>Website: Replace this with your design
``` -->

### Key features

>- Log in and sign up
>- Search flights by destination and date, withprice ordering
>- Display the total price including luggage, meals, Wi-Fi, and any extra services

### Technologies

I am going to use the required technologies in the following ways.

>- **HTML** -Build the structure for input forms (height, weight, food logs) and display nutrition analysis results.

>- **CSS** - Design a clear and simple interface, and style the logo in an appealing way.

>- **React** -Create reusable components for logging food, displaying RDA results, and navigating between pages (login, dashboard, history).
>- **Service** - Handle backend logic for user authentication, food database queries, and RDA calculations.
>- **DB/Login**
- Store user profiles, login credentials, daily logs, and historical nutrition data securely.
>- **WebSocket** - Provide real-time updates for shared or collaborative features (e.g., live progress sharing or quick syncing across devices).

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** -I created 4 pages: login.html, profile.html, dietinput.html, and graph.html.
- [x] **Proper HTML element usage** - I used elements such as nav, div, select, and option to structure and display content across the pages.
- [x] **Links** -I linked all 4 pages using header titles for easy navigation.
- [x] **Text** -I created sections for users to input information to verify their account.
- [x] **3rd party API placeholder** - I added a placeholder for a nutrition API in dietinput.html.

- [x] **Images** - I inserted icons and a logo to enhance the visual presentation.
- [x] **Login placeholder** - I implemented a login input and a placeholder function to demonstrate where user authentication will occur.
- [x] **DB data placeholder** - I added a placeholder to show where user data from a database, such as profile information and saved diets, will appear.
- [x] **WebSocket placeholder** - I added a placeholder to show where calorie tracking or live graph data will appear in real-time.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** -I added a logo, adjusted font color and positions, included a background image for the main section, and placed each input button.
- [x] **Navigation elements** - I removed link underlines, changed font color, and positioned the navigation links on the left side.
- [x] **Responsive to window resizing** - I adjusted the width, height, margins, and layout of elements so they adapt properly when the window is resized.
- [x] **Application elements** -I added input fields, buttons, and tables to allow users to interact with the app.
- [x] **Application text content** - I added labels to clearly describe each section and input field.
- [x] **Application images** -I added background images, logos, and icons to enhance visual design.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I have download vite to display 
- [x] **Components** - I changed html to jsx and import between the files.
- [x] **Router** - I used Router to connect each pages 

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** -I implemented four different unit conversions to calculate BMI and TDEE, then used these values to display the Recommended Daily Allowance (RDA) for protein, carbohydrates, and fats.
For the search feature, I implemented functionality to display data results, allow users to select food items and specify quantities, and save this information to the intake list. The system then calculates and displays the total calories, protein, carbohydrates, and fats. Finally, the app generates graphs based on both the user’s profile and intake data for visual analysis.

- [x] **Hooks** -I used the React hooks useState, useEffect, and useNavigate. These were mainly used to manage user input, update data automatically, and navigate between pages.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** -I wrote backend code using Express with endpoints for signup, login, and logout.
- [x] **Static middleware for frontend** -I included express in the backend to serve frontend files.
- [x] **Calls to third party endpoints** - I added diet apis as well
- [x] **Backend service endpoints** - Endpoints for registration, login, and logout are implemented.
- [x] **Frontend calls service endpoints** - React frontend makes fetch requests to the backend endpoints.
- [x] **Supports registration, login, logout, and restricted endpoint** - The frontend and backend handle registration, login, and logout logic.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Stores data in MongoDB** - I coded to store profile data into mongo with login account
- [x] **Stores credentials in MongoDB** - I coded to store user acount information into mongo

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.





