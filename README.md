


resisted-unequaled-yarn

Show
README.md
success: Opened in another tab or window
Pre-work - Memory Game
Memory Game is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Ann Wang

Time spent: 7 hours spent in total

Link to project: https://glitch.com/edit/#!/resisted-unequaled-yarn?path=README.md%3A44%3A11

Required Functionality
The following required functionality is complete:

[Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
[Y] "Start" button toggles between "Start" and "Stop" when clicked.
[Y] Game buttons each light up and play a sound when clicked.
[Y] Computer plays back sequence of clues including sound and visual cue for each button
[Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
[Y] User wins the game after guessing a complete pattern
[Y] User loses the game after an incorrect guess
The following optional features are implemented:

[Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
[Y] Buttons use a pitch (frequency) other than the ones in the tutorial
[Y] More than 4 functional game buttons
[Y] Playback speeds up on each turn
[Y] Computer picks a different pattern each time the game is played
[Y] Player only loses after 3 mistakes (instead of on the first mistake)
[Y] Game button appearance change goes beyond color (e.g. add an image)
[ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
[Y] User has a limited amount of time to enter their guess on each turn
The following additional features are implemented:

[ ] List anything else that you can get done to improve the app!
[Y] Choose level of complexity - more time
[ ] Choose level of complexity - more patterns
Video Walkthrough
Here's a walkthrough of implemented user stories:

Start/Stop:
![](https://i.imgur.com/jOGpB9m.gif)


Lose:
![](https://i.imgur.com/I6Y4jBj.gif)


Win:
![](https://i.imgur.com/NFvZ25t.gif)


Reflection Questions
If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. a) for math.random(provided) b) for images: i) cat: https://image.freepik.com/free-photo/cat-medical-mask-quarantine-home_102583-2223.jpg ii) rabbit: https://media.istockphoto.com/photos/rabbit-in-the-medical-mask-picture-id1208392037?k=6&m=1208392037&s=170667a&w=0&h=WQXRGY_cTa4KvbYKMs2OKLdLRHleDD6IhpM6xBWRgnw= iii) dog: https://image.freepik.com/free-photo/small-dog-breed-pomeranian-with-light-brown-hair-sitting-wearing-anti-pollution-pm2-5-mask-it-feels-uncomfortable-so-it-trying-pull-mask-out_49003-627.jpg iv) guineapig: https://pbs.twimg.com/media/EUFA6MwVAAEb_jT.jpg?format=jpg&name=small v) pig: https://thumbs.dreamstime.com/b/pig-wearing-medical-face-mask-protect-herself-infection-181285248.jpg vi) turtle: https://th.bing.com/th/id/OIP.s5wGkLqF8HLcLgv93-kR5gHaE7?pid=ImgDet&rs=1 c) for background image: https://www.w3schools.com/cssref/pr_background-image.asp https://www.w3schools.com/cssref/css3_pr_background-size.asp d) for setinterval and clearinterval(provided)

What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) I was having difficulty in determining when I should be calling clearTimer(which calls clearInterval) since my program was looping as the timer kept running after the game ended. Also, whenever I guessed a button, the timer stops running. I realized that I called clearTimer in the wrong function (guess) by debugging using printing out to console the current time.

What questions about web development do you have after completing your submission? (recommended 100 - 300 words) I am curious about how different browsers handle the different elements we implement. I was using Safari for coding and after some struggling, I realized that it did not support the audio library so I couldn't hear the notes played. Also, the buttons all had an extra border on Microsoft Edge I did not realize in Safari so I do hope to learn more about how to get a similar appearance on different browsers.

If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) I want to implement more features that the user can choose in the beginning of the game. Some include game functions like the number of patterns, the time to guess for each turn. Also, I would enjoy fun features that include different image themes, such as food, plants, cities, etc. Another thing is when the user guesses wrong, they don't get a repeat of the pattern which might be something I would change to let them see again.

License
Copyright [Ann Wang]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


