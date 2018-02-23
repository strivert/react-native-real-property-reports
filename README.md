# Fort Reports Development Notes
The app needs to read and write to the SQLite database stored internally in the app. There are four main pages to the app. Below is a description of each and the database tables it interacts with.

## Setup - Reports & User
Reports page shows a list of all of the report addresses on the left and a form to add/edit report addresses on the right.
User page is a single form that allows the user to edit their profile information and purchase credits. 
![proto](https://content.screencast.com/users/prageer/folders/Default/media/92bdaf08-abf0-49b2-856a-c594f4b182b3/fort2.png)

## Report
This page is the most complicated. This is where the user creates their report. On the left is a list of categories. On the bottom is buttons for each section of the house. Each section has it’s own list of categories. On the right is the list of selections for the selected category, and the details button leads to a second list of selections for the selected category. ![proto](https://content.screencast.com/users/prageer/folders/Default/media/acf4f191-722b-4be7-950c-7e4436b57d32/fort3.png)

## Reports - Camera
Clicking the camera icon on the top right of the reports page  opens the camera window. Users can take up to 4 images for each category. Users can also draw on the image by clicking the draw button and using their finger to draw circles and arrows on the image
![proto](https://content.screencast.com/users/prageer/folders/Default/media/2a9d8db9-9988-4668-ba7d-c6cb81b585ef/fort-report.png)

## Preview
On this page the user can preview the report they have created . They can see the whole report at once , or click the section buttons at the bottom to preview just that section. The preview will show the images (up to 4) and the report data for each category.
![proto](https://content.screencast.com/users/prageer/folders/Default/media/ee943f30-ade2-42a8-b1d6-9bb51e610155/fort-preview.png)

## Run it locally

To install, there are two steps:

1. Install Exponent XDE [following this guide](https://docs.getexponent.com/versions/latest/introduction/installation.html).
Also install the Exponent app on your phone if you want to test it on
your device, otherwise you don't need to do anything for the simulator.
2. Clone this repo and run `npm install`
  ```bash
  git clone https://github.com/prageer/react-native-FortReports.git

  cd react-native-FortReports
  npm install
  ```
3. Open the project with Exponent XDE and run it.