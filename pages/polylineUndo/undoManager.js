import Stack from "./stack.js";

class UndoManager {
    constructor(buttonUndo, buttonRedo) {
        this.undoStack = new Stack();
        this.redoStack = new Stack();
        this.buttonUndo = buttonUndo;
        this.buttonRedo = buttonRedo;
    }

    execute(command) {
        this.undoStack.push(command);
        this.buttonUndo.disabled = false;
    }

    canUndo() {
        return this.undoStack.isEmpty();
    }

    canRedo() {
        return this.redoStack.isEmpty();
    }

    undo() {
        let commande = this.undoStack.peek()
        commande.undo();
        this.redoStack.push(commande);
        this.undoStack.pop();
        this.buttonUndo.disabled = this.canUndo();
        this.buttonRedo.disabled = false;
    }

    redo() {
        let commande = this.redoStack.peek();
        commande.redo();
        this.undoStack.push(commande);
        this.redoStack.pop();
        this.buttonRedo.disabled = this.canRedo();
        this.buttonUndo.disabled = false;
    }
}
export default UndoManager