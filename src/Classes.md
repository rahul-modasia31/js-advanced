## Initialize a class

```
class ClassName {
// Class body
}

```

## Initialize a class with a constructor

```
class ClassName {
    constructor() {
    // Class body
    }
}
```

## Initialize a class with a constructor and a method

```
class ClassName {
    constructor() {
    // Class body
    }
    methodName() {
    // Method body
    }
}
```

## Initialize a class which extends another class

```
class ClassName extends ParentClassName {
    constructor() {
    super();
    // Class body
    }
    methodName() {
    super.methodName();
    // Method body
    }
}
```

## Static methods and properties

#### Can only be accessed on the class itself, not on instances of the class

```
class ClassName {
    static staticProperty = 'value';
    static staticMethod() {
    // Method body
    }
}
```

## Getters and setters

####Getters and setters are methods that get and set the value of an object's property.

#### Getters and setters can be used on any property, even if it is not explicitly defined.

```
class ClassName {
    get propertyName() {
    return this.property;
    }
}

const instance = new ClassName();
instance.propertyName; // Returns the value of property

class ClassName {
    set propertyName(value) {
    this.property = value;
    }
}

const instance = new ClassName();
instance.propertyName = 'value'; // Sets the value of property

```
