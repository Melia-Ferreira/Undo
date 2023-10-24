class ConcreteCommand {
    constructor(polyline, dessin){
        this.polyline = polyline
        this.dessin = dessin
    }
    undo(){
        this.polyline.remove()
    }

    redo(){
        this.dessin.add(this.polyline)
    }
}
export default ConcreteCommand