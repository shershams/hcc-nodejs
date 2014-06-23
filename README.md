# C SCI 244 Advanced JS with Node.js

## Install Ubuntu 12.04 LTS on your Windows

Download VirtualBox and follow instructions from here: [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)

Installing Ubuntu in VirtualBox: [http://www.wikihow.com/Install-Ubuntu-on-VirtualBox](http://www.wikihow.com/Install-Ubuntu-on-VirtualBox)

## Configure environment

### Step 1 - Update and upgrade all your packages on your Ubuntu

Run the following command in the Terminal

	sudo apt-get update
	sudo apt-get upgrade

### Step 2 - Install basic packages

	sudo apt-get install git-core curl build-essential;
	curl https://raw.github.com/creationix/nvm/master/install.sh | sh;
	nvm install v0.10.28;
	nvm use 0.10.28;
	nvm alias default 0.10.28;
	sudo npm install forever -g;
	
### Step 3 - Clone the GIT repository

	cd ~/;
	git clone https://github.com/shershams/hcc-nodejs.git;
	cd hcc-nodejs;

### Step 4 - Install application packages

	cd ~/hcc-nodejs;
	npm install;

### Step 5 - Run the application

	node app.js;

## Install Sublime Text

Link to commands: [http://www.oliverdavies.co.uk/blog/2013/03/quickest-way-install-sublime-text-2-ubuntu/](http://www.oliverdavies.co.uk/blog/2013/03/quickest-way-install-sublime-text-2-ubuntu/)

	sudo add-apt-repository ppa:webupd8team/sublime-text-2
	sudo apt-get update
	sudo apt-get install sublime-text