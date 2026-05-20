# Deployment of CSD Website on CCC Container

This doc details the steps to be followed to deploy the CSD Website in its current stack (frontend - NextJS, backend - Strapi CMS, database - PostgreSQL) on a container provided by CCC.
Let the username on the container be `csduser` and the domain name be `csd.nitk.ac.in`.

## Connect to and setup the container
### Connect to the container via SSH
Run the command when connect to internal NITK network.
```bash
ssh csduser@csd.nitk.ac.in
```
You will be prompted to enter a password, where you should enter the user password of `csduser`.

### Upgrade packages
```bash
sudo apt update
sudo apt upgrade
```
Run these commands to update and upgrade all packages on the system.

## Install and setup NodeJS and PM2
We will be installing NodeJS via Node Version Manager ([NVM](https://github.com/nvm-sh/nvm)).
### Install NVM
Follow the updated instruction to install NVM from the [README](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script). For the latest version as of the writing of this doc, run:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```
And then run:
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

### Install NodeJS 20
As many of the packages in Strapi CMS v4 require a lower NodeJS version, it is best to use NodeJS 20.
```bash
nvm install 20
```
The below command can be used to change the active version of NodeJS being used:
```bash
nvm use 20
```

### Install PM2
[PM2](https://pm2.keymetrics.io/) is a process manager used to manage NodeJS processes, such as our frontend and backend applications. Run the below command to install PM2:
```bash
npm install pm2 -g
```

## Install and setup Nginx

### Install Nginx
```bash
sudo apt install nginx
```

### Modify the config file
```bash
cd /etc/nginx/sites-available
sudo nano default
```
In the file, find the `location /` block inside the main `server` block. Replace the single `location` block with the below two blocks:
```nginx
location / {
  proxy_pass http://localhost:3000/;
}

location /strapi/ {
  proxy_pass http://localhost:1337/;
}
```

### Restart Nginx service
```bash
sudo systemctl restart nginx.service
```

## Install and setup PostgreSQL
The backend Strapi CMS uses PostgreSQL database to store the content for the website. Postgres Engine can be setup on the container using the steps below.

### Install PostgreSQL
```bash
sudo apt install postgresql postgresql-contrib
```
Ensure that the DB Engine service is started by running the below command:
```bash
sudo systemctl start postgresql.service
```

### Update the postgres user password
Run the below command to login to the PostgreSQL shell
```bash
sudo -u postgres psql
```
Inside the PSQL shell, run the following command to update the password of the database user, `postgres`. 
```sql
ALTER USER postgres WITH PASSWORD 'csdpostgrespassword';
```

### Create a DB to be used by Strapi CMS
```sql
CREATE DATABASE csdstrapidb;
```
You may now exit the PSQL Shell.


## Setup Backend CMS

### Clone the repository and change into backend directory
```bash
git clone https://github.com/csd-robocon-nitk/csd-website
cd ~/csd-website/backend
```

### Install dependencies
```bash
npm install
```

### Update environment variables
Create the `.env` file from the template file provided. Then open the file with nano.
```bash
cp .env.example .env
nano .env
```
Add the following lines to the environment file:
```
DATABASE_URL=postgresql://postgres:csdpostgrespassword@localhost:5432/csdstrapidb
DATABASE_CLIENT=postgres
URL=https://csd.nitk.ac.in/strapi
```

### Build and run the Strapi CMS using PM2
```bash
npm run build
pm2 start --name strapi "npm run start"
```
You should be able to view the Strapi landing page at `http://csd.nitk.ac.in/strapi`. You will be prompted to create a new user when you first visit the admin panel. Use a strong password when creating this user. After logging in, navigate to `Settings > API Tokens` and create a new readonly token with validity. Copy the token displayed on the dashboard to a safe location, to be used in the next step.

> [!TIP]
> **Restoring content from backup**
> 
> If you have the backup of an existing Strapi instance (obtained by using Strapi export command), the data can be restored from the zip file. Copy the zip onto the machine and then run `npm run strapi import -- -f <path-to-backup-zip>`


## Setup Frontend App

### Install dependencies
```bash
cd ~/csd-website/
npm install
```

### Update environment variables
Create the `.env` file, and open the file with nano.
```bash
touch .env
nano .env
```
Add the following lines to the environment file:
```
NEXT_PUBLIC_STRAPI_API_URL=https://csd.nitk.ac.in/strapi
NEXT_PUBLIC_TOKEN=<insert Strapi API Token here>
```

### Build and run the Frontend App using PM2
```bash
npm run build
pm2 start --name frontend "npm run start"
```
You should be able to view the website successfully running at `http://csd.nitk.ac.in/`.


## Provision SSL Certificate using `certbot`
