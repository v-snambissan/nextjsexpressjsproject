# Step 1: Use Node.js v22.x as the base image
FROM node:22-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json /usr/src/app

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Build the Next.js application (optional, but recommended for production)
RUN npm run build

# Step 7: Expose the port the app will run on (default is 3000)
EXPOSE 3000

# Step 8: Start the Express server (after Next.js build is completed)
CMD ["npm", "run", "start"]
