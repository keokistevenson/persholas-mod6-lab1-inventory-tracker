
This is supposed to be an inventory system, but it is not an inventory system. The goal of the project is to teach OOP concepts in TypeScript. The overall idea is great. The execution creates unnecesary noise when all we need is to get the concepts and syntax down. You can thrown monkey wrenches AFTER we get the hang of things. I think for many, all the complexity will be a distraction and undermine the beauty of this assignment.


# Critical Thinking


## How does TypeScript enforce type safety in this object-oriented program?
Parameters must be the correct type. If i defined the array Physical or Digital products, i would not have been able to add the other as i did by using the base class for the Products[]. I wont allow me to apply methods of the derived classes on the base class. with ordinary JS, these methods would be added by mistake to the objects.

## How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
product.displayDetails() is reused for each without their having their own implementations which would have violated the DRY principle.


## What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?
FileSize and weight were only accessible through getters. They can't be accessed directly preventing them from being set. There is no need to arbitrarily SET weight and fileSize they are inherit physical qualities which should not change from their inception when they are constructed. 

## If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?
It would inherit Product, get added to the Product array Product[]. It will benefit from the polymorphism of product.displayDetails() like all the other objects.