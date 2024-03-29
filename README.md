# MOMENTUM

## What is it?

The project is a website where startups and job applicants can connect. 
Basically, the application tries to reproduce the functionality of LinkedIn. 
The functionality is described in *Brukermanual* in the [wiki (in norwegian)](https://github.com/batherk/Momentum-TDT4140-prosjekt/wiki/Brukermanual).

## What did I do?

I was assigned the role as Backend Developer in our team of six. 
The other person assigned to the backend worked solely on backend testing.
Therefore, I developed the backend on my own. 
You can read more about the structure of the backend [here (in norwegian)](https://github.com/batherk/Momentum-TDT4140-prosjekt/wiki/Kodemanual-for-tjenersiden-(Django-REST)).

## What did I learn?

Technical:
* How to logically structure a Django project
* How to use the permissions-class in Django REST when restricting access to users

Non-technical:
* Good documentation and communication between backend- and frontend developers is vital!


# Original README.md file

## Build stats
[![build status](https://gitlab.stud.idi.ntnu.no/programvareutvikling-v19/gruppe-42/badges/master/build.svg)](https://gitlab.stud.idi.ntnu.no/programvareutvikling-v19/gruppe-42/commits/master)
[![coverage report](https://gitlab.stud.idi.ntnu.no/programvareutvikling-v19/gruppe-42/badges/master/coverage.svg)](https://gitlab.stud.idi.ntnu.no/programvareutvikling-v19/gruppe-42/commits/master)

## Tech/framework uesd

This project iand its technology is mainly divided into two parts; Frontend and backend.

We have written the frontend in the JavaScript libary [React](https://reactjs.org). For 
state management we use [Redux](https://redux.js.org), and for design elements we use [ant.design](https://ant.design).

The backend is written with the Python Web framework [Django](https://www.djangoproject.com). 
To make the backend and frontend seperatable, we have used the Django module 
[django-rest-framework](https://www.django-rest-framework.org) so that the backend serves as
a REST api.

## How to download this project
Depending on the python installed on your computer, python may be used by one of these names
"python", "py", "python3". We are going to use "python" in this readme. However a python 
version of at least 3.7.0 is required


Open a terminal

```
cd to/my/folder

git clone https://gitlab.stud.idi.ntnu.no/programvareutvikling-v19/gruppe-42.git

```

## How to install backend (required)
In the same terminal

```
cd backend
```

Install and start virtual environment
```
pip install virtualenv
or
python -m pip install virtualenv

virtualenv env

Windows: source env/Scripts/activate
Mac/Linux: source env/bin/activate
```

Install required python libraries

```
pip install -r requirements.txt
or
python -m pip install -r requirements.txt
```

Handle migrations in database

```
python manage.py makemigrations
python manage.py migrate
```

Start server
```
python manage.py runserver
```

Backend is now running on http://localhost:8000/. Visit this page to play around with the api

Visit http://localhost:8000/admin to open the admin panel

## How to install frontend (required)

Open another terminal
```
cd to/my/folder/frontend

npm install
```
Start server
```
npm start
```

Frontend is now running on http://localhost:3000/. Visit this page to see the actual website

## How to run tests (optional)

### Running tests localy

Open terminal

```
cd to/my/folder/backend

python manage.py test
```

### Running tests on gitlab

Make sure you have active runners installed in gitlab, either by setting them up manually or using the shared runners

On gitlab, go to settings -> CI/CD, click expand on runners

Check if you have any active shared runners
I
If you do you're all set and if you don't you'll have to manually set up a runner by following the instructions given on gitlab

The tests will automatically run on the available runners every time a commit is pushed to gitlab
