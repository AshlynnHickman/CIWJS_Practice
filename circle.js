class Circle {  
    set radius(radius){
        this._radius = radius;
        this.area = 3.14 * Math.pow(radius, 2);
        this.circumference = 2*(3.14)*radius;
  }
}
