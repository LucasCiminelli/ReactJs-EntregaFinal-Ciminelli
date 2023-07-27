# Welcome to my proyect "Gentlement's Club"

### Tech Stack

 ReactJs, Javascript, Bootstrap5, NodeJs, Firebase,     Github, Toastify


## Introduction 

For this project I created an interactive, modern and scalable E-Commerce from scratch. 
For this project I used the following technologies: ReactJs, Javascript, Bootstrap5, Firebase and Github to manage the versions.

Javascript to handle the logic of the project. ReactJs to render the components. Bootstrap5 and Css for styling. Firebase as server. With bootstrap5 and Css I managed to create a nice design, interactive with the end user and responsive, adaptable to all devices.


## Flow and functionalities

In this application you will be able to browse the different sections of the page, you will be able to enter the different categories, to which a filter was applied to redirect to specific products.

The products in the catalog and categories are brought from the Firebase database and rendered in the application using Javascript and Firebase logic and methods. Each product has a unique ID generated automatically by Firebase.
 
You will be able to access a product detail and indicate the quantity you want to add, with a limit on the available stock of the product.

If you choose to enter by URL an id that does not exist in the firebase database, the application will send a loader, analyze the id and if it resolves that it does not exist it will launch a banner on the screen indicating that the product does not exist and inviting the user to return to the store.

When added, the item will be rendered in the "Cart" component with its quantity, unit price, sub-total and image.  

The user will also be notified by a Toastify that a product has been added to the cart and the CartWidget will render a number corresponding to the number of products added to the cart by the user.

In turn, the Cart component will generate the total. You will be able to manage the product quantities also from the Cart and you will even be able to delete the products you want. 
You will also have a button to return to the Cart to continue making changes to your order.

The Cart component will start empty and with a message indicating this situation. You will only have access to the checkout when you add products.

You will also be able to leave and reload the page without losing the products in your cart, because your cart will be saved in the LocalStorage, along with every change you make to it.

Once you have finished shopping, you can go to the "Checkout" component, where you will find a summary of your purchase and a form to fill out. Once the fields are completed, you will press the "Purchase" button and a unique and automatic order ID will be generated and saved in the Firebase database and this id will then be rendered on screen along with a thank you message for your purchase. 


### Lucas Ciminelli.

