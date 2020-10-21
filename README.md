LHL Node Skeleton
=========

## Project Setup

The following steps are only for _one_ of the group members to perform.

1. Create your own copy of this repo using the `Use This Template` button, ideally using the name of your project. The repo should be marked Public
2. Verify that the skeleton code now shows up in your repo on GitHub, you should be automatically redirected
3. Clone your copy of the repo to your dev machine
4. Add your team members as collaborators to the project so that they can push to this repo
5. Let your team members know the repo URL so that they use the same repo (they should _not_ create a copy/fork of this repo since that will add additional workflow complexity to the project)


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples. 
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x



==== EXAMPLE DELETE WHEN COMPLETE ====
# Edge App

## Example stuff from SMPedge.

## Roles

- Marketing
- Project Manager
- Contactor
- CAD Guy

## Use Cases

1. Notification page (start page)
1. Staff
    - status page
    - profile information
        - Location
        - Title
1. Project list
1. Bidding

## Use Case Details

### Start Page

"Wire Items" - Headline at top & archive down right side used to communicate company info to staff.
"Feature Project" - Brag about how good we are as electrical engineers... internally waste of space and my time. Should have been an events calendar.

![enter image description here](./rdmeimages/start.png)

### Start Page Admin

"Content management" - Used by marketing department to edit Start page.

![enter image description here](./rdmeimages/startadmin.png)
![enter image description here](./rdmeimages/startadmin2.png)

![enter image description here](./rdmeimages/startadmin2.png)

![enter image description here](./rdmeimages/staff.png)

![enter image description here](./rdmeimages/staff.png)

### Staff Member Chips

- Green - Employee is in office
- Dark red - Employee is out and has not indicated neither location nor return time.
- Bright red - Employee is out and has indicated location and/or return time.

  ![enter image description here](./rdmeimages/staffchips.png)

### Staff Member Dialog for Self

![enter image description here](./rdmeimages/staffself.png)

### Staff Member Dialog for Other

![enter image description here](./rdmeimages/staffother.png)

### Staff Member Admin

![enter image description here](./rdmeimages/staffadmin.png)

### Document Template Resource (concept)

![enter image description here](./rdmeimages/doctemplates.png)

### Detail drawing Library

Also contained in:

- Edge for Revit Addin (creates new detail view converts Autocad entities to Revit elements)
- Edge for AutoCAD Addin (inserts detail into drawing)

![enter image description here](./rdmeimages/detailbinder.png)

## Project Search by

- SearchString
- Project Office
- Manager in Charge
- Project Year
- Client
- Project market sector

Selected item in results pane shows:

- Project Manager
- Top 3 billing employees
- Manager who receives billing report
- "Go to Project" button opens windows explorer to project folder.

![enter image description here](./rdmeimages/projectsearch.png)

## Project Initiate

Completed form:

- Assigns project number
- Submits project details to accounting for entry.
- Creates project folder from template store.


![enter image description here](./rdmeimages/projectsetup.png)
==== Examples ====
