# Node.js-and-Kubernetes
# Create a node js application

Open you cmd in the project path first, then start execting the commands

- Creat package.json file
`npm init -y`

- Intall express framework
`npm install express`

- Creat a file `index.mjs`

- we will write a code to show the pod that the application is running on in the `index.mjs` file


- Run the application

`node index.mjs`

# Dockerize the application and make an image for it locally
- Create the docker file and name it Dockerfile


- Build the image
`docker build . -t yourDockerHubAccountName/repositoryName`

 `docker build -t abdelrahman1427/nooddoo .  `

# Push the local image to your dockerhub repository

login to dokcer account

`docker login`

- push the image

`docker push yourDockerHubAccountName/repositoryName`

 `docker push abdelrahman1427/nooddee`

# Create a deployment from our online image and create a service

- create a deployment

`kubectl create deployment deploymentName --image=imageSoureceFromDockerHub`

 `kubectl create deployment nooddee --image=abdelrahman1427/nooddee`

- Create a service

 `kubectl expose deployment nooddee --type=nooddee --port=5000`

# Connect to the application


- run the command to open browser and run the application

`minikube service appName`

 `minikube service nooddee`

The web browser will open and will run the code in the index.mjs file and the pod name will show up

The application url will look like this`172.26.177.67:30374`
