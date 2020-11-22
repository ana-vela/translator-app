# User Experience Documentation

## Purpose

This web application uses a translation API to create a streamlined and user-friendly language translator.

## Audience

The app will be geared primarily toward tourists on the go, but the ease of use will make it an attractive option for anyone needing to translate words, phrases, or texts.

## Goal

This site will allow users to select their input language, enter a word, phrase, or text, and receive a translation.

## Persona Number One

### Name

Cynthia Patterson

### Age

20

### Location

Florence, Italy

### Profession

Cynthia is a student majoring in International Relations at the University of Oklahoma. This semester she is studying abroad at the University of Florence.

### Technology

The summer before she went off to college, her parents bought her a fifteen-inch Dell Inspiron 5000 with an Intel Core i5 processor. She uses this laptop for school work and entertainment when she is in the dormitory and takes her iPhone SE (running on iOS 13.4) when she goes out.
Cynthia has taken a few Computer Science courses and is considering double majoring in it, so she has an advanced level of competency when it comes to technology.

### Attitudes and Behaviors

Because she took four years of Italian in high school and was a serious student, Cynthia was able to test out of the first two semesters of her university’s foreign language requirement. She completed the two remaining semesters last year and attended the weekly graduate student-led conversation group during the Fall 2019 semester.
Cynthia is well informed and politically engaged, so she appreciates having discussions and healthy debates with anyone who is interested. Her time abroad has allowed her to experience the world as an “outsider” and talk to people who have challenged many of her basic assumptions, all while forcing her to put her Italian to use.

### Frustrations and Needs

While Cynthia has a much higher level of competency in the language, she is not completely fluent in Italian. Oftentimes when she is having a conversation with one of her Florentine friends, she hits a vocabulary road block and either has to rely on her friends’ English fluency or just abandon the thought she was trying to express.
She has tried a few English-Italian dictionary apps, but she finds the user interfaces to be too complicated and too slow to load. She would much prefer something that has fewer bells and whistles and doesn’t require full-page reloads.

### Goals

Cynthia will be using her translator app on the go, so she needs something without a clunky interface. Because she doesn’t want to slow down her conversations with slow load times either, a single page application would be preferable.

### User Story

Cynthia Patterson is a native English speaker who needs a simple app for translating to Italian while she is at school or with her friends.

### Use Case

#### Title

Translating a word from English to Italian

#### Description

Cynthia needs to translate the word “magnanimous” while she is out with her Italian monolingual friends.

#### Name of the User and Her Role

Cynthia Patterson, an American student studying in Florence who needs to find the Italian translation of a somewhat uncommon English word

#### Usage Pre-conditions

She needs a mobile device that can access the Internet.

#### Usage Post-conditions

Cynthia is quickly able to access the Italian translation of “magnanimous”.

#### Interaction Flow

1. Cynthia enters her iPhone passcode and opens the Safari app.
2. In the address bar, she enters the URL for "translr", a translation web app.
3. The CDN receives the client’s request and returns translr.netlify.app.
4. An inital GET request when the DictionarySelector mounts fetches the list of dictionaries from the API.
5. After the dictionaries load, Cynthia selects "Collins English-Italian Dictionary" from the dropdown menu.
6. The DictionarySelector component's dictionaryValue state is set to "english-italian".
7. In the search bar, Cynthia types her query.
8. The SearchBar component's searchTerm state is set to "magnanimous".
9. Cynthia then presses ‘Search’.
10. An ‘onClick’ event triggers a ‘GET’ request to the Collins Dictionary API.
11. The API retrieves the translation and returns it to the app as an HTML sting.
12. The TranslationOutput component re-renders and displays the full translation.

### Frequency of Use

Daily

---

## Persona Number Two

### Name

Cameron Washington

### Age

27

### Location

Lisbon, Portugal

### Profession

Cameron is an online English as a Second Language (ESL) instructor.

### Technology

On his most recent trip to visit his family in Mississippi, Cameron bought a new HP Spectre x360 with an Intel i5 processor. He also had a Samsung Galaxy S20 but lost it three days ago and is waiting for the replacement.
While Cameron doesn’t have a computer science background, his job requires him to be a proficient internet user.

### Attitudes and Behaviors

One of the main benefits of Cameron’s line of work is that it allows him to travel as much as he can afford. He enjoys visiting foreign countries, experiencing different cultures, and meeting locals. He has an advanced level in Spanish from living in Mexico City for a year and knows various words and phrases from other non-English languages.

### Frustrations and Needs

Cameron usually stays in youth hostels due to their relative cheapness and their social atmosphere. While he enjoys the camaraderie, he rarely gets to interact with travelers who don’t speak English or Spanish.
He has tried sites like WordReference before but doesn’t like being redirected to a new page for each definition. Since the Wi-Fi can be spotty in some of the hostels, he believes a web app that consists of just a single page would make the translation process easier for him.

### Goals

Since Cameron doesn’t have a mobile device right now, he needs a translation app with a desktop version that is fast and reliable.

### User Story

Cameron Washington is an American currently staying in Lisbon who needs a translation web app with a good desktop interface.

### Use Case

#### Title

Communicating with a German traveler whose English is limited

#### Description

Cameron’s next door neighbor at the hostel is a German woman who speaks Portuguese but only knows a few words of English. He needs to explain how to get to the train station before her departure in the morning.

#### Name of the User and His Role

Cameron Washington, an ESL teacher currently residing in Lisbon who needs to find the German translations of several words

#### Usage Pre-conditions

He needs a laptop with WiFi capabilities and a decent WiFi connection.

#### Usage Post-conditions

1. Cameron turns on his laptop and opens Firefox.
2. In the address bar, he enters the "translr" URL.
3. The CDN receives the client’s request and returns translr.netlify.app.
4. A GET request when the DictionarySelector mounts fetches the list of dictionaries from the Collins Dictionary API.
5. After the dictionaries load, Cameron selects "Collins English-German Dictionary" from the dropdown menu.
6. The DictionarySelector component's dictionaryValue state is set to "english-german".
7. In the search bar, Cameron types his query.
8. The SearchBar component's searchTerm state is set to "turn".
9. Cameron then presses ‘Search’.
10. An ‘onClick’ event triggers a ‘GET’ request to the Collins Dictionary API.
11. The API retrieves the translation and returns it as an HTML sting.
12. The TranslationOutput component re-renders and displays the translation.

### Frequency of Use

Multiple times per week
