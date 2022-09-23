export function object (x : Entity)
{
    function distance (pos1: Vector3, pos2:Vector3):number {

      const a = pos1.x - pos2.x
      const b = pos1.z - pos2.z
      return (a*a + b*b)**(1/2)
    
    }
    
    const camara = Camera.instance // Camera obj universal 
    
    const transform = x.getComponent(Transform)
    const dist = distance(transform.position, camara.position)

    if (dist > 8)
    { 
      engine.removeEntity(x)

    }
    else 
    {
      if (x.alive)
      {
        return 
      }
      else 
      {
        engine.addEntity(x)
      }
    }


  
}