# Setting up the environment

Install Docker and Docker Compose somehow. Basically you just run

```bash
docker-machine start
docker-compose up
```

To start the environment. Then in a new shell you can run

```bash
docker-compose exec app bash
```

to get a shell to work in. From there you can do pretty much whatever. The container is based on node:latest, so you get quite a bit out of the box. You can change to a lighter container if you're more comfortable with that.

Note: if you're coming from windows, it'll help to set your editor's line endings to LF.

# Getting the data

The first script prints out the results of a game, given a week and year. You will need an API key, which you can pipe in for convenience. This one may no longer be valid--it may be necessary to write a utility to crawl fox sports for a valid key and print it.

```bash
echo "jE7yBJVRNAwdDesMgTzTXUUSx1It41Fq" | bash ./fetch-api 7 2018
```

# Processing the data

You can pipe the above into the Node processor, which takes each line of JSON and applies a function to it.

```bash
echo "jE7yBJVRNAwdDesMgTzTXUUSx1It41Fq" | bash ./fetch-api 7 2018 | node parse-response
```

# ad-hoc Web API

It's kind of obnoxious to run the command through the terminal each time, so there's a temporary API set up on port 3000 that runs it for you. This will eventually be replaced by something a little more robust that allows users to query the data and force updates, but for now just send a GET to localhost:3000 to run the shell script.