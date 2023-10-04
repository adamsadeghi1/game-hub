npm run build

docker stop game-hub-react-container
docker rm -f game-hub-react-container
docker rmi -f game-hub-react-image

docker build -t game-hub-react-image .
docker run -d -p 5180:5180 --name game-hub-react-container game-hub-react-image