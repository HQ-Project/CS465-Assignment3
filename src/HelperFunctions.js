function solveEquation( a, b, c)
{
    // f(x) = at^2 + bt + c 

    var discriminant = Math.pow( b, 2) - 4 * a * c;
    var intersectionPoints = [];
    if ( discriminant == 0)
    {
        var intersectionPoint = ( -b ) / ( 2 * a );

        if ( intersectionPoint > 0)
        {
            intersectionPoints.push( intersectionPoint);
        }
    }
    else if ( discriminant > 0) // intersects at only one point!
    {
       var intersectionPoint1 = ( (-b) + Math.sqrt( discriminant) ) / ( 2 * a);
       var intersectionPoint2 = ( (-b) - Math.sqrt( discriminant) ) / ( 2 * a);

       if ( intersectionPoint1 > 0)
       {
            intersectionPoints.push( intersectionPoint1);
       }
       
       if ( intersectionPoint2 > 0)
       {
            intersectionPoints.push( intersectionPoint2);
       }
    }
    return intersectionPoints;
};

function realDistance( u, v)
{
    var distance = 0;
    for ( let i = 0; i < u.length; i++)
    {
        distance += Math.pow( (u[i] - v[i]), 2 );
    }
    return Math.sqrt( distance);
}

function efficientDistance( u, v)
{
    var distance = 0;
    for ( let i = 0; i < u.length; i++)
    {
        distance += Math.pow( (u[i] - v[i]), 2 );
    }
    return distance;
}

function InteractionResult( point, distance, normal, color)
{
    this.hitPoint = point;
    this.hitDistance = distance;
    this.hitNormal = normal;
    this.hitColor = color;
};