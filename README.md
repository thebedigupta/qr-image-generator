# Url-into-qr-image-converter

Hey everyone in this project I have created a complete web app where a user can enter any URL and then a QR image will be generated based on the URL that is entered by the user.
![website-look](/front-end/assets/website-look.PNG)

## What things I am used

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png" height = 300px Width = 300px>
</picture>

In this project, I created a front end using basic HTML, CSS, and Javascript, and for the back end, I am using NodeJS and ExpressJS, mainly using two npm packages. The first is inquirer, which strives to be an easily embeddable and beautiful command-line interface for Node.js and the second is qr-image This is yet another QR Code generator, and for connecting both ends, I am using the HTTP protocol.


### How to run in your local machine
```````
Step 1: When you are downloading all files I will prefer to download in Zip files.
Step 2: Before running this in your local machine you have to install NodeJS.
Step 3: Go to the backend folder and target your git terminal in your back end and run this command "npm i inquirer qr-image.
Step 4: Now you can see some files will be downloaded and three new files will be created name as package.json, Package-lock.json.
Step 5: Now you have edit package.json file and there you have to write "type":"module" over dependencies inside javascript object curly braces.
```````