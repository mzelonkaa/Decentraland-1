export type Props = {
clickable,
onActivate?
}
/// click to hear siren, click again for siren to stop

export default class Door implements IScript<Props> {
  Clip = new AudioClip("1ed28f7d-046b-428c-8ac5-fcbed8df275e/sounds/PoliceSiren.mp3")
  

  active: Record<string, boolean> = {}

  init() {}

toggle(entity: Entity) {
 
    const source = new AudioSource(this.Clip)
    entity.addComponentOrReplace(source)
    source.playing = true
}


  spawn(host: Entity, props: Props, channel: IChannel) {
    const car = new Entity(host.name + "-button")
    car.setParent(host)

    

    car.addComponent(new GLTFShape("1ed28f7d-046b-428c-8ac5-fcbed8df275e/models/Police_Car.glb"))

    if(props.clickable){
      car.addComponent(
          new OnPointerDown(() => {
            const activateAction = channel.createAction('activate', {})
            channel.sendActions([activateAction])
          })
        )
  }


    // handle actions
    channel.handleAction("activate", ({ sender }) => {
      this.toggle(car)
      if (sender === channel.id) {
        channel.sendActions(props.onActivate)
      }
    })
   
  }
}

    // sync initial values
