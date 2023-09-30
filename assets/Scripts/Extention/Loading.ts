import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Loading')
export class Loading extends Component {
    @property(Node) open: Node;
    @property(Node) close: Node;
    onLoad() {
        this.open.active = true;
        this.close.active = false;

    }
    start() {
        //   this.OpenScene();
    }
    public OpenScene() {
        setTimeout(() => {
            if (this.open)
                this.open.active = true;
        }, 50);
        setTimeout(() => {
            if (this.open)
                this.open.active = false;
        }, 1000);
    }

    public LoadScene(nameScene: string, time: number): void {
        setTimeout(() => {
            if (this.close)
                this.close.active = true;
        }, 50);
        setTimeout(() => {
            director.loadScene(nameScene);
        }, time * 1000 + 50);
    }

}

