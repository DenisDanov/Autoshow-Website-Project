# Auto Show Website - REST Spring Web Application

<div align="center">
  <img src="src/main/resources/public/images/logo.png" alt="Image Description">
</div>

<div align="center">
  <span>Deployed: <a href="https://uni-application.ddns.net/">HERE</a></span>
</div>

## Description


Welcome to Danov's Auto Show, a comprehensive platform designed to showcase vehicles with detailed, close-to-reality 3D models and specifications. It has user-friendly interface and provides seamless options to explore and inspect vehicles closely, allowing users to examine every detail. From advanced features to intricate designs, users can delve into the specifics of each vehicle, including their equipment and specifications.

Additionally, my project offers convenient functionalities such as user authentication with options to login and register. Users can also easily add vehicles to their favorites and place orders from a vast selection of over 25,000 different models available on the site.

Experience the world of automobiles like never before with Danov's Auto Show.

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- <details>
  <summary><b>Front-End</b></summary>

  - [<a href="#front-end">Register Page</a>](#register-page)
  - [Login page](#login-page)
  - [Home Page](#home-page)
  - [Auto Show Page](#auto-show-page)
  - [Showroom Page](#showroom-page)
  - [Cars Info Page](#cars-info-page)
  - [Profile Page](#profile-page)
- </details>
  <details>
  <summary><b>Backend</b></summary>

  - [Login System](#login-system)
  - [User Account Management](#user-account-management)
  - [Password Reset Functionality](#password-reset-functionality)
  - [Car Order Management](#car-order-management)
  - [Vehicle Favoriting System](#vehicle-favoriting-system)
  - [Restricted Access to Showroom Page](#restricted-access-to-showroom-page)
  - [Recently Viewed Section](#recently-viewed-section)
  - [Exception Handling](#exception-handling)
  - [REST APIs](#rest-apis)
  - [Token Cleanup Service](#token-cleanup-service)
  - [Newsletter Email Sender Service](#newsletter-email-sender-service)
  - [Expired Authentication Token Cleanup Service](#expired-authentication-token-cleanup-service)
  - [Single-Threaded Executor Service for Lock Removal](#single-threaded-executor-service-for-lock-removal)
  - [Email service](#email-service)
  - [Database](#database)
  - [Proxy Implementation](#proxy-implementation)
</details>

- [License](#license)


## Built With
<ul dir="auto">
<li><img src="https://img.shields.io/badge/Java-ED4236?style=for-the-badge&logo=java&logoColor=white" alt="Java"></li>
  <li><img src="https://img.shields.io/badge/Spring%20Boot-%236BB13D?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot"></li>
  <li><img src="https://img.shields.io/badge/Spring%20Data-%236BB13D?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Data"></li>
  <li><img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"></img></li>
  <li><img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"></img></li>
  <li><img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white"></img></li>
  <li><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img></li>
  <li><img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"></img></li>
  <li><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img></li>
  <li><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img></li>
  <li><img src="https://img.shields.io/badge/apache_maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white"></img></li>
</ul>


## Front-End

<details id="register-page">
<summary><h4>Register Page</h4></summary>

The registration process is straightforward and user-friendly, requiring users to provide essential information to create an account.


![Screenshot_386](https://github.com/user-attachments/assets/cfc975a8-77a4-4b96-875a-1069884ca687)



- Users are prompted to enter their desired username, valid email address, and password.
- Error handling mechanisms ensure data integrity and security:
  - Usernames must be unique; duplicate usernames are not permitted.
  - Email addresses must be unique, and valid email formats are required; duplicate or invalid emails are rejected.
  - Passwords must be at least 8 characters in length to ensure security.

Upon successful registration, users are automatically redirected to the login page, where they can access their newly created account using their credentials.

</details>

<details id="login-page">
<summary><h4>Login Page</h4></summary>

The login page provides a simple and secure gateway for users to access their accounts.


![Screenshot_387](https://github.com/user-attachments/assets/c0564b72-4518-4940-972c-ce2dd7b07b8e)



- Users are required to enter their username and password to log in.
- For users who have forgotten their password, there is an option to reset it via email:
  - If a valid email associated with an account is entered, an email containing a password reset link is automatically sent to that email address.
  - ![Screenshot_41](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/6cd4545a-490c-4e6b-869f-1a6c273b4407)
  - Upon a valid request, an email containing a unique link is sent to the user's registered email address.
  - ![Screenshot_32](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/4c446afb-01a3-42ee-96d7-e1fc649c4d86)
  - The link allows users to reset their password, ensuring a seamless and secure process.
  - ![Screenshot_388](https://github.com/user-attachments/assets/6f026e60-3795-4941-be83-435c964ce3b3)
  - Once 24 hours have elapsed or the password has been successfully changed, the link will expire, preventing further password changes.
- The login page features anti-bot protection to prevent unauthorized access and maintain security:
  - ![Screenshot_389](https://github.com/user-attachments/assets/8c15b865-25e2-4c8e-889a-1b70a117e844)
  - After 10 failed login attempts due to invalid username or password, the user is temporarily locked out from logging into the site for 30 minutes.
  - Continued failed login attempts result in an increased lockout duration; after 20 failed attempts, the lockout period is extended to 1 hour.
  - Additionally, if a valid username is entered but an invalid password, the associated account is locked out from logging in:
    - After 10 failed login attempts, the account is locked for 30 minutes.
    - After 20 failed attempts, the account remains locked for 1 hour, and the user is notified via email to inform them of the lockout due to potential unauthorized access.
- After successful login, users are redirected to the home page and successfully logged in to their accounts. Users will stay logged in for 7 days, after which their login session        expires, and they are automatically logged out.

</details>

<details id="home-page">
<summary><h4>Home Page</h4></summary>

![Screenshot_390](https://github.com/user-attachments/assets/fd041cdf-ab6b-4579-8f0f-37431c283ea8)
- The home page serves as the entry point to the website.
- It features a sticky header with navigation options to other pages of the site.
- Banner animation featuring sliding images of cars.
- Users can find a small preview showcasing some of the vehicles available on the site.
- Additionally, there's a "Recently Viewed" section displaying the last seen vehicles by the user.
  - Viewed cars are saved to the browser cookies if the user is not logged in; otherwise, they are saved to the database.
  - The list of viewed cars is updated every time a user views a car, regardless of their login status.
  - Also the user can add the vehicles to favorites, if they are logged in.
  - ![Screenshot_392](https://github.com/user-attachments/assets/58d379b3-8e89-45c5-b9b8-24e30e1be655)
- The footer section includes newsletter subscription functionality.
  - Users can subscribe to the site's newsletter by entering their email address.
  - The newsletter subscription functionality validates email addresses to ensure they are valid.
  - It also checks if the email is not already subscribed to the newsletter, preventing duplicate subscriptions.
  - ![Screenshot_394](https://github.com/user-attachments/assets/f8f2eb46-5614-44e5-b325-e8b29b381bbf)
  - ![Screenshot_29](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/d411375e-11e9-4e8a-a7a1-4c8d86cf1de5)

</details>

<details id="auto-show-page">
<summary><h4>Auto Show Page</h4></summary>

![Screenshot_395](https://github.com/user-attachments/assets/1618fe94-f6f9-417b-ac8e-fc28e2301b46)
- The Autoshow page showcases a collection of 9 cars available for viewing.
- Unregistered users can explore the featured cars and their specifications.
- Registered and logged in users have the additional functionality of adding cars to their favorites directly from this page.
- An "Order" button is available for registered and logged in users, allowing them to place orders for vehicles.
  - The "Order" functionality filters the available models based on the selected manufacturer and year.
  - Users can specify their preferences by selecting the manufacturer and year of the desired vehicle.
  - This feature streamlines the process of finding specific models tailored to the user's preferences.
    ![Screenshot_396](https://github.com/user-attachments/assets/1482aa2b-b48b-4ff4-b964-22d3b837b6f7)

</details>

<details id="showroom-page">
<summary><h4>Showroom Page</h4></summary>

![Screenshot_397](https://github.com/user-attachments/assets/19873bd7-e5ce-4492-836d-63a98c671c0b)
![Screenshot_398](https://github.com/user-attachments/assets/580c2707-54be-4178-a248-5ad8f0b48cfa)
- The Showroom page offers detailed 3D models of vehicles for immersive exploration.
- Users can inspect vehicles using two interactive functionalities:
  - Third-person camera control: Users can rotate and zoom the camera using mouse movements or touch gestures on phones.
  - First-person camera control: Users can navigate the scene using keyboard keys (W, A, S, D) and the mouse for direction and view control. On phones, navigation is facilitated through touch gestures.
- Additionally, a button is provided to access detailed information about the vehicle.
  - Clicking the "Vehicle Info" button redirects users to a page containing comprehensive specifications and equipment details for the selected vehicle.
- The Showroom page features functionality to restrict access to 3D models not available in the Autoshow.
  - If a user attempts to access a 3D model that is not featured in the Autoshow page, access is granted only if the model has been ordered or added to favorites.
  - Users without the model ordered or added to favorites are denied access to the model, ensuring exclusive access to authorized content.
  - ![Screenshot_74](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/ced1632d-9fba-49f4-971f-ed0722592061)


</details>

<details id="cars-info-page">
<summary><h4>Cars Info Page</h4></summary>

- The Cars Info page displays detailed data for the selected vehicle specifications.
  - ![Screenshot_399](https://github.com/user-attachments/assets/320f00e7-6305-4245-bd0c-98bb18e95dd5)
  - Access to this page is limited:
    - Users can view this page only if they have the specific vehicle ordered or added to favorites.
    - All users can view the specifications of vehicles listed on the auto show page. If the selected vehicle isn't on the auto show page, users won't have access to its specifications       unless they order the vehicle through the order menu or add it to their favorites.
    - ![Screenshot_74](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/ced1632d-9fba-49f4-971f-ed0722592061)


</details>

<details id="profile-page">
<summary><h4>Profile Page</h4></summary>

![Screenshot_400](https://github.com/user-attachments/assets/5d856ff3-3d4e-4e6a-83d9-9a0341db51a8)

- The Profile page is exclusively available for logged-in users, offering a range of functionalities for account management and vehicle tracking.
- Users can easily modify their account information with three primary functionalities:
  - Change Username: Users have the option to update their username to better suit their preferences or reflect changes.
  - Change Email: Users can modify their email address for account communication and verification purposes.
  - Change Password: Users can securely update their account password for enhanced security.
  - ![Screenshot_401](https://github.com/user-attachments/assets/4671d0ef-e006-455f-a655-99c8ea6596e3)
  - Additionally, users have the option to request a password reset via email, where a unique link will be sent valid for 24 hours, along with the option to reset their password.
- The Profile page also features sections to track favorite and ordered vehicles:
  - Favorites Vehicles: Users can view a list of vehicles they have marked as favorites for easy reference and future exploration.
  - ![Screenshot_402](https://github.com/user-attachments/assets/313c0acf-5357-4a32-bf1f-512457a54615)
  - Ordered Vehicles: Users can access a comprehensive list of all vehicles they have ordered, providing transparency and tracking capabilities for past orders.
    - ![Screenshot_403](https://github.com/user-attachments/assets/9371595a-7cc1-486b-a44a-3b1e959de880)
    - Orders on the platform have three statuses:
    - Completed: Users can explore their ordered car once it's marked as completed.
    - Pending: Indicates that there isn't an available model on the site for that specific order.
    - Expired: Occurs after 7 days pass without an available model to fulfill the order.
    - Additionally, the Profile page features three functionalities for managing orders:
      - Cancel/Delete Order: Allows users to cancel and delete the order.
      - Change Order: Users can change the model to another one based on their selection.
        - ![Screenshot_37](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/e5fe5af1-fc7c-4610-8cfb-ac0d66ef9c79)
      - Remake Order: Available for expired orders only, this functionality allows users to order the same model again, extending the order's validity by another 7 days, or choose a different model.
        - ![Screenshot_38](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/a5d12b5b-8a56-4a99-99bc-5f824936f717)
     - When users change their order, the update occurs immediately and is reflected live on the site.

</details>

## Backend

- #### Login System:
  - Upon successful login, the system generates a unique JWT authentication token.
    - This token is stored in the user's cookies and expires after 7 days.
    - Additionally, the token is saved in the database for appropriate secured authentication.
   - The system provides multi-session login:
      - Users can log in from multiple devices simultaneously.
      - When a user logs in on one device and then logs in on another, the authentication token is provided to both devices and sessions.
      - This is possible via recycling of authentication tokens:
          - If an authentication token already exists for the user, it is replaced with a new one.
          - The replaced token, which signifies the user's login from a new device, is stored in a separate database table. This token is then linked to the user who replaced it when               logging in from the new device, enhancing security measures and ensuring that the replaced token will be useful only for that user
          - When the user accesses the site with a valid, non-expired replaced token that references their account, the token is automatically updated with the new authentication                   token. Otherwise, the update cannot be made.
          - Expired replaced tokens are automatically removed from the database, similar to the original authentication tokens.
    - Anti-bot handling protection is implemented to handle too many failed login attempts:
      - It locks user sessions from further login attempts after a threshold is reached.
      - User accounts are locked if a valid username is provided but multiple failed login attempts occur.
      - Correctly handles lock timers and prevents any actions until the timer has expired.

- #### User Account Management:
  - Implemented features for securely changing user username, email, or password:
    - Ensures the new username provided by the user is not already taken.
    - Ensures the new email provided by the user is valid and not already taken.
    - For password changes, checks if the current password provided by the user is correct.
    - Requires the new password to be at least 8 characters long.
    - Changing of username, password, or email is possible only when provided with a valid and correct authentication token and user ID.

- #### Password Reset Functionality:
  - Users can request a password reset.
  - A unique password reset token is generated and associated with a reset link.
  - The reset link is valid for 24 hours.
  - After the expiration of 24 hours, the reset link becomes invalid.
  - Additionally, if the user changes their password, the reset link becomes invalid.

- #### Car Order Management:

  - The backend implements a secure API for handling car order requests, including GET, ADD, REMOVE, or MODIFY operations. Each request requires a valid authentication token associated with the user.

  - When a user attempts to make a car order, the system checks if the order already exists. If the order exists, an appropriate message is sent to notify the user, indicating that the order already exists.

  - If the order does not exist, it is added to the car orders table in the database and associated with the user who placed the order.

  - For removing a car order, exception handling ensures that the car order exists before proceeding with the removal process.

  - When modifying a car order, extensive error handling is implemented. The system ensures that the car order exists and that the new modified order does not match any existing orders. If the modifications are valid, the order is updated accordingly.

  - Users have additional options when modifying their current order:
    - They can make the same order if their current order has expired. This action increases the order's expiration date, making it valid for an extended period.
    - They can modify their current order to a new one, providing flexibility in managing their car orders.

- #### Vehicle Favoriting System:

  - The backend implements a secure API for handling requests related to favoriting vehicles, including adding vehicles to favorites, removing them, or retrieving all favorite vehicles. Each request requires a valid authentication token associated with the user.

  - When a user attempts to add a vehicle to their favorites, the system checks if the vehicle is already in the favorites collection. If the vehicle exists, an appropriate error message is returned, indicating that the vehicle already exists in the favorites collection. If the vehicle doesn't exist, it is correctly added to the favorites table in the database, associated with the user who made the request. This ensures that all added favorite vehicles are specific to the user.

  - Removing a favorite vehicle also involves error handling. The system verifies that the vehicle exists in the user's favorites collection. If the vehicle exists, it is removed from the collection, and a success message is returned to inform the user of the successful removal. If the vehicle doesn't exist, an appropriate error message is returned.

  - When the client makes a GET request to retrieve all favorite vehicles, the backend returns a list of all favorite vehicles associated with the user. Each vehicle is accompanied by its ID, image, and name, facilitating the update of the website to correctly display the favorited vehicles.

- #### Restricted Access to Showroom Page:
  - The showroom page showcases a selection of 9 vehicles that are accessible to all users.
  - However, access to the complete inventory of vehicles is restricted.
  - Users must either:
    - Have ordered the vehicle through the car order management system.
    - Have added the vehicle to their favorites using the vehicle favoriting system.
    - This restriction ensures that only users who have expressed specific interest in a vehicle can view its details beyond the initial selection on the showroom page.
    - Users who attempt to access restricted vehicles without meeting the criteria are prompted to either place an order for the vehicle or add it to their favorites for access.
    - This approach enhances user engagement by encouraging interaction with the platform and ensures that showroom visitors are genuinely interested in exploring additional vehicle           options.

- #### Recently Viewed section
  The "Recently Viewed" section of the website is designed to showcase the cars that the user has recently viewed in the showroom. Here's how the logic works:

1. **Tracking Views**: 
    - Every time a user views a car in the showroom, a secure API call is made to the server.
    - This API call adds the specific vehicle to the "Recently Viewed Cars" collection of that particular user.
    - Before adding the car, the system checks if the car is already in the "Recently Viewed" list.
    - If the car is already present, it moves the car to the first position in the list, ensuring that the most recently viewed cars are displayed first.

2. **Database Storage**: 
    - The recently viewed cars are stored in a specific database table.
    - This table is connected to each user, ensuring that the recently viewed cars are associated with their respective accounts.
    - Storing this information in the database allows users to access their recently viewed cars even if they log into their account from another session or device.
    - The data stored in the database has an expiration period of one month.
    - After one month, the viewed cars' data is automatically deleted from the database, ensuring that users have access to their recent views for a limited time only.

3. **Session Storage**: 
    - Additionally, the vehicles viewed by the user are saved to their session.
    - Sessions are set to expire after one month, aligning with the expiration of the data stored in the database.

4. **Resetting the Recently Viewed Section**: 
    - After one month, both the session containing the recently viewed cars and the data in the database expire.
    - This automatically resets the "Recently Viewed" section for the user, clearing out the previously viewed cars.

   This approach ensures that users have quick access to the cars they have recently viewed, allowing them to easily revisit their favorite models or continue exploring new ones.

- #### Exception Handling:
  - Implemented exception handling to manage and respond to errors that occur during system runtime.
  - Provides appropriate error messages for invalid credentials or requests, informing the user of the issue.
- #### REST APIs:
  - Implementation of a secured REST API for accessing data from the database to the client.
  - For every request to the database that contains user data, a valid authentication token is needed along with the user ID.
  - Additional authentication handling ensures that the provided token is made for that specific user ID.
  - Example of successful requests made for the user's orders and favorite vehicles:
    - ![Screenshot_187](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/4854864d-8b16-4712-a622-eb1bd568bf39)
    - ![Screenshot_186](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/85c550eb-6fa9-4b2b-8a72-8c10b71f8d79)
  - Custom car data API:
    - Implemented a custom car data API that returns over 500 different car manufacturers from a local JSON file.
      - When no make or model is provided, it returns every car make available for selection on the site:
        - ![Screenshot_184](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/2dfedba3-8c8c-4a8d-bc00-7e89f4160fb7)
      - Filters the correct models for the selected manufacturer:
        - ![Screenshot_185](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/f2b6c267-c1d0-495b-8ac1-ce5f92c7e611)
      - Additionally returns detailed information about the vehicle when given make,model,year:
        -  ![Screenshot_183](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/2cab4832-f62f-4605-98b2-ed785e4a152c)

- #### Token Cleanup Service:
  - Responsible for removing expired password reset tokens from the database.
  - Removes expired recently viewed cars tokens.
  - Ensures data integrity and security.
  - Scheduled to run periodically to clean up outdated tokens.
- #### Newsletter Email Sender Service:
  - Runs every day at midnight.
  - Checks for newsletter emails needing to be sent, particularly those not receiving emails in the past two weeks.
  - Sends emails to eligible subscribers for timely communication.
- #### Expired Authentication Token Cleanup Service:
  - Scheduled to run periodically.
  - Cleans up expired authentication tokens from the database.
  - Maintains system efficiency and prevents clutter in the database.
- #### Single-Threaded Executor Service for Lock Removal:
  - Scheduled to remove locks of users locked out due to too many failed login attempts.
  - Executes periodically and once at application start to handle expired locks from previous instances or restarts.
  - Ensures security and accessibility of user accounts by managing lockout mechanisms effectively.
- #### Email service:
  - Implemented an automatic email service that sends emails for various events:
    - Password reset requests.
    - User subscription to the newsletter.
    - Newsletter emails.
    - User account lockout due to too many failed login attempts.
      - ![Screenshot_64](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/e3919d11-b8e2-461d-8f09-eba7a4fc0b51)

- #### Database:
  - Utilized MySQL database in conjunction with Hibernate for all database queries.
  - Hibernate provides an efficient and streamlined approach to interacting with the database, ensuring optimal performance and security.
  - Implemented robust database schema design to efficiently store and manage data for the application.
  - Below is the database diagram illustrating the structure and relationships of the database tables:
  - ![Screenshot_178](https://github.com/DenisDanov/Autoshow-Website/assets/122882697/e7a714d4-c0fc-4182-809f-c2442224934c)

- #### Proxy Implementation
  - Implemented a proxy to fix the CORS (Cross-Origin Resource Sharing) problem.
  - The proxy enables requests to third-party APIs, ensuring seamless integration with external services.
  - This solution enhances the functionality and flexibility of the application by enabling access to external resources securely.

<details id="license">
<summary><h4>License</h4></summary>
<h4>MIT License</h4>
Copyright (c) 2024 Denis Danov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</details>
