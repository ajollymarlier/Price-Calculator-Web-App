# **Web Technology Considerations**

Going into this project, I was not that familiar with the creation and deployment of web apps as a whole, and therefore a lot of research was done to make sure that I was choosing the best technologies for my current skill level.

## **Frontend Technology**
The three main technologies I considered for my frontend, were Angular, React, and Vue, since I wanted the app to be as responsive as possible.

My first point of consideration, was each technologies' popularity in the industry. According to StackOverflow's 2019 survey, *https://insights.stackoverflow.com/survey/2019#technology*, React(31.3%) and Angular(30.7%) were much more more popular among web frameworks than Vue(15.2%). Since I wanted to choose a technology that was indicative of what was popular among current developers, React or Angular seemed like the best choice.

Since this was my first time working with any kind of frontend frameworks, I wanted something with lots of documentation, and not too much customizability, since that would lead to inconsistent tutorials being produced. Since Vue's main drawing point was its customizability, that meant that the documentation I found was either way too vast for me to grasp in my limited working time, or two hyper-specified to one custom way of use. This meant that, again, React and Angular seemed more appealing, since they used a consistent Component-based system.

Since all three of these technologies excel as visual web frameworks, this aspect did not affect my decision at all.

Out of the three frameworks, I had only ever had experience React through a bootcamp I attended this past summer. Through that bootcamp, I created a small display board app with a filter function. I also used the framework, Material-UI to create professional looking components. This knowledge would serve me well with what I wanted to build for this assignment, therefore React seemed like the obvious choice for experience reasons.

Finally, we will look at the performance of all three frameworks. According to *https://blog.logrocket.com/angular-vs-react-vs-vue-a-performance-comparison/*, Vue leads the startup metrics, with React close behind, and Angular falling very short. This is because of Angular's heavy structure, and since I would only be using the frameworks for a small project, a lot of the structure will go unused. The same can also be seen for memory allocation, although React is a lot closer to Vue in this metric.

With all these factors taken into account, I decided to choose React since it was close to Vue in almost every performance and popularity metric, it boasted a clearer documentation style, and I had previous experience using it, so my learning time would be greatly decreased.


## **Backend Technology**
The three main technologies I considered for my backend, were Flask, Ruby on Rails, and Express.

In terms of industry popularity, according to *https://insights.stackoverflow.com/survey/2019*, Express(68.3%) is the most loved framework by developers, followed by Flask(61.1%) and then Ruby on Rails(57.1%). This meant that I would be favoring Express or Flask with respect to this criteria.

Since I had also never worked with a backend framework before, I wanted to choose a language that I was most comfortable with already. I have never worked with Ruby before, so it was automatically out of contention. With Express, I had worked with Javascript before, but that was 4 years ago, and I would need to learn a lot of it over again. This left me with Python as the obvious choice, as I had been using it regularly since I started studying at University of Toronto. Therefore I favoured Flask.

Since I would only be using the built-in technology, and not any additional frameworks for such a small web app, there was nothing to separate these three languages in this criteria. 

As I was going to build a relatively small web app, I wanted a framework that was lightweight and easy to implement. According to *https://stackshare.io/stackups/flask-vs-rails-vs-expressjs*, Rails is known for having a bloated library of functions that would be useless to me, and would only take up unneeded space. ExpressJS would be a lighter solution, but it would require the use of NodeJS as well, which would again needlessly inflate the number of technologies needed. On the other hand, Flask would let me quickly and easily set up a simple backend with almost no bloat. Therefore Flask was the obvious choice.

Finally, in terms of performance Express was much faster than both Ruby and Python, according to *https://railsware.com/blog/python-vs-ruby-vs-node-js-which-platform-is-a-fit-for-your-project/*. That being said, since I was only going to be doing elementary level computations, I decided to handle those in the frontend, and only use the backend to retrieve and save data. Therefore, the relative speed of each language was not as important to me.

In conclusion, I decided that I wanted to favour experience and ease of implementation when choosing the framework. In the end, my past experience in python, and the small size of Flask as a framework led me to choosing it as a backend technology.

## **Data Storage Methods**

Since I knew that I wasn't going to be dealing with huge amounts of data, and the only updates I would do would be updating the user's current cart items, I decided that a traditional database was unnecessary. I instead opted to choose a static file based system, hosted in the backend. Out of all the possible text file types, I narrowed my search down to .csv, .txt, and .json files.

Since the information in these files would be serialized and sent to the frontend regularly, I wanted a file format that would easily be parsed into a sendable form.

Txt files had no inherent structure, and therefore it would rely on some arbitrary structure that would be hard to stay consistent, were I to expand this project to incorporate other engineers. Csv had an inherent structure, but still required some extra string parsing to serialize it. However, Json files were meant for this purpose, and python has built in libraries that easily let me serialize the data.

This meant that .json files were the obvious choice.
