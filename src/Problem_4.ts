{

    type Circle = {
        shape : 'circle'
        radius : number 
      }
      
      type Rectangle ={
       shape: 'rectangle'
        height: number ;
        width : number 
      }
      
      type Shape = Circle| Rectangle
      
      
      // function calculateShapeArea(shape: Shape ): number {
      //   if( 'circle' in shape ){
      //     return parseFloat((Math.PI *  ).toFixed(2));
      //   }
      
      
      function calculateShapeArea(shape: Shape): number {
        if (shape.shape === 'circle') {
            return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
        } else (shape.shape === 'rectangle') ;{
            return parseFloat((shape.width * shape.height).toFixed(2));
        }
      }
      
      const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
      
      console.log(circleArea);
      
      const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });
       console.log(rectangleArea);
      
      
      
}