<img src="https://65239-175590-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/11/Cyrrup_Logo.png" style="width: px; height: px;" alt="Cyrrup" align="right" height="48" width="48" >
# [Cyrrup Solutions Pvt. Ltd.](https://www.cyrrup.com/)
<br>
# Challenge No: 2018062501

## Team Blogging Site
**Goal**
To build a team blogging platform which could be used by a small team for internal blogging and sharing information among themselves.

**Functional Specifications**
* Login/Logout: A user needs to login into the platform to use it.
* User Profile: A user will have a basic profile page containing User name, User Profile Image and a description section. The user should be able to change the content of the profile page and should be able to update and delete the profile image.
* User Blogs List: Each user will have a list of articles containing the *Title* of the article in a reverse-chronological order.
* Blog Article: Blog Article contains a Title/Heading , content section, Day and time of publishing and Creation date and time.
* Editing of articles: The Article author is authorised to edit their own article. On submitting the eddited article the publish Day-Time updates to the new update day and time.
* Other users list: A user should be able to see the list of other team members registered into the system.
* Other users blogs: A user should be able to view other users blogs and their publishing and creating dates. A user should not be authorised to update edit or delete other users blogs and other details.
* User profiles view: A user should be able to view other users profile but should not be allowed to change anything there.

**Technical Specifications:**

* Single Page Application using Vue.js
* Node.js based authentication api server. 
    * JWT Token based authengication 
    * [JWT compliant with firebase specification](https://firebase.google.com/docs/auth/admin/create-custom-tokens#create_custom_tokens_using_a_third_party_jwt_library).
    * Use of database to store username and password is optional. 
* Use [Cloud Firestore database](https://firebase.google.com/docs/firestore/) for storing the platform data.
* Use [Cloud Firestore Triggers](https://firebase.google.com/docs/functions/firestore-events) implementing the backend logic.
* Authenticate Firebase/firestore client using [custom authentication system](https://firebase.google.com/docs/auth/web/custom-auth)
* Use [Firebase Cloud Storage](https://firebase.google.com/docs/storage/) for storing images. 

**Resource Access**

* Firebase project:  [Cyrrup Web Challenge](https://console.firebase.google.com/project/cyrrup-web-challenge/)