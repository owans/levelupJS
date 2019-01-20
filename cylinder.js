const Calculator = {
    Cylinder:function(height,diameter){
        this.height = height;
        this.diameter = diameter;

        Cylinder.prototype.Volume = function(){
            var radius = this.diameter/2;
            return this.diameter * Math.pi * radius * radius;
        };

        var cylinder = new Cylinder();
        
    }
    
}

console.log('Volume =' , Cylinder.Volume().toFixed());


