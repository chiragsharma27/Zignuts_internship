class shape {
    area(){
        console.log("Area is not defined for this shape override this method");
        return 0;
    }
}

class circle extends shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
}

const circle1 = new circle(5);
console.log("area of circle is: "+ circle1.area());

class triangle extends shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }

    area(){
        return 0.5 * this.base * this.height;
    }
}

const triangle1 = new triangle(10, 5);
console.log("area of triangle is: "+triangle1.area());

const square = new shape();
console.log("area of square is: "+square.area());