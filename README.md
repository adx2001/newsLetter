# newsLetter
This is a simple newsletter subscription application built with Node.js, Express, and Mailchimp API integration. 
It allows users to subscribe to your newsletter by providing their first name, last name, and email address.

Getting Started
Prerequisites-
Before running the application, make sure you have the following installed:

Node.js
npm (Node Package Manager)

------------Installation---------
Clone the repository to your local machine:-

git clone https://github.com/adx2001/newsLetter.git
cd newsLetter
npm install

Configuration:-
Replace 'YOUR_MAILCHIMP_API_KEY' in the app.post('/submit'...) route with your actual Mailchimp API key.
Replace 'YOUR_MAILCHIMP_LIST_ID' in the app.post('/submit'...) route with your actual Mailchimp list ID.

npm start:-
Open your web browser and go to http://localhost:3000/index to access the subscription form.
Enter your first name, last name, and email address, and click the "Subscribe" button.
Depending on the subscription status, you will be redirected to a success page or a failure page.

Routes:-
/index: The main subscription form.
/submit: Handles the form submission and subscribes users to the newsletter.
/failed: Redirects to the index page in case of a subscription failure.
/success: Displays a success message when a user is successfully subscribed.

Contributing:-
Contributions are welcome! If you find a bug or have suggestions for improvements, please create an issue or submit a pull request.

Acknowledgments:-
Built with Express.js
Mailchimp API integration
HTML/CSS templates for subscription and result pages

#index
![Screenshot (24)](https://github.com/adx2001/newsLetter/assets/64160737/f8dfe592-f245-4e24-91a4-ae910eed13ad)

#success
![Screenshot (25)](https://github.com/adx2001/newsLetter/assets/64160737/3b2c4d19-d1c6-457b-a823-155d85c813b4)

#failed
![Screenshot (26)](https://github.com/adx2001/newsLetter/assets/64160737/a8084d85-4b4d-491b-bdeb-6a30aefd2a4e)

#mailchimp dashboard
![Web_Photo_Editor](https://github.com/adx2001/newsLetter/assets/64160737/d72e563c-e85f-47f4-af42-5c05ed6fb51f)
