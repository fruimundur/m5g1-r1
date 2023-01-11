Other than following Smári's tutorial, I created a new collection in my MongoDB database, with a another string.
This new string will is sent back as a response to localhost/newcollection

In my React code I'm fetching this new string by using the same code block as the other one (from the tutorial),
but only changing the fetch URL to end with "/newcollection". I then added a link you could click on, that would take to you that page.
My idea was that the data (the string) wouldn't be fetched and displayed until after you had clicked on the link. But when I refreshed everything
the string was being displayed on the front page together with the first string. I tried solving this my adding an onclick function to the link,
so that the code which was fetching the data from the second collection would not be displayed until after the onclick function had been envoked.
This didn't work either. I think it's because the page is being refreshed when you click the button or something like that.
The way to properly do this would probably be to use React Router, and redirect to a new route when the link is clicked, and from there run the
code which fetches the date from the second collection. But due to being a bit time pressured and not wanting to fall behind schedule, I won't be doing that
but hopefully this explanation shows that I might be able to figure it out if I had more time :D

I hope that made sense lol

The repository for my React/Frontend code is here: https://github.com/fruimundur/m5g1-r2/tree/master
(Please note that I haven't added any comments to it, because I have explained everything in this Readme file)